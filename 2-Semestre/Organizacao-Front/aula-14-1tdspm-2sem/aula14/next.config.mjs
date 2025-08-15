/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lojaintegrada.com.br',
                pathname: '/**',
                port:'',
            }
        ],
    }
};

export default nextConfig;
