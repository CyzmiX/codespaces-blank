import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.221cbc2a.js","_app/immutable/chunks/supabase.34e1cd19.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.8fab78f6.js","_app/immutable/chunks/index.201c3662.js","_app/immutable/chunks/index.dc0004ed.js","_app/immutable/chunks/singletons.9ee317b9.js"];
export const stylesheets = ["_app/immutable/assets/2.67aafc63.css"];
export const fonts = [];
