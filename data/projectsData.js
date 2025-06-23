import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'Chefio',
		url: 'chefio',
		category: 'Full-Stack Web App',
		img: '/images/chefio.png',
		ProjectHeader: {
			title: 'Chefio',
			publishDate: '2024',
			tags: 'Next.js / TypeScript / Full-Stack',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Chefio',
				img: '/images/chefio.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/mahmoud-el-tohamy/chefio',
				},
			],
			ObjectivesHeading: 'Description',
			ObjectivesDetails: 'A full-stack recipe sharing platform built with Next.js and TypeScript. Features include user profiles, image uploads, recipe filtering, and a clean, responsive UI.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Next.js', 'TypeScript', 'React', 'Node.js', 'MongoDB'],
				},
			],
			ProjectDetailsHeading: 'Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: 'Chefio allows users to create, share, and discover recipes. Includes authentication, user profiles, and advanced filtering.'
				},
			],
		},
	},
	{
		id: 2,
		title: 'Leon Template',
		url: 'leon-template',
		category: 'Portfolio Website',
		img: '/images/leon.png',
		ProjectHeader: {
			title: 'Leon Template',
			publishDate: '2023',
			tags: 'HTML / CSS / Responsive',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Leon Template',
				img: '/images/leon.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Live Site',
					details: 'https://mahmoud-el-tohamy.github.io/Only-HTML-CSS-Template/',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/mahmoud-el-tohamy/Only-HTML-CSS-Template',
				},
			],
			ObjectivesHeading: 'Description',
			ObjectivesDetails: 'A fully responsive portfolio site designed with semantic HTML and modern CSS layout principles.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['HTML', 'CSS', 'Responsive Design'],
				},
			],
			ProjectDetailsHeading: 'Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: 'Leon Template is a clean, modern portfolio template. Built for personal branding and easy customization.'
				},
			],
		},
	},
	{
		id: 3,
		title: 'ITI Online Store',
		url: 'iti-online-store',
		category: 'E-Commerce',
		img: '/images/ITI-Online-Store.png', // TODO: Replace with real screenshot
		ProjectHeader: {
			title: 'ITI Online Store',
			publishDate: '2021',
			tags: 'AngularJS / E-Commerce',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'ITI Online Store',
				img: '/images/ITI-Online-Store.png', // TODO: Replace with real screenshot
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/mahmoud-el-tohamy/ITI-Online-Store',
				},
			],
			ObjectivesHeading: 'Description',
			ObjectivesDetails: 'A functional e-commerce site built using AngularJS, with dynamic product filtering and user-friendly UI.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['AngularJS', 'JavaScript', 'HTML', 'CSS'],
				},
			],
			ProjectDetailsHeading: 'Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: 'ITI Online Store features product listings, filtering, and a responsive, user-friendly interface.'
				},
			],
		},
	},
];
