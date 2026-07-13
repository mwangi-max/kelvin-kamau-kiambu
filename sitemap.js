const SITE_URL = 'https://www.kelvinkamau.co.ke'

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/#about`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#portfolios`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#experience`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#education`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
