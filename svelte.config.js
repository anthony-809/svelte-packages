import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
        alias:{
            $db:"src/db.server.ts",
            $packages:"src/packages/",
            $data:"src/data.ts",
        },
		adapter: adapter()
	}
};

export default config;
