import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['en', 'kaa', 'uz'],

	// Used when no locale matches
	defaultLocale: 'kaa',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(kaa|en|uz|ru)/:path*'],
};
