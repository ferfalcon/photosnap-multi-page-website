import type {
	BillingPeriod,
	PageHero,
	PricingComparisonRow,
	PricingPlan,
} from './types';

export const pricingHero = {
	heading: 'PRICING',
	// Preserve the source wording until the documented copy review is resolved.
	body:
		'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
	image: {
		alt: 'Photographer filming with a camera on a tripod at sunset.',
		mobile: {
			src: '/assets/images/pricing/hero-mobile.jpg',
			width: 375,
			height: 294,
		},
		tablet: {
			src: '/assets/images/pricing/hero-tablet.jpg',
			width: 273,
			height: 490,
		},
		desktop: {
			src: '/assets/images/pricing/hero-desktop.jpg',
			width: 830,
			height: 490,
		},
	},
} as const satisfies PageHero;

export const billingPeriods = [
	{ value: 'monthly', label: 'Monthly' },
	{ value: 'yearly', label: 'Yearly' },
] as const satisfies readonly {
	value: BillingPeriod;
	label: string;
}[];

export const defaultBillingPeriod = 'monthly' as const satisfies BillingPeriod;

// PICK PLAN remains display copy only until its destination or action is approved.
export const pricingPlans = [
	{
		name: 'Basic',
		description:
			'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
		monthlyPrice: '$19.00',
		yearlyPrice: '$190.00',
		monthlyPeriodLabel: 'per month',
		yearlyPeriodLabel: 'per year',
		ctaLabel: 'PICK PLAN',
		isFeatured: false,
	},
	{
		name: 'Pro',
		description:
			'More advanced features available. Recommended for photography veterans and professionals.',
		monthlyPrice: '$39.00',
		yearlyPrice: '$390.00',
		monthlyPeriodLabel: 'per month',
		yearlyPeriodLabel: 'per year',
		ctaLabel: 'PICK PLAN',
		isFeatured: true,
	},
	{
		name: 'Business',
		description:
			'Additional features available such as more detailed metrics. Recommended for business owners.',
		monthlyPrice: '$99.00',
		yearlyPrice: '$990.00',
		monthlyPeriodLabel: 'per month',
		yearlyPeriodLabel: 'per year',
		ctaLabel: 'PICK PLAN',
		isFeatured: false,
	},
] as const satisfies readonly PricingPlan[];

export const pricingComparisonRows = [
	{
		feature: 'Unlimited Story Posting',
		basic: true,
		pro: true,
		business: true,
	},
	{
		feature: 'Unlimited Photo Upload',
		basic: true,
		pro: true,
		business: true,
	},
	{
		feature: 'Embedding Custom Content',
		basic: false,
		pro: true,
		business: true,
	},
	{
		feature: 'Customize Metadata',
		basic: false,
		pro: true,
		business: true,
	},
	{
		feature: 'Advanced Metrics',
		basic: false,
		pro: false,
		business: true,
	},
	{
		feature: 'Photo Downloads',
		basic: false,
		pro: false,
		business: true,
	},
	{
		feature: 'Search Engine Indexing',
		basic: false,
		pro: false,
		business: true,
	},
	{
		feature: 'Custom Analytics',
		basic: false,
		pro: false,
		business: true,
	},
] as const satisfies readonly PricingComparisonRow[];
