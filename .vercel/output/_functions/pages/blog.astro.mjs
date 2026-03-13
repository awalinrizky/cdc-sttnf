import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DIyg3etq.mjs';
import { s as supabase } from '../chunks/supabase_Bqk9tzv3.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: posts } = await supabase.from("posts").select("*").eq("published", true);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1>Artikel Karier</h1> ${posts?.map((post) => renderTemplate`<div> <h3>${post.title}</h3> <a${addAttribute(`/blog/${post.slug}`, "href")}>Baca</a> </div>`)} </div> </section> ` })}`;
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
