/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PUBLIC_API_KEY:
      "pk_test_51MitpOSInsGWGoGdWajqyNWiFEw1Eui7K8bAYYFNFMat4j95JUy1zkY135XK42sedo3xhHv3iM6D4qdjg2dxuzPn00nwfSdiEL",
    STRIPESECRETKEY:
      "sk_test_51MZVuxSFzGd3168zfqln3jcuRVr7XLQDSpfjPuqhgAGP6up4MBW7VjDGOiBOswuarBclW25C2ekIpYeDRkpYv8xT00Jr5iLd1T",
  },
};

module.exports = nextConfig;
