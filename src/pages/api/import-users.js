import { createClient } from '@supabase/supabase-js';

export async function POST({ request }) {
  // Panggil Supabase pakai Kunci Sakti (Service Role Key)
  const supabaseAdmin = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY
  );
  
  const users = await request.json();
  let successCount = 0;
  let errors = [];

  // Looping tiap baris data dari CSV
  for (const user of users) {
    const { email, full_name, password } = user;
    
    // 1. Daftarin ke brankas rahasia Supabase (Auth)
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true // Langsung aktif, nggak perlu klik link di email!
    });

    if (authError) {
      errors.push(`${email}: ${authError.message}`);
      continue; // Lanjut ke mahasiswa berikutnya kalau error
    }

    // 2. Masukin datanya ke tabel profiles lo
    await supabaseAdmin.from('profiles').upsert({
      id: authData.user.id, // Samain ID-nya
      email: email,
      full_name: full_name,
      role: 'user'
    });

    successCount++;
  }

  return new Response(JSON.stringify({ success: true, successCount, errors }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}