import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_I3uNHX5j.mjs';
import { manifest } from './manifest_BbzYBPXl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.3_@types+node@24.3.0_@vercel+functions@2.2.13_jiti@2.5.1_lightningcss@1.30.1_rollup@4.48.1_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "54330952-ab42-4af5-841c-973e3eb7d325",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
