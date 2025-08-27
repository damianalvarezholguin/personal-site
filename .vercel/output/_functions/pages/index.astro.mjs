import { e as createComponent, f as createAstro, h as addAttribute, r as renderTemplate, k as renderComponent, l as renderHead } from '../chunks/astro/server_D5Qnsz-c.mjs';
export { renderers } from '../renderers.mjs';

const PUBLIC_SITE_URL = "https://localhost:4321";

const SITE_URL = PUBLIC_SITE_URL;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title = "My web",
    description = "Default description",
    image = void 0,
    url = void 0,
    noIndex = false,
    themeColor = "#0ea5a4",
    preconnect = [],
    preloadFonts = [],
    structuredData = null
  } = Astro2.props;
  const twitterCard = image ? "summary_large_image" : "summary";
  return renderTemplate`<!-- Basic --><title>${title}</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}>${noIndex ? renderTemplate`<meta name="robots" content="noindex, nofollow">` : null}${url ? renderTemplate`<link rel="canonical"${addAttribute(url, "href")}>` : null}<meta name="theme-color"${addAttribute(themeColor, "content")}><!-- Favicons / PWA (using rounded PNGs) --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon-32-rounded.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32-rounded.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16-rounded.png"><link rel="apple-touch-icon" sizes="180x180" href="/favicon-180-rounded.png"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${image ? renderTemplate`<meta property="og:image"${addAttribute(image, "content")}>` : null}${url ? renderTemplate`<meta property="og:url"${addAttribute(url, "content")}>` : null}<!-- Twitter --><meta name="twitter:card"${addAttribute(twitterCard, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}<!-- Performance hints -->${preconnect.map((href) => renderTemplate`<link rel="preconnect"${addAttribute(href, "href")} crossorigin>`)}${preloadFonts.map((f) => renderTemplate`<link rel="preload"${addAttribute(f.href, "href")} as="font"${addAttribute(f.type, "type")}${addAttribute(f.crossorigin ? "anonymous" : void 0, "crossorigin")}>`)}<!-- Structured data (JSON-LD) -->${structuredData ? renderTemplate(_a || (_a = __template(['<script type="application/ld+json">{JSON.stringify(structuredData)}<\/script>']))) : null}`;
}, "/Users/damianalvarezholguin/code/personal-projects/personal-site/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const canonical = new URL(Astro2.url.pathname, SITE_URL).toString();
  const ogImage = new URL("/images/og.jpg", SITE_URL).toString();
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Damian Alvarez", "description": "Damian Alvarez portfolio", "url": canonical, "noIndex": "true", "img": ogImage })}${renderHead()}</head> <body> <h1>Hello World</h1> </body></html>`;
}, "/Users/damianalvarezholguin/code/personal-projects/personal-site/src/pages/index.astro", void 0);

const $$file = "/Users/damianalvarezholguin/code/personal-projects/personal-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
