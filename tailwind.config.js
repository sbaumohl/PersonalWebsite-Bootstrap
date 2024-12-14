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
				serif: ["'Source Serif 4 Variable'", ...defaultTheme.fontFamily.serif],
				sans: ["Manrope Variable", ...defaultTheme.fontFamily.sans],
				mono: ["Roboto Mono Variable", ...defaultTheme.fontFamily.sans],
			},
			typography: () => ({
				DEFAULT: {
				  css: {color: 'fcf3d5'}
				}
			}),
			colors: {
				'text': {
					50: '#e6f2fe',
					100: '#cde5fe',
					200: '#9cccfc',
					300: '#6ab2fb',
					400: '#3899fa',
					500: '#067ff9',
					600: '#0566c7',
					700: '#044c95',
					800: '#033363',
					900: '#011932',
					950: '#010d19',
					DEFAULT: '#d4e9fe'
				},
				'background': {
					50: '#e5f4ff',
					100: '#cce9ff',
					200: '#99d3ff',
					300: '#66bdff',
					400: '#33a7ff',
					500: '#0091ff',
					600: '#0074cc',
					700: '#005799',
					800: '#003a66',
					900: '#001d33',
					950: '#000e1a',
					DEFAULT: "#000e19",
				},
				'primary': {
					50: '#e5f2ff',
					100: '#cce5ff',
					200: '#99ccff',
					300: '#66b2ff',
					400: '#3399ff',
					500: '#007fff',
					600: '#0066cc',
					700: '#004c99',
					800: '#003366',
					900: '#001933',
					950: '#000d1a',
					DEFAULT: '#004082'
				},
				'secondary': {
					50: '#ffe6f4',
					100: '#fecde9',
					200: '#fe9ad3',
					300: '#fd68bc',
					400: '#fd35a6',
					500: '#fc0390',
					600: '#ca0273',
					700: '#970256',
					800: '#65013a',
					900: '#32011d',
					950: '#19000e',
					DEFAULT: '#a4025d'
				},
				'accent': {
					50: '#f6fbea',
					100: '#edf7d4',
					200: '#dbeeaa',
					300: '#c9e67f',
					400: '#b7dd55',
					500: '#a5d52a',
					600: '#84aa22',
					700: '#638019',
					800: '#425511',
					900: '#212b08',
					950: '#101504',
					DEFAULT: '#a2d129'
				},
			},
		}

	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("daisyui"),
	],
	daisyui: {
		themes: false
		// ["night"],
	},
};
