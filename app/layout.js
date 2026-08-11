// app/layout.js
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en-KE">
      <head>
        {/* ── TITLE — must be explicit ── */}
        <title>Kelvin Mwangi Kamau | CECM Candidate, Kiambu County, Kenya</title>

        {/* ── STANDARD META ── */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d2b1a" />
        <meta name="description" content="Kelvin Mwangi Kamau | Kelvin Kamau — CECM Candidate, Kiambu County Government. PRSK Communicator, BCom Marketing KU, MCK Journalist & Digital Strategist." />
        <meta name="keywords" content="Kelvin Kamau, Kelvin Mwangi Kamau, Kelvin Kamau Kiambu, CECM Kiambu, Kiambu County, PRSK Kenya" />
        <meta name="author" content="Kelvin Mwangi Kamau" />
        <meta name="robots" content="index, follow" />

        {/* ── OPEN GRAPH ── */}
        <meta property="og:type"         content="profile" />
        <meta property="og:url"          content="https://kelvin-kamau-kiambu.vercel.app/" />
        <meta property="og:title"        content="Kelvin Mwangi Kamau | CECM Candidate, Kiambu County" />
        <meta property="og:description"  content="Kelvin Mwangi Kamau | Kelvin Kamau — CECM Candidate, Kiambu County Government. PRSK Communicator, BCom Marketing KU, MCK Journalist & Digital Strategist." />
        <meta property="og:image"        content="https://kelvin-kamau-kiambu.vercel.app/og-image.jpg" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="Kelvin Mwangi Kamau – CECM Candidate, Kiambu County" />
        <meta property="og:site_name"    content="Kelvin Mwangi Kamau – CECM Candidate" />
        <meta property="og:locale"       content="en_KE" />

        {/* ── TWITTER / X ── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Kelvin Mwangi Kamau | CECM Candidate, Kiambu County" />
        <meta name="twitter:description" content="PRSK Communicator, BCom Marketing KU, MCK Journalist & Digital Strategist. CECM Candidate, Kiambu County Government, Kenya." />
        <meta name="twitter:image"       content="https://kelvin-kamau-kiambu.vercel.app/og-image.jpg" />
        <meta name="twitter:site"        content="@KELVINMKENYA3" />
        <meta name="twitter:creator"     content="@KELVINMKENYA3" />

        {/* ── GEO / LOCAL SEO ── */}
        <meta name="geo.region"          content="KE-30" />
        <meta name="geo.placename"       content="Kiambu County, Kenya" />
        <meta name="geo.position"        content="-1.1717;36.8350" />
        <meta name="ICBM"               content="-1.1717, 36.8350" />

        {/* ── FONTS ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />

        {/* ── FAVICON ── */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ── JSON-LD STRUCTURED DATA ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kelvin Mwangi Kamau",
              "jobTitle": "CECM Candidate – Kiambu County Government",
              "email": "kelvinkam24@gmail.com",
              "telephone": "+254724557035",
              "url": "https://kelvin-kamau-kiambu.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/kelvin-kamau-mprsk-7a318424b",
                "https://x.com/KELVINMKENYA3",
                "https://www.facebook.com/profile.php?id=61588521846298",
                "https://www.tiktok.com/@kamau5735"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kiambu",
                "addressRegion": "Kiambu County",
                "addressCountry": "KE"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}