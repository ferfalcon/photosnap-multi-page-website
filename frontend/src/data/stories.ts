import type {
	FeaturedStory,
	ResponsiveImage,
	Story,
} from './types';

function createStoryImage(slug: string, alt: string): ResponsiveImage {
	return {
		alt,
		mobile: {
			src: `/assets/images/stories/${slug}-mobile.jpg`,
			width: 375,
			height: 375,
		},
		desktop: {
			src: `/assets/images/stories/${slug}-desktop.jpg`,
			width: 360,
			height: 500,
		},
	};
}

export const featuredStory = {
	label: 'LAST MONTH’S FEATURED STORY',
	title: 'HAZY FULL MOON OF APPALACHIA',
	author: 'John Appleseed',
	date: 'March 2nd 2020',
	body:
		'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
	ctaLabel: 'READ THE STORY',
	image: {
		alt: 'Full moon above the rugged Appalachian Mountains.',
		mobile: {
			src: '/assets/images/stories/hazy-full-moon-of-appalachia-mobile.jpg',
			width: 375,
			height: 317,
		},
		tablet: {
			src: '/assets/images/stories/hazy-full-moon-of-appalachia-tablet.jpg',
			width: 768,
			height: 650,
		},
		desktop: {
			src: '/assets/images/stories/hazy-full-moon-of-appalachia-desktop.jpg',
			width: 1440,
			height: 650,
		},
	},
} as const satisfies FeaturedStory;

// Story destinations remain intentionally absent until detail routes are approved.
export const stories = [
	{
		title: 'The Mountains',
		author: 'John Appleseed',
		date: 'April 16th 2020',
		image: createStoryImage(
			'the-mountains',
			'Snow-covered mountain rising above the clouds.',
		),
	},
	{
		title: 'Sunset Cityscapes',
		author: 'Benjamin Cruz',
		date: 'April 14th 2020',
		image: createStoryImage(
			'sunset-cityscapes',
			'City skyline beneath a pink sunset.',
		),
	},
	{
		title: '18 Days Voyage',
		author: 'Alexei Borodin',
		date: 'April 11th 2020',
		image: createStoryImage(
			'18-days-voyage',
			'Traveler walking across a ridge at sunset.',
		),
	},
	{
		title: 'Architecturals',
		author: 'Samantha Brooke',
		date: 'April 9th 2020',
		image: createStoryImage(
			'architecturals',
			'Curved modern building viewed from below.',
		),
	},
	{
		title: 'World Tour 2019',
		author: 'Timothy Wagner',
		date: 'April 7th 2020',
		image: createStoryImage(
			'world-tour-2019',
			'Mountain lake beneath dramatic clouds.',
		),
	},
	{
		title: 'Unforeseen Corners',
		author: 'William Malcolm',
		date: 'April 3rd 2020',
		image: createStoryImage(
			'unforeseen-corners',
			'Broad-canopied tree silhouetted under a vivid purple sky.',
		),
	},
	{
		title: 'King on Africa: Part II',
		author: 'Tim Hillenburg',
		date: 'March 29th 2020',
		image: createStoryImage(
			'king-on-africa-part-ii',
			'Close portrait of a lion.',
		),
	},
	{
		title: 'The Trip to Nowhere',
		author: 'Felicia Rourke',
		date: 'March 21st 2020',
		image: createStoryImage(
			'the-trip-to-nowhere',
			'Solitary tree reflected in calm water.',
		),
	},
	{
		title: 'Rage of The Sea',
		author: 'Mohammed Abdul',
		date: 'March 19th 2020',
		image: createStoryImage(
			'rage-of-the-sea',
			'Ocean waves glowing beneath a sunset.',
		),
	},
	{
		title: 'Running Free',
		author: 'Michelle',
		date: 'March 16th 2020',
		image: createStoryImage(
			'running-free',
			'Horses running through a misty landscape.',
		),
	},
	{
		title: 'Behind the Waves',
		author: 'Lamarr Wilson',
		date: 'March 11th 2020',
		image: createStoryImage(
			'behind-the-waves',
			'Large ocean wave curling in blue water.',
		),
	},
	{
		title: 'Calm Waters',
		author: 'Samantha Brooke',
		date: 'March 9th 2020',
		image: createStoryImage(
			'calm-waters',
			'Pink mountain range reflected in calm water.',
		),
	},
	{
		title: 'The Milky Way',
		author: 'Benjamin Cruz',
		date: 'March 5th 2020',
		image: createStoryImage(
			'the-milky-way',
			'Milky Way stretching across a star-filled night sky.',
		),
	},
	{
		title: 'Night at The Dark Forest',
		author: 'Mohammed Abdul',
		date: 'March 4th 2020',
		image: createStoryImage(
			'night-at-the-dark-forest',
			'Rocky mountain face under a dark sky.',
		),
	},
	{
		title: 'Somwarpet’s Beauty',
		author: 'Michelle',
		date: 'March 1st 2020',
		image: createStoryImage(
			'somwarpets-beauty',
			'Orange wildflowers in a sunlit field.',
		),
	},
	{
		title: 'Land of Dreams',
		author: 'William Malcolm',
		date: 'February 25th 2020',
		image: createStoryImage(
			'land-of-dreams',
			'Snowy mountains surrounding a church beneath a blue sky.',
		),
	},
] as const satisfies readonly Story[];

export const homeStoryPreviews: readonly Story[] = stories.slice(0, 4);
