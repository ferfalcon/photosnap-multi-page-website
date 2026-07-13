import type { NavItem } from './types';

export const primaryNavigation = [
	{ label: 'STORIES', href: '/stories' },
	{ label: 'FEATURES', href: '/features' },
	{ label: 'PRICING', href: '/pricing' },
] as const satisfies readonly NavItem[];

export const footerNavigation = [
	{ label: 'HOME', href: '/' },
	...primaryNavigation,
] as const satisfies readonly NavItem[];

export function normalizePath(path: string): string {
	if (path === '/') {
		return path;
	}

	return path.replace(/\/+$/, '');
}

export function isCurrentPath(currentPath: string, href: string): boolean {
	return normalizePath(currentPath) === normalizePath(href);
}
