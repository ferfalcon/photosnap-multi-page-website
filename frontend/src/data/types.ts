export interface NavItem {
	label: string;
	href: string;
}

export interface LinkItem {
	label: string;
	href: string;
}

export interface ImageCandidate {
	src: string;
	width: number;
	height: number;
}

export interface ResponsiveImage {
	alt: string;
	mobile: ImageCandidate;
	tablet?: ImageCandidate;
	desktop: ImageCandidate;
}

export interface ArtDirectedImage extends ResponsiveImage {
	tablet: ImageCandidate;
}

export interface PageHero {
	heading: string;
	body: string;
	image: ArtDirectedImage;
}

export interface Story {
	title: string;
	author: string;
	date: string;
	image: ResponsiveImage;
	href?: string;
}

export interface FeaturedStory extends Story {
	label: string;
	body: string;
	ctaLabel: string;
	image: ArtDirectedImage;
}

export interface Feature {
	title: string;
	description: string;
	icon: ImageCandidate;
}

export type BillingPeriod = 'monthly' | 'yearly';

export interface PricingPlan {
	name: 'Basic' | 'Pro' | 'Business';
	description: string;
	monthlyPrice: string;
	yearlyPrice: string;
	monthlyPeriodLabel: string;
	yearlyPeriodLabel: string;
	ctaLabel: string;
	isFeatured: boolean;
}

export interface PricingComparisonRow {
	feature: string;
	basic: boolean;
	pro: boolean;
	business: boolean;
}

export interface SocialPlatform {
	label: string;
	icon: string;
	width: number;
	height: number;
}
