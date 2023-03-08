/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    STRIPEPUBLISHIBLEKEY:
      "pk_test_51MZVuxSFzGd3168zU9NY5lLGat9hO5woW8h9fzKsEirNSsPo1NH37aLUiHqCF8cAWneyJC470pSNOKE8Vfdb732R006sKO6xZV",
    STRIPESECRETKEY:
      "sk_test_51MZVuxSFzGd3168zfqln3jcuRVr7XLQDSpfjPuqhgAGP6up4MBW7VjDGOiBOswuarBclW25C2ekIpYeDRkpYv8xT00Jr5iLd1T",
  },
};

module.exports = nextConfig;
