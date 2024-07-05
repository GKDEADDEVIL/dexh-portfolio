/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_URL: '/',
      },
      images: {
        domains: ['cdn-icons-png.flaticon.com', "t3.ftcdn.net"],
      },
}

module.exports = nextConfig
