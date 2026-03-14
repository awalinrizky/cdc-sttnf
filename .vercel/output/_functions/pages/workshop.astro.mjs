import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BjG47qh-.mjs';
import { s as supabase } from '../chunks/supabase_BFq8iUpn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: events, error } = await supabase.from("events").select("*").eq("is_active", true).order("date", { ascending: true });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Workshop | CDC STT-NF", "data-astro-cid-jyvtyboz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-jyvtyboz> <div class="container" data-astro-cid-jyvtyboz> <h1 data-astro-cid-jyvtyboz>Workshop & Seminar</h1> ${error ? renderTemplate`<p data-astro-cid-jyvtyboz>Gagal memuat event: ${error.message}</p>` : events?.length ? renderTemplate`<div class="event-grid" data-astro-cid-jyvtyboz> ${events.map((event) => renderTemplate`<article class="card" data-astro-cid-jyvtyboz> <h3 data-astro-cid-jyvtyboz>${event.title}</h3> <p class="meta" data-astro-cid-jyvtyboz>${event.location || "-"} • ${event.date ? new Date(event.date).toLocaleDateString("id-ID") : "-"}</p> <p data-astro-cid-jyvtyboz>${event.description || "Belum ada deskripsi."}</p> ${event.register_url ? renderTemplate`<a${addAttribute(event.register_url, "href")} class="btn btn-primary" target="_blank" rel="noreferrer" data-astro-cid-jyvtyboz>
Daftar
</a>` : renderTemplate`<button class="btn btn-outline" disabled data-astro-cid-jyvtyboz>Belum tersedia</button>`} </article>`)} </div>` : renderTemplate`<p data-astro-cid-jyvtyboz>Belum ada workshop atau seminar.</p>`} </div> </section>  ` })}`;
}, "C:/astro-project/src/pages/workshop/index.astro", void 0);

const $$file = "C:/astro-project/src/pages/workshop/index.astro";
const $$url = "/workshop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
