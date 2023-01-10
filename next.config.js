module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/prism',
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
  },
};
