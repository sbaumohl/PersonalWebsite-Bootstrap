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
					50: '#fdf8e7',
					100: '#fcf1cf',
					200: '#f8e4a0',
					300: '#f5d670',
					400: '#f2c840',
					500: '#eebb11',
					600: '#bf950d',
					700: '#8f700a',
					800: '#5f4b07',
					900: '#302503',
					950: '#181302',
					DEFAULT: '#fcf3d5'
				},
				'background': {
					50: '#fef6e7',
					100: '#fceecf',
					200: '#f9dd9f',
					300: '#f7cb6e',
					400: '#f4ba3e',
					500: '#f1a90e',
					600: '#c1870b',
					700: '#916508',
					800: '#604406',
					900: '#302203',
					950: '#181101',
					DEFAULT: "#211702",
				},
				'primary': {
					50: '#fdf8e7',
					100: '#fcf1cf',
					200: '#f9e29f',
					300: '#f6d46f',
					400: '#f3c63f',
					500: '#f0b80f',
					600: '#c0930c',
					700: '#906e09',
					800: '#604906',
					900: '#302503',
					950: '#181202',
					DEFAULT: '#f7d87c'
				},
				'secondary': {
					50: '#e7fdf7',
					100: '#cffcee',
					200: '#9ff9de',
					300: '#6ff6cd',
					400: '#3ff3bd',
					500: '#0ff0ac',
					600: '#0cc08a',
					700: '#099067',
					800: '#066045',
					900: '#033022',
					950: '#021811',
					DEFAULT: '#09926a'
				},
				'accent': {
					50: '#e7f3fd',
					100: '#cfe6fc',
					200: '#9fcdf9',
					300: '#6fb5f6',
					400: '#3f9cf3',
					500: '#0f83f0',
					600: '#0c69c0',
					700: '#094f90',
					800: '#063460',
					900: '#031a30',
					950: '#020d18',
					DEFAULT: '#1587f0'
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
