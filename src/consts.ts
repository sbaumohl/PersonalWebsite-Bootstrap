// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Sam Baumohl';
export const SITE_DESCRIPTION = 'Sam Baumohl\'s personal website';
export const NAME = 'Samuel Baumohl'

export const skills = new Map([
	["Frameworks", ["Angular", "React.js", "Astro", "NodeJS"]],
	["Languages", ["Java", "Python", "Javascript", "Typescript", "HTML", "CSS"]],
	["Other Tools", ["AWS", "Docker", "Git", "Linux", "PostgreSQL", "SQL"]],
]);

export const projects = [
	{
		title: "MyMICDS.net",
		description:
			"An all-in-one platform for MICDS student life built with Angular, Express, MongoDB, and NodeJS.",
		github: "https://github.com/MyMICDS/",
		link: "https://mymicds.net/",
	},
	{
		title: "BYO Style-Based GAN",
		description:
			"A blackbox implementation of NVIDIA's StyleGAN (Style-Based Generative Adversarial Neural Network) using PyTorch and Python.",
		github: "https://github.com/sbaumohl/BYO-GAN",
	},
	{
		title: "This Website™",
		description:
			"Built with Astro, Typescript, and Tailwindcss.",
		github: "https://github.com/sbaumohl/PersonalWebsite-Bootstrap"
	},
];

export const links = [
	{
		label: "Github",
		link: "https://github.com/sbaumohl",
		icon: "github",
	},
	{
		label: "Email",
		icon: "mail",
		link: "mailto:mail@sambaumohl.me",
	},
	// {
	// 	label: "Instagram",
	// 	link: "https://www.instagram.com/sam_b2327/",
	// 	icon: "instagram",
	// },
	{
		label: "LinkedIn",
		icon: "linkedin",
		link: "https://www.linkedin.com/in/sam-baumohl09/",
	},
	// {
	// 	label: "PGP",
	// 	icon: "key",
	// 	link: "",
	// },
];
