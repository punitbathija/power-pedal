/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_API_KEY:
      "pk_test_51MitpOSInsGWGoGdWajqyNWiFEw1Eui7K8bAYYFNFMat4j95JUy1zkY135XK42sedo3xhHv3iM6D4qdjg2dxuzPn00nwfSdiEL",
    STRIPE_SECRET_KEY:
      "sk_test_51MitpOSInsGWGoGdaIAR9Tcr8wadhZLbXKO7pwmWJZxMaacPLSJQXrOxVv9f5Hkm9OCUhvEFUtysLnYhORSpyEDE00AEoZYenP",
  },
};

module.exports = nextConfig;
