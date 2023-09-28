/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
		"./node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['"Raleway Variable"', "sans-serif"],
			},
			spacing: {
				132: "35.25rem",
			},
			gradientColorStops: (theme) => ({
				primary: "#FF8C00",
				secondary: "#FFA500",
				danger: "#FFD700",
			}),
		},
		colors: {
			text: "#fae6e6",
			background: "#080202",
			primary: "#26bab5",
			secondary: "#06131e",
			accent: "#c5050c",
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
	],
	darkMode: "class",
};
