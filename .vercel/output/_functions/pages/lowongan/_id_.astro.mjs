import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BjG47qh-.mjs';
import { s as supabase } from '../../chunks/supabase_BFq8iUpn.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://cdc-sttnf.vercel.app");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: job, error } = await supabase.from("jobs").select("*").eq("id", id).eq("is_active", true).maybeSingle();
  if (error || !job) {
    return Astro2.redirect("/lowongan");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `CDC STT-NF | ${job.title}`, "data-astro-cid-26liy5p4": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="detail-hero" data-astro-cid-26liy5p4> <div class="container" data-astro-cid-26liy5p4> <a href="/lowongan" class="back-link" data-astro-cid-26liy5p4>← Kembali ke Lowongan</a> <h1 data-astro-cid-26liy5p4>${job.title}</h1> <p class="company" data-astro-cid-26liy5p4>${job.company_name || "Perusahaan belum diisi"}</p> <p class="location" data-astro-cid-26liy5p4>${job.location}</p> </div> </section> <section class="section" data-astro-cid-26liy5p4> <div class="container detail-layout" data-astro-cid-26liy5p4> <article class="content-card" data-astro-cid-26liy5p4> <h2 data-astro-cid-26liy5p4>Deskripsi Lowongan</h2> <div class="description" data-astro-cid-26liy5p4> ${job.description || "Belum ada deskripsi lowongan."} </div> </article> <aside class="sidebar-card" data-astro-cid-26liy5p4> <h3 data-astro-cid-26liy5p4>Ringkasan</h3> <div class="info-row" data-astro-cid-26liy5p4> <span data-astro-cid-26liy5p4>Perusahaan</span> <strong data-astro-cid-26liy5p4>${job.company_name || "-"}</strong> </div> <div class="info-row" data-astro-cid-26liy5p4> <span data-astro-cid-26liy5p4>Lokasi</span> <strong data-astro-cid-26liy5p4>${job.location || "-"}</strong> </div> ${job.apply_url ? renderTemplate`<a${addAttribute(job.apply_url, "href")} class="btn btn-primary full" target="_blank" rel="noreferrer" data-astro-cid-26liy5p4>
Apply Sekarang
</a>` : renderTemplate`<button class="btn btn-primary full" disabled data-astro-cid-26liy5p4>Link Apply Belum Tersedia</button>`} </aside> </div> </section>  ` })}`;
}, "C:/astro-project/src/pages/lowongan/[id].astro", void 0);

const $$file = "C:/astro-project/src/pages/lowongan/[id].astro";
const $$url = "/lowongan/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
