import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CTuTJhWc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "CDC STT-NF | Dashboard Admin", "data-astro-cid-u2h3djql": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="admin-page" data-astro-cid-u2h3djql> <div class="container" data-astro-cid-u2h3djql> <div class="admin-header" data-astro-cid-u2h3djql> <div data-astro-cid-u2h3djql> <p class="eyebrow" data-astro-cid-u2h3djql>Admin Panel</p> <h1 data-astro-cid-u2h3djql>Dashboard Admin</h1> <p class="subtext" data-astro-cid-u2h3djql>Kelola lowongan kerja dan magang CDC STT-NF.</p> </div> <div class="header-actions" data-astro-cid-u2h3djql> <span id="roleBadge" class="role-badge" data-astro-cid-u2h3djql>Memuat role...</span> <button id="logoutBtn" class="btn btn-danger" data-astro-cid-u2h3djql>Logout</button> </div> </div> <div class="grid" data-astro-cid-u2h3djql> <div class="card" data-astro-cid-u2h3djql> <h3 data-astro-cid-u2h3djql>Total Lowongan</h3> <p id="jobCount" class="stat-value" data-astro-cid-u2h3djql>-</p> <small data-astro-cid-u2h3djql>Jumlah semua data lowongan di sistem</small> </div> <div class="card" data-astro-cid-u2h3djql> <h3 data-astro-cid-u2h3djql>Lowongan Aktif</h3> <p id="activeCount" class="stat-value" data-astro-cid-u2h3djql>-</p> <small data-astro-cid-u2h3djql>Hanya lowongan yang tampil di publik</small> </div> <div class="card" data-astro-cid-u2h3djql> <h3 data-astro-cid-u2h3djql>Manajemen</h3> <p class="card-copy" data-astro-cid-u2h3djql>
Masuk ke halaman kelola lowongan untuk tambah, edit, atau hapus data.
</p> <a href="/admin/job" class="btn btn-primary" data-astro-cid-u2h3djql>Kelola Lowongan</a> </div> </div> <div class="card user-card" data-astro-cid-u2h3djql> <h3 data-astro-cid-u2h3djql>Informasi Akun</h3> <p data-astro-cid-u2h3djql><strong data-astro-cid-u2h3djql>Email:</strong> <span id="userEmail" data-astro-cid-u2h3djql>-</span></p> <p data-astro-cid-u2h3djql><strong data-astro-cid-u2h3djql>Role:</strong> <span id="userRole" data-astro-cid-u2h3djql>-</span></p> </div> </div> </section>  ${renderScript($$result2, "C:/astro-project/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/astro-project/src/pages/admin/index.astro", void 0);

const $$file = "C:/astro-project/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
