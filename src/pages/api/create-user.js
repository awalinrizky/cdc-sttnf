import { createClient } from "@supabase/supabase-js";

export const POST = async ({ request }) => {
  try {
    // Tangkap data yang dikirim dari form frontend
    const { email, password, role, adminId } = await request.json();

    if (!email || !password || !role) {
      return new Response(JSON.stringify({ error: "Data tidak lengkap!" }), { status: 400 });
    }

    // Panggil Supabase pakai Kunci Dewa (Server-side)
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Verifikasi tambahan: Pastikan yang nge-request beneran Superadmin
    const { data: adminProfile, error: profileCheckErr } = await supabaseAdmin
      .from('profiles') // Sesuaikan kalau tabel lo namanya 'users'
      .select('role')
      .eq('id', adminId)
      .single();

    if (profileCheckErr || adminProfile.role !== 'superadmin') {
      return new Response(JSON.stringify({ error: "Akses Ditolak: Hanya Superadmin yang bisa membuat akun." }), { status: 403 });
    }

    // 2. Buat akun baru di tabel Auth Supabase
    const { data: authData, error: authErr } = await supabaseAdmin.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Otomatis terverifikasi
    });

    if (authErr) throw authErr;

    // 3. Masukkan role ke tabel 'profiles' (atau 'users')
    const { error: insertErr } = await supabaseAdmin
      .from('profiles') // Sesuaikan dengan nama tabel profil/role lo
      .insert([{
        id: authData.user.id,
        email: email,
        role: role
      }]);

    if (insertErr) {
      // Rollback: kalau gagal masukin role, hapus akun yang telanjur dibikin di Auth
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      throw insertErr;
    }

    return new Response(JSON.stringify({ success: true, message: "Akun berhasil dibuat!" }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};