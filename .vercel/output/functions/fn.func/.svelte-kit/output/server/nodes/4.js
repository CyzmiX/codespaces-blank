

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/success/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.eca2210f.js","_app/immutable/chunks/scheduler.c2dc8c0f.js","_app/immutable/chunks/index.5b389fc0.js"];
export const stylesheets = ["_app/immutable/assets/4.d12fb149.css"];
export const fonts = [];
