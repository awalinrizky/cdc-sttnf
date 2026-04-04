import { supabase } from "./supabase.js";

// FUNGSI 1: Untuk halaman konten biasa (Lowongan, Blog, Event, dll)
export async function requireAdmin() {
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  
  if (sessionError || !session) {
    window.location.href = "/login";
    return null;
  }

  // Cek role user di database (Pastiin nama tabel lo bener, biasanya 'profiles' atau 'users')
  const { data: profile, error: profileError } = await supabase
    .from("profiles") // <-- Ganti jika tabel role lo namanya beda
    .select("role")
    .eq("id", session.user.id)
    .single();

  if (profileError || !profile) {
    window.location.href = "/login";
    return null;
  }

  // LOGIKA STEP 1 ADA DI SINI:
  // Izinkan masuk JIKA rolenya 'admin' ATAU 'superadmin'
  if (profile.role !== "admin" && profile.role !== "superadmin") {
    window.location.href = "/403"; // Lempar ke halaman akses ditolak jika role-nya mahasiswa/umum
    return null;
  }

  // Jika lolos, kembalikan data session dan profile buat dipake di halaman
  return { session, profile };
}

// FUNGSI 2: Untuk halaman sistem/Kelola Pengguna (KHUSUS SUPERADMIN)
export async function requireSuperAdmin() {
  // Panggil pengecekan pertama dulu
  const result = await requireAdmin();
  if (!result) return null;

  // Kalau lolos cek pertama, pastikan dia BENERAN superadmin
  if (result.profile.role !== "superadmin") {
    alert("Akses Ditolak: Fitur ini khusus untuk Superadmin.");
    window.location.href = "/admin"; // Tendang balik ke halaman dashboard utama
    return null;
  }

  return result;
}
// FUNGSI 3: Satpam Halaman Konten (Untuk Mahasiswa Aktif & Alumni yang di-ACC)
export async function requireMahasiswa() {
  const { data: { session }, error } = await supabase.auth.getSession();
  
  if (error || !session) {
    window.location.href = "/login";
    return null;
  }

  const email = session.user.email;
  
  // 1. Cek apakah ini email kampus (Mahasiswa / Dosen)
  const isMahasiswaAktif = email.endsWith("@student.nurulfikri.ac.id");
  const isDosen = email.endsWith("@nurulfikri.ac.id");

  // Kalau email kampus, otomatis lolos!
  if (isMahasiswaAktif || isDosen) {
    return session;
  }

  // 2. Kalau bukan email kampus (misal Gmail/Yahoo), kita cek apakah dia Alumni yang udah di-ACC
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", session.user.id)
    .single();

  // Kalau dia login pake Gmail tapi Admin belum ngasih role "alumni" / "admin" ke dia -> Tendang!
  if (!profile || (profile.role !== "alumni" && profile.role !== "admin" && profile.role !== "superadmin")) {
    alert("Akses Ditolak: Email luar kampus harus di-invite dan di-ACC oleh Admin CDC.");
    await supabase.auth.signOut();
    window.location.href = "/login";
    return null;
  }

  // Kalau dia punya role 'alumni', lolos!
  return session; 
}