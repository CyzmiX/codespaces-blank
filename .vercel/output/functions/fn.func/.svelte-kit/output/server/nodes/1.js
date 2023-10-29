

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7dd6be08.js","_app/immutable/chunks/scheduler.c2dc8c0f.js","_app/immutable/chunks/index.5b389fc0.js","_app/immutable/chunks/singletons.7d3b1378.js"];
export const stylesheets = [];
export const fonts = [];
