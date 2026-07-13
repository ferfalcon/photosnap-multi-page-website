import type { LinkItem, SocialPlatform } from './types';

export const inviteCta = {
	label: 'GET AN INVITE',
	href: '/pricing',
} as const satisfies LinkItem;

export const betaInvite = {
	heading: 'We’re in beta. Get your invite today!',
	headingLines: ['We’re in beta.', 'Get your invite', 'today!'],
	cta: inviteCta,
} as const satisfies {
	heading: string;
	headingLines: readonly string[];
	cta: LinkItem;
};

export const socialPlatforms = [
	{
		label: 'Facebook',
		icon: '/assets/icons/social/facebook.svg',
		width: 20,
		height: 20,
	},
	{
		label: 'YouTube',
		icon: '/assets/icons/social/youtube.svg',
		width: 21,
		height: 20,
	},
	{
		label: 'Twitter',
		icon: '/assets/icons/social/twitter.svg',
		width: 21,
		height: 18,
	},
	{
		label: 'Pinterest',
		icon: '/assets/icons/social/pinterest.svg',
		width: 20,
		height: 20,
	},
	{
		label: 'Instagram',
		icon: '/assets/icons/social/instagram.svg',
		width: 21,
		height: 20,
	},
] as const satisfies readonly SocialPlatform[];

export const copyrightText = 'Copyright 2019. All Rights Reserved';
