/** @type {import('next').NextConfig} */
const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};
module.exports = withNextIntl(nextConfig);
