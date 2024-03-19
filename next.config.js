/** @type {import('next').NextConfig} */
const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		// remotePatterns: [
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'karsu.uz',
		// 		port: '',
		// 	},
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'api.karsu.uz',
		// 		port: '',
		// 		pathname: '',
		// 	},
		// ],
		domains: ['karus.uz', 'api.karsu.uz'],
	},
};
module.exports = withNextIntl(nextConfig);
