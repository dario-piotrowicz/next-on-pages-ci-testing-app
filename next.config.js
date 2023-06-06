/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: '0199c4dada322b8aa9638db417c85232',
    SECRET_KEY: '3ebda0eec990af39161033602bd3f72d',
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    SHOPIFY_THEME_APP_EXTENSION_ID: 'demo-theme',
    SCOPES: 'read_all_orders',
    HOSTSCHEME: 'https',
    HOST: 'test',
    APP_SLUG: process.env.APP_SLUG,
    MONGODB_API_URL: process.env.MONGODB_API_URL,
    MONGODB_API_KEY: process.env.MONGODB_API_KEY,
    wa_cf: process.env.wa_cf,
  },
};

module.exports = nextConfig;
