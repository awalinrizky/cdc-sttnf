import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CTuTJhWc.mjs';
import { s as supabase } from '../chunks/supabase_BFq8iUpn.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: posts, error } = await supabase.from("posts").select("*").eq("published", true).order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog | CDC STT-NF", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>Artikel Karier</h1> ${error ? renderTemplate`<p data-astro-cid-5tznm7mj>Gagal memuat artikel: ${error.message}</p>` : posts?.length ? renderTemplate`<div class="post-grid" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<article class="card" data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>${post.title}</h3> <p data-astro-cid-5tznm7mj>${post.content?.slice(0, 140) || "Belum ada ringkasan artikel."}</p> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-5tznm7mj>Baca selengkapnya →</a> </article>`)} </div>` : renderTemplate`<p data-astro-cid-5tznm7mj>Belum ada artikel tersedia.</p>`} </div> </section>  ` })}`;
}, "C:/astro-project/src/pages/blog/index.astro", void 0);

const $$file = "C:/astro-project/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
