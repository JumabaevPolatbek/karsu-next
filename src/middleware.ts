import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['en', 'kaa', 'uz',"ru"],
	// locales,
	// Used when no locale matches
	defaultLocale: 'kaa',
	// localePrefix,
	localeDetection:false
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(kaa|en|uz|ru)/:path*'],
};
