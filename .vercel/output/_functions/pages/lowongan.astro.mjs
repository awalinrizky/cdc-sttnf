import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DIyg3etq.mjs';
import 'clsx';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_Bqk9tzv3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://cdc-sttnf.vercel.app");
const $$JobCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$JobCard;
  const { job } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="job-card" data-astro-cid-thris56x> <h3 data-astro-cid-thris56x>${job.title}</h3> <p class="company" data-astro-cid-thris56x> ${job.company_name || "Perusahaan"} </p> <p class="location" data-astro-cid-thris56x> ${job.location} </p> <a${addAttribute(`/lowongan/${job.id}`, "href")} class="btn btn-outline" data-astro-cid-thris56x>
Lihat Detail
</a> </div> `;
}, "C:/astro-project/src/components/JobCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: jobs } = await supabase.from("jobs").select("*").eq("is_active", true).order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Lowongan Kerja" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1>Lowongan Kerja</h1> <div class="job-grid"> ${jobs?.map((job) => renderTemplate`${renderComponent($$result2, "JobCard", $$JobCard, { "job": job })}`)} </div> </div> </section> ` })}`;
}, "C:/astro-project/src/pages/lowongan/index.astro", void 0);

const $$file = "C:/astro-project/src/pages/lowongan/index.astro";
const $$url = "/lowongan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
