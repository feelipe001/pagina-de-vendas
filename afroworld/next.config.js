
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    SITE_NAME: process.env.SITE_NAME,
    SITE_URL: process.env.SITE_URL,
    UNIT_TV_ANDROID_LINK: process.env.UNIT_TV_ANDROID_LINK,
    ADS_ENABLED: process.env.ADS_ENABLED,
    AD_PROVIDER: process.env.AD_PROVIDER,
    AD_HTML_BANNER_TOP: process.env.AD_HTML_BANNER_TOP,
    AD_HTML_INFEED: process.env.AD_HTML_INFEED,
    AD_HTML_STICKY_FOOTER: process.env.AD_HTML_STICKY_FOOTER,
    NEXT_PUBLIC_THEME_DEFAULT: process.env.NEXT_PUBLIC_THEME_DEFAULT,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
