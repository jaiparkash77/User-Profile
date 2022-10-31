import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			// We can use a path relative to the root because
			// svelte-preprocess automatically adds it to `includePaths`
			// if none is defined.
			prependData: `@import 'src/styles/_variables.scss';@import 'src/styles/_typography.scss';@import 'src/styles/_shadows.scss';@import 'src/styles/_animations.scss';@import 'src/styles/_dark.scss';@import 'src/styles/_helpers.scss';@import 'src/styles/_brands.scss';`
		},
			
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
