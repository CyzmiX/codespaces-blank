import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  onwarn: (warning, handler) => {
    if (warning.code === 'a11y-click-events-have-key-events') return
    handler(warning)
  },
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x',
    }),
  },
  preprocess: vitePreprocess()
};
export default config;