import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DXWkjwBO.mjs';
import { manifest } from './manifest_HH3XKt-Y.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/403.astro.mjs');
const _page2 = () => import('./pages/admin/event.astro.mjs');
const _page3 = () => import('./pages/admin/job.astro.mjs');
const _page4 = () => import('./pages/admin.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/login.astro.mjs');
const _page7 = () => import('./pages/lowongan/_id_.astro.mjs');
const _page8 = () => import('./pages/lowongan.astro.mjs');
const _page9 = () => import('./pages/lowongan.astro2.mjs');
const _page10 = () => import('./pages/roadmap.astro.mjs');
const _page11 = () => import('./pages/workshop.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/403.astro", _page1],
    ["src/pages/admin/event.astro", _page2],
    ["src/pages/admin/job.astro", _page3],
    ["src/pages/admin/index.astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/login.astro", _page6],
    ["src/pages/lowongan/[id].astro", _page7],
    ["src/pages/lowongan/index.astro", _page8],
    ["src/pages/lowongan.astro", _page9],
    ["src/pages/roadmap/index.astro", _page10],
    ["src/pages/workshop/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3f02857b-252a-4007-b8ba-7b8e79fd810e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
