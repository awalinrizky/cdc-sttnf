import { e as createAstro, f as createComponent, n as renderHead, o as renderSlot, r as renderTemplate } from './astro/server_s_qG7lfK.mjs';
import 'piccolore';
import 'clsx';
/* empty css                       */

const $$Astro = createAstro("https://cdc-sttnf.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "CDC STT-NF" } = Astro2.props;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`<html lang="id" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description" content="Career Development Center STT-NF"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-37fxchfa> <nav data-astro-cid-37fxchfa> <div class="container nav-wrap" data-astro-cid-37fxchfa> <a href="/" class="logo" data-astro-cid-37fxchfa>CDC STT-NF</a> <div class="nav-links" data-astro-cid-37fxchfa> <a href="/" data-astro-cid-37fxchfa>Beranda</a> <a href="/lowongan" data-astro-cid-37fxchfa>Lowongan</a> <a href="/workshop" data-astro-cid-37fxchfa>Workshop</a> <a href="/roadmap" data-astro-cid-37fxchfa>Roadmap</a> <a href="/blog" data-astro-cid-37fxchfa>Blog</a> <a href="/login" data-astro-cid-37fxchfa>Admin</a> </div> </div> </nav> <main data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> <footer data-astro-cid-37fxchfa> <div class="container" data-astro-cid-37fxchfa>
Career Development Center (CDC) <br data-astro-cid-37fxchfa>
Sekolah Tinggi Teknologi Terpadu Nurul Fikri <br data-astro-cid-37fxchfa>
© ${year} All rights reserved
</div> </footer> </body></html>`;
}, "C:/astro-project/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
