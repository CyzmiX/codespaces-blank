

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.94de7d86.js","_app/immutable/chunks/scheduler.8fab78f6.js","_app/immutable/chunks/index.201c3662.js"];
export const stylesheets = ["_app/immutable/assets/0.9ee4a69e.css"];
export const fonts = [];
