/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: /src\/images/, // SVG 파일 경로 설정
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
