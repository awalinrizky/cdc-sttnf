import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DIyg3etq.mjs';
import { s as supabase } from '../chunks/supabase_Bqk9tzv3.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Lowongan = createComponent(async ($$result, $$props, $$slots) => {
  const { data: jobs, error } = await supabase.from("jobs").select("id, title, location, description, company_name, apply_url, is_active, created_at").eq("is_active", true).order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "CDC STT-NF | Lowongan", "data-astro-cid-5scgzy6p": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-5scgzy6p> <div class="container" data-astro-cid-5scgzy6p> <span class="badge" data-astro-cid-5scgzy6p>Lowongan & Magang</span> <h1 data-astro-cid-5scgzy6p>Temukan peluang karier terbaik untuk mahasiswa dan alumni</h1> <p data-astro-cid-5scgzy6p>Cari lowongan berdasarkan posisi, perusahaan, atau lokasi.</p> </div> </section> <section class="section" data-astro-cid-5scgzy6p> <div class="container" data-astro-cid-5scgzy6p> <div class="toolbar" data-astro-cid-5scgzy6p> <input type="text" id="searchInput" placeholder="Cari judul, perusahaan, atau lokasi..." data-astro-cid-5scgzy6p> </div> ${error ? renderTemplate`<div class="empty-state" data-astro-cid-5scgzy6p> <p data-astro-cid-5scgzy6p>Gagal memuat lowongan. Silakan coba lagi nanti.</p> </div>` : jobs && jobs.length > 0 ? renderTemplate`<div id="jobGrid" class="job-grid" data-astro-cid-5scgzy6p> ${jobs.map((job) => renderTemplate`<article class="job-card"${addAttribute(`${job.title ?? ""} ${job.company_name ?? ""} ${job.location ?? ""}`.toLowerCase(), "data-search")} data-astro-cid-5scgzy6p> <div class="job-head" data-astro-cid-5scgzy6p> <div data-astro-cid-5scgzy6p> <h3 data-astro-cid-5scgzy6p>${job.title}</h3> <p class="company" data-astro-cid-5scgzy6p>${job.company_name || "Perusahaan belum diisi"}</p> </div> <span class="status" data-astro-cid-5scgzy6p>Aktif</span> </div> <p class="location" data-astro-cid-5scgzy6p>${job.location}</p> <p class="description" data-astro-cid-5scgzy6p>${job.description || "Belum ada deskripsi."}</p> <div class="actions" data-astro-cid-5scgzy6p> <a${addAttribute(`/lowongan/${job.id}`, "href")} class="btn btn-outline" data-astro-cid-5scgzy6p>Detail</a> ${job.apply_url ? renderTemplate`<a${addAttribute(job.apply_url, "href")} class="btn btn-primary" target="_blank" rel="noreferrer" data-astro-cid-5scgzy6p>
Apply
</a>` : renderTemplate`<button class="btn btn-primary" disabled data-astro-cid-5scgzy6p>Tidak ada link</button>`} </div> </article>`)} </div>` : renderTemplate`<div class="empty-state" data-astro-cid-5scgzy6p> <p data-astro-cid-5scgzy6p>Belum ada lowongan tersedia.</p> </div>`} </div> </section>  ${renderScript($$result2, "C:/astro-project/src/pages/lowongan.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/astro-project/src/pages/lowongan.astro", void 0);

const $$file = "C:/astro-project/src/pages/lowongan.astro";
const $$url = "/lowongan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Lowongan,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
