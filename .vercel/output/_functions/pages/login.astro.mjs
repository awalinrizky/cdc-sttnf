import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_s_qG7lfK.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BjG47qh-.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "CDC STT-NF | Login Admin", "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="login-section" data-astro-cid-sgpqyurt> <div class="login-card" data-astro-cid-sgpqyurt> <h1 data-astro-cid-sgpqyurt>Login Admin</h1> <p data-astro-cid-sgpqyurt>Masuk sebagai admin atau superadmin untuk mengelola lowongan.</p> <form id="loginForm" class="login-form" data-astro-cid-sgpqyurt> <div class="form-group" data-astro-cid-sgpqyurt> <label for="email" data-astro-cid-sgpqyurt>Email</label> <input type="email" id="email" placeholder="admin@email.com" required data-astro-cid-sgpqyurt> </div> <div class="form-group" data-astro-cid-sgpqyurt> <label for="password" data-astro-cid-sgpqyurt>Password</label> <input type="password" id="password" placeholder="••••••••" required data-astro-cid-sgpqyurt> </div> <button type="submit" id="loginBtn" class="btn btn-primary full" data-astro-cid-sgpqyurt>
Login
</button> <p id="message" class="message" data-astro-cid-sgpqyurt></p> </form> </div> </section>  ${renderScript($$result2, "C:/astro-project/src/pages/login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/astro-project/src/pages/login.astro", void 0);

const $$file = "C:/astro-project/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
