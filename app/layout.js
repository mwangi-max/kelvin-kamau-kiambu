// app/layout.js
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en-KE">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d2b1a" />

        {/* ── HARDCODED OG & TWITTER TAGS ── */}
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
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Kelvin Mwangi Kamau | CECM Candidate, Kiambu County" />
        <meta name="twitter:description" content="PRSK Communicator, BCom Marketing KU, MCK Journalist & Digital Strategist. CECM Candidate, Kiambu County Government, Kenya." />
        <meta name="twitter:image"       content="https://kelvin-kamau-kiambu.vercel.app/og-image.jpg" />
        <meta name="twitter:site"        content="@KELVINMKENYA3" />
        <meta name="twitter:creator"     content="@KELVINMKENYA3" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
