/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imgcentauro-a.akamaihd.net"
            }
        ]
    }
};

export default nextConfig;
