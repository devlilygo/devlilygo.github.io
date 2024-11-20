/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages를 위한 설정
  output: 'export',
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://devlilygo.github.io',
  },
  // svg사용 설정
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: /src\/images/, // SVG 파일 경로 설정
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
