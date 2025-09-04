/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    images: {
        unoptimized: true, // Disable image optimization
    },
    experimental: {
    esmExternals: true, // Allow ESM modules like @react-email/render
  },
}

module.exports = nextConfig
