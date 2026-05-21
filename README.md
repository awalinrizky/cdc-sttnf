CDC STT-NF Web Portal
Selamat datang di repositori kode untuk website Career Development Center (CDC) STT-NF. Sistem portal web ini dibangun menggunakan framework Astro.js untuk antarmuka pengguna dan Supabase (PostgreSQL) untuk basis data serta sistem autentikasi.

Persyaratan Sistem
Sebelum melakukan instalasi di server, pastikan lingkungan server Anda telah memenuhi spesifikasi berikut:

Node.js: Versi 18.x atau yang lebih baru.

Package Manager: NPM atau Yarn.

Database: Instance Supabase (PostgreSQL) yang sudah aktif.

    Panduan Instalasi dan Deployment (Server)
Silakan ikuti langkah-langkah di bawah ini untuk mengonfigurasi dan menjalankan sistem pada server production:

1. Clone Repositori dan Instalasi Dependensi
Tarik kode terbaru dari repositori ke dalam server Anda, lalu jalankan perintah berikut untuk menginstal seluruh library yang dibutuhkan:

npm install

2. Konfigurasi Environment Variables
Buat sebuah file baru bernama .env di dalam direktori utama (root) project. Salin format di bawah ini dan sesuaikan nilainya dengan kredensial dari dashboard Supabase Anda:

PUBLIC_SUPABASE_URL="masukkan_url_supabase_di_sini"
PUBLIC_SUPABASE_ANON_KEY="masukkan_anon_key_di_sini"
SUPABASE_SERVICE_ROLE_KEY="masukkan_service_role_key_di_sini"
(Catatan Penting: Variabel SUPABASE_SERVICE_ROLE_KEY wajib diisi agar fitur manajemen Admin dan Sinkronisasi CSV akun mahasiswa secara masal dapat berjalan tanpa kendala).

3. Migrasi dan Pengaturan Database
Seluruh struktur database (tabel, relasi, dan Row Level Security) telah kami sediakan untuk mempermudah konfigurasi.

Buka file database.sql yang berada di dalam folder utama project ini.

Salin seluruh isi kode SQL tersebut, kemudian jalankan (Execute) melalui menu SQL Editor pada dashboard Supabase server Anda.

Proses ini akan secara otomatis membentuk seluruh tabel yang diperlukan (seperti profiles, jobs, events, posts, roadmaps, surveys, responses, dll) beserta aturan keamanannya.

4. Build Project
Setelah seluruh konfigurasi selesai, jalankan perintah build untuk mengompilasi kode program menjadi file statis/server yang siap rilis:

npm run build

5. Menjalankan Aplikasi di Production
Gunakan PM2 atau Node process manager lainnya untuk menjalankan server build secara terus-menerus:

node ./dist/server/entry.mjs

Alternatif jika Anda ingin menjalankan mode preview untuk pengujian jaringan lokal:

npm run preview -- --host