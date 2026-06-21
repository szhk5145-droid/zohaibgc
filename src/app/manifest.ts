import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zohaib Global Enterprises (SMC private) Limited',
    short_name: 'Zohaib Global',
    description: 'Enterprise-grade software development, mobile applications, SaaS platforms, and IT consulting.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#F48B47',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
