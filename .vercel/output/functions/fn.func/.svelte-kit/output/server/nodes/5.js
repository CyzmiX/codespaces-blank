

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/myblogs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.16659514.js","_app/immutable/chunks/scheduler.c2dc8c0f.js","_app/immutable/chunks/index.5b389fc0.js"];
export const stylesheets = [];
export const fonts = [];
