import type { Feature, PageHero } from './types';

export const featuresHero = {
	heading: 'FEATURES',
	// Preserve the source wording until the documented copy review is resolved.
	body:
		'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
	image: {
		alt: 'Photographer holding a camera at their side.',
		mobile: {
			src: '/assets/images/features/hero-mobile.jpg',
			width: 375,
			height: 294,
		},
		tablet: {
			src: '/assets/images/features/hero-tablet.jpg',
			width: 273,
			height: 490,
		},
		desktop: {
			src: '/assets/images/features/hero-desktop.jpg',
			width: 830,
			height: 490,
		},
	},
} as const satisfies PageHero;

export const features = [
	{
		title: '100% Responsive',
		description:
			'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
		icon: {
			src: '/assets/icons/features/responsive.svg',
			width: 72,
			height: 72,
		},
	},
	{
		title: 'No Photo Upload Limit',
		description:
			'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
		icon: {
			src: '/assets/icons/features/no-photo-upload-limit.svg',
			width: 72,
			height: 36,
		},
	},
	{
		title: 'Available to Embed',
		description:
			'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
		icon: {
			src: '/assets/icons/features/available-to-embed.svg',
			width: 71,
			height: 72,
		},
	},
	{
		title: 'Custom Domain',
		description:
			'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
		icon: {
			src: '/assets/icons/features/custom-domain.svg',
			width: 81,
			height: 72,
		},
	},
	{
		title: 'Boost Your Exposure',
		// Preserve the source wording until the documented copy review is resolved.
		description:
			'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
		icon: {
			src: '/assets/icons/features/boost-your-exposure.svg',
			width: 72,
			height: 72,
		},
	},
	{
		title: 'Drag & Drop Image',
		// Preserve the source wording until the documented copy review is resolved.
		description:
			'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
		icon: {
			src: '/assets/icons/features/drag-and-drop-image.svg',
			width: 91,
			height: 72,
		},
	},
] as const satisfies readonly Feature[];

export const homeFeaturePreviews: readonly Feature[] = features.slice(0, 3);
