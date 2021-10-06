module.exports = {
	reactStrictMode: true,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	rewrites() {
		return [
			{
				source: '/:path*',
				destination: '/:path*',
			},
			{
				source: '/:path*',
				destination: 'http://localhost:2999/:path*',
			},
		];
	},
};
