import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DIyg3etq.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="container hero-wrap" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>
Bangun Karier IT <br data-astro-cid-bbe6dxrz>
Bersama CDC STT‑NF
</h1> <p class="hero-text" data-astro-cid-bbe6dxrz>
Temukan lowongan kerja, ikuti workshop industri,
      dan bangun karier teknologi bersama
      Career Development Center STT‑NF.
</p> <div class="hero-actions" data-astro-cid-bbe6dxrz> <a href="/lowongan" class="btn btn-primary" data-astro-cid-bbe6dxrz>
Lihat Lowongan
</a> <a href="/workshop" class="btn btn-outline" data-astro-cid-bbe6dxrz>
Ikuti Workshop
</a> </div> </div> </section> `;
}, "C:/astro-project/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "CDC STT-NF | Beranda", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<section class="section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>Tentang CDC STT-NF</h2> <p class="section-text" data-astro-cid-j7pv25f6>
CDC STT-NF merupakan unit yang mempersiapkan, melatih, dan menjadi wadah
        mahasiswa serta alumni dalam pengembangan karier, magang, dan koneksi ke
        dunia profesional.
</p> </div> </section> <section class="section soft" data-astro-cid-j7pv25f6> <div class="container feature-grid" data-astro-cid-j7pv25f6> <div class="feature-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Lowongan Terkurasi</h3> <p data-astro-cid-j7pv25f6>Temukan peluang kerja dan magang yang lebih relevan untuk mahasiswa dan alumni.</p> </div> <div class="feature-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Career Growth</h3> <p data-astro-cid-j7pv25f6>Dukung perjalanan karier melalui akses informasi, training, dan peluang aktual.</p> </div> <div class="feature-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Siap Terhubung</h3> <p data-astro-cid-j7pv25f6>Bangun jembatan antara kampus, alumni, dan dunia kerja profesional.</p> </div> </div> </section>  ` })}`;
}, "C:/astro-project/src/pages/index.astro", void 0);

const $$file = "C:/astro-project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
