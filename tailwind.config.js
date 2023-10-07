/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
		"./node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Manrope Variable",
					...defaultTheme.fontFamily.sans
				],
				mono: [
					'Roboto Mono Variable',
					...defaultTheme.fontFamily.sans
				]
			},
			colors: {
				text: "#f9f9f9",
				background: "#090909",
			},
			backgroundImage: {
				"zona": "url('arizona.jpeg')"
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
	],
	darkMode: "class",
};
