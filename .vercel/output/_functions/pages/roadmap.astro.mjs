import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BjG47qh-.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://cdc-sttnf.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Roadmap Karier | CDC STT-NF", "data-astro-cid-pbzxnohy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-pbzxnohy> <div class="container" data-astro-cid-pbzxnohy> <h1 data-astro-cid-pbzxnohy>Roadmap Karier</h1> <p class="intro" data-astro-cid-pbzxnohy>
Halaman ini berisi panduan jalur karier untuk mahasiswa dan alumni,
        seperti Frontend Developer, Backend Developer, UI/UX Designer, dan Data Analyst.
</p> <div class="roadmap-grid" data-astro-cid-pbzxnohy> <div class="card" data-astro-cid-pbzxnohy> <h3 data-astro-cid-pbzxnohy>Frontend Developer</h3> <p data-astro-cid-pbzxnohy>HTML, CSS, JavaScript, React, Astro, Git.</p> </div> <div class="card" data-astro-cid-pbzxnohy> <h3 data-astro-cid-pbzxnohy>Backend Developer</h3> <p data-astro-cid-pbzxnohy>Node.js, API, Database, Auth, Deployment.</p> </div> <div class="card" data-astro-cid-pbzxnohy> <h3 data-astro-cid-pbzxnohy>UI/UX Designer</h3> <p data-astro-cid-pbzxnohy>Design thinking, wireframe, prototype, Figma, usability testing.</p> </div> <div class="card" data-astro-cid-pbzxnohy> <h3 data-astro-cid-pbzxnohy>Data Analyst</h3> <p data-astro-cid-pbzxnohy>Spreadsheet, SQL, Python, dashboard, data storytelling.</p> </div> </div> </div> </section>  ` })}`;
}, "C:/astro-project/src/pages/roadmap/index.astro", void 0);

const $$file = "C:/astro-project/src/pages/roadmap/index.astro";
const $$url = "/roadmap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
