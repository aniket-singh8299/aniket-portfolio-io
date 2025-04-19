/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1) In Next.js 14+, this tells Next.js to produce static files in "out/" during `next build`.
    output: 'export',

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bjornmelin.io'
            }
        ]
    },
    trailingSlash: true,
    reactStrictMode: true,

    
};

export default nextConfig;
