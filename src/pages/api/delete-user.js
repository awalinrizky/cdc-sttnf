import { createClient } from '@supabase/supabase-js';
export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const { userId } = await request.json();

    // Panggil Supabase pakai Kunci Dewa
    const supabaseAdmin = createClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // 1. Hapus profilnya dulu dari tabel profiles
    await supabaseAdmin.from('profiles').delete().eq('id', userId);

    // 2. Hapus akunnya dari sistem Auth utama Supabase
    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};