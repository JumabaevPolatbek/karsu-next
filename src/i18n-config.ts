export const i18n = {
	defaultLocale: 'kaa',
	locales: ['uz', 'kaa', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
