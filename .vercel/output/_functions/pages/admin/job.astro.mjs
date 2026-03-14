import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BjG47qh-.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Job = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "CDC STT-NF | Kelola Lowongan", "data-astro-cid-bulr365n": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="admin-job-page" data-astro-cid-bulr365n> <div class="container" data-astro-cid-bulr365n> <div class="page-header" data-astro-cid-bulr365n> <div data-astro-cid-bulr365n> <p class="eyebrow" data-astro-cid-bulr365n>Admin Panel</p> <h1 data-astro-cid-bulr365n>Kelola Lowongan</h1> <p class="subtext" data-astro-cid-bulr365n>
Tambah, edit, hapus, dan atur status lowongan kerja.
</p> </div> <div class="page-actions" data-astro-cid-bulr365n> <a href="/admin" class="btn btn-outline" data-astro-cid-bulr365n>Kembali ke Dashboard</a> <button id="logoutBtn" class="btn btn-danger" data-astro-cid-bulr365n>Logout</button> </div> </div> <div class="layout-grid" data-astro-cid-bulr365n> <div class="form-card" data-astro-cid-bulr365n> <h2 id="formTitle" data-astro-cid-bulr365n>Tambah Lowongan</h2> <form id="jobForm" class="job-form" data-astro-cid-bulr365n> <div class="form-group" data-astro-cid-bulr365n> <label for="title" data-astro-cid-bulr365n>Judul Lowongan</label> <input type="text" id="title" required data-astro-cid-bulr365n> </div> <div class="form-group" data-astro-cid-bulr365n> <label for="companyName" data-astro-cid-bulr365n>Nama Perusahaan</label> <input type="text" id="companyName" data-astro-cid-bulr365n> </div> <div class="form-group" data-astro-cid-bulr365n> <label for="jobLocation" data-astro-cid-bulr365n>Lokasi</label> <input type="text" id="jobLocation" required data-astro-cid-bulr365n> </div> <div class="form-group" data-astro-cid-bulr365n> <label for="applyUrl" data-astro-cid-bulr365n>Link Apply</label> <input type="url" id="applyUrl" placeholder="https://..." data-astro-cid-bulr365n> </div> <div class="form-group" data-astro-cid-bulr365n> <label for="description" data-astro-cid-bulr365n>Deskripsi</label> <textarea id="description" rows="6" data-astro-cid-bulr365n></textarea> </div> <div class="checkbox-group" data-astro-cid-bulr365n> <input type="checkbox" id="isActive" checked data-astro-cid-bulr365n> <label for="isActive" data-astro-cid-bulr365n>Tampilkan di publik</label> </div> <div class="form-actions" data-astro-cid-bulr365n> <button type="submit" id="submitBtn" class="btn btn-primary" data-astro-cid-bulr365n>
Simpan Lowongan
</button> <button type="button" id="cancelEditBtn" class="btn btn-outline" hidden data-astro-cid-bulr365n>
Batal Edit
</button> </div> <p id="formMessage" class="message" data-astro-cid-bulr365n></p> </form> </div> <div class="list-card" data-astro-cid-bulr365n> <div class="list-head" data-astro-cid-bulr365n> <h2 data-astro-cid-bulr365n>Daftar Lowongan</h2> <input type="text" id="searchInput" placeholder="Cari judul / perusahaan / lokasi..." data-astro-cid-bulr365n> </div> <div id="jobList" class="job-list" data-astro-cid-bulr365n> <p class="empty" data-astro-cid-bulr365n>Memuat data lowongan...</p> </div> </div> </div> </div> </section>  ${renderScript($$result2, "C:/astro-project/src/pages/admin/job.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/astro-project/src/pages/admin/job.astro", void 0);

const $$file = "C:/astro-project/src/pages/admin/job.astro";
const $$url = "/admin/job";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Job,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
