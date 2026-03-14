import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BjG47qh-.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$403 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "403 | Akses Ditolak", "data-astro-cid-ot6ov27s": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="forbidden" data-astro-cid-ot6ov27s> <div class="box" data-astro-cid-ot6ov27s> <h1 data-astro-cid-ot6ov27s>403</h1> <h2 data-astro-cid-ot6ov27s>Akses Ditolak</h2> <p data-astro-cid-ot6ov27s>Anda tidak memiliki izin untuk membuka halaman ini.</p> <a href="/" class="btn btn-primary" data-astro-cid-ot6ov27s>Kembali ke Beranda</a> </div> </section>  ` })}`;
}, "C:/astro-project/src/pages/403.astro", void 0);

const $$file = "C:/astro-project/src/pages/403.astro";
const $$url = "/403";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$403,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
