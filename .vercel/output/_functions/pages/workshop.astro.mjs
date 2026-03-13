import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DIyg3etq.mjs';
import { s as supabase } from '../chunks/supabase_Bqk9tzv3.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: events } = await supabase.from("events").select("*").eq("is_active", true);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Workshop" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1>Workshop & Seminar</h1> ${events?.map((event) => renderTemplate`<div class="event"> <h3>${event.title}</h3> <p>${event.description}</p> <a${addAttribute(event.register_url, "href")} class="btn btn-primary">
Daftar
</a> </div>`)} </div> </section> ` })}`;
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
