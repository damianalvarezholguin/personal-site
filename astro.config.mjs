// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [mdx()],
	
	env: {
		schema: {
			PUBLIC_SITE_URL: envField.string({context: 'client', access: 'public', optional: true})
		}
	}
});
