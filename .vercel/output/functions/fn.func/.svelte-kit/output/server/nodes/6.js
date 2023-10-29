import * as universal from '../entries/pages/new/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/new/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/new/+page.ts";
export const imports = ["_app/immutable/nodes/6.003e648c.js","_app/immutable/chunks/supabase.34e1cd19.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c2dc8c0f.js","_app/immutable/chunks/index.5b389fc0.js","_app/immutable/chunks/navigation.4e41c18f.js","_app/immutable/chunks/singletons.7d3b1378.js"];
export const stylesheets = ["_app/immutable/assets/navigation.25b55388.css"];
export const fonts = [];
