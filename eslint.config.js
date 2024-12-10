import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.svelte", "*.svelte"],
		languageOptions: {
		  parser: svelteParser,
		  parserOptions: {
			svelteFeatures: {
			  // This option is for Svelte 5. The default value is `true`.
			  // If `false`, ESLint will not recognize rune symbols.
			  // If not configured this option, The parser will try to read the option from `compilerOptions.runes` from `svelte.config.js`.
			  // If `parserOptions.svelteConfig` is not specified and the file cannot be parsed by static analysis, it will behave as `true`.
			  runes: true,
			},
		  },
		},
	},
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
];
