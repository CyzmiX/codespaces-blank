import * as universal from '../entries/pages/blogs/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blogs/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.e78f06e6.js","_app/immutable/chunks/supabase.34e1cd19.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.8fab78f6.js","_app/immutable/chunks/index.201c3662.js"];
export const stylesheets = [];
export const fonts = [];
