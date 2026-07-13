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

export interface SocialPlatform {
	label: string;
	icon: string;
	width: number;
	height: number;
}
