/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    APIhost: 'http://localhost:3000',
    // APIhost: 'https://api.igrejaemribeirao.com.br',
    NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-TS8Z5G7V4D'
  },
}