import './globals.css'

const SITE_URL = 'https://kelvin-kamau-kiambu.vercel.app/'
const FULL_NAME = 'Kelvin Mwangi Kamau'
const TITLE = 'Kelvin Mwangi Kamau | CECM Candidate – Kiambu County Government'
const DESCRIPTION =
  'Kelvin Mwangi Kamau is a PRSK-certified public communications professional, BCom Marketing graduate, and seasoned government officer seeking the County Executive Committee Member (CECM) position in the County Government of Kiambu, Kenya – specialising in Youth Affairs, Communications, and Administration.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Kelvin Kamau',
    'Kelvin Mwangi Kamau',
    'CECM Kiambu',
    'County Executive Committee Member Kiambu',
    'Kiambu County Government',
    'Kelvin Kamau Kenya',
    'Public Communications Officer Kiambu',
    'PRSK Kenya',
    'Youth Affairs Kiambu',
    'Communications CECM Kenya',
    'BCom Marketing Kenyatta University',
    'Kiambu County leadership',
    'Kelvin Kamau MPRSK',
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { 'en-KE': SITE_URL },
  },
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Kelvin Mwangi Kamau – CECM Candidate',
    locale: 'en_KE',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Kelvin Mwangi Kamau – CECM Candidate, Kiambu County',
      },
    ],
    firstName: 'Kelvin',
    lastName: 'Kamau',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    site: '@KELVINMKENYA3',
    creator: '@KELVINMKENYA3',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  other: {
    'geo.region': 'KE-30',
    'geo.placename': 'Kiambu County, Kenya',
    'geo.position': '-1.1717;36.8350',
    'ICBM': '-1.1717, 36.8350',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: FULL_NAME,
      givenName: 'Kelvin',
      additionalName: 'Mwangi',
      familyName: 'Kamau',
      jobTitle: 'Public Communication Officer II & CECM Candidate – Kiambu County',
      description: DESCRIPTION,
      email: 'kelvinkam24@gmail.com',
      telephone: '+254724557035',
      url: SITE_URL,
      image: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/photos/kelvin-formal.jpg`,
        caption: 'Kelvin Mwangi Kamau – CECM Candidate, Kiambu County',
      },
      sameAs: [
        'https://www.linkedin.com/in/kelvin-kamau-mprsk-7a318424b',
        'https://x.com/KELVINMKENYA3',
        'https://www.facebook.com/profile.php?id=61588521846298',
        'https://www.tiktok.com/@kamau5735',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'P.O Box 2344-00900',
        addressLocality: 'Kiambu',
        addressRegion: 'Kiambu County',
        addressCountry: 'KE',
      },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Kenyatta University',
          address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
        },
      ],
      memberOf: [
        { '@type': 'Organization', name: 'Public Relations Society of Kenya (PRSK)' },
        { '@type': 'Organization', name: 'Media Council of Kenya (MCK)' },
      ],
      knowsAbout: [
        'Government Communications', 'Public Relations', 'Digital Strategy',
        'Youth Affairs', 'Community Engagement', 'Data Analysis',
        'AI Tools', 'SEO', 'Multimedia Production', 'Team Leadership',
        'County Administration', 'Policy Communication',
      ],
      knowsLanguage: ['English', 'Swahili', 'Kikuyu'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Kelvin Mwangi Kamau – CECM Candidate',
      description: DESCRIPTION,
      inLanguage: 'en-KE',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      description: DESCRIPTION,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Kelvin Mwangi Kamau?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kelvin Mwangi Kamau is a PRSK-certified Public Communications Professional and BCom Marketing graduate from Kenyatta University, currently serving as Public Communication Officer at the County Government of Kiambu. He is a candidate for the County Executive Committee Member (CECM) position in Kiambu County, Kenya.',
          },
        },
        {
          '@type': 'Question',
          name: 'What position is Kelvin Kamau applying for in Kiambu County?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kelvin Mwangi Kamau is seeking the County Executive Committee Member (CECM) position in the County Government of Kiambu, with preferred portfolios in Youth Affairs, Communications, and Administration.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are Kelvin Kamau\'s qualifications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kelvin holds a BCom (Marketing) and Diploma in Public Relations from Kenyatta University, and over 14 professional certifications in data analysis, AI, cybersecurity, SEO, digital marketing, web development, and leadership from IBM, Meta, UC Davis, Johns Hopkins, Macquarie University, and others.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Kelvin Kamau?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kelvin Mwangi Kamau can be reached at kelvinkam24@gmail.com or +254 724 557 035. He is also active on LinkedIn, X (Twitter), Facebook, and TikTok.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-KE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0d2b1a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
