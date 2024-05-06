/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:'cdn.sainty.io',
                protocol: 'https',
                port: '',
                
            }
        ]
    }
};

export default nextConfig;
