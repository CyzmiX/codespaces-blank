

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.066c3f1a.js","_app/immutable/chunks/scheduler.8fab78f6.js","_app/immutable/chunks/index.201c3662.js","_app/immutable/chunks/singletons.9ee317b9.js"];
export const stylesheets = [];
export const fonts = [];
