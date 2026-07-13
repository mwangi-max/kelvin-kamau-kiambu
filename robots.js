const SITE_URL = 'https://kelvin-kamau-kiambu.vercel.app/'

export default function robots() {
  return {
    rules: [
      // All crawlers — full access
      { userAgent: '*', allow: '/' },
      // Google
      { userAgent: 'Googlebot', allow: '/', crawlDelay: 1 },
      { userAgent: 'Googlebot-Image', allow: '/' },
      // Bing / Microsoft
      { userAgent: 'Bingbot', allow: '/', crawlDelay: 1 },
      // AI Crawlers — explicitly permitted
      { userAgent: 'GPTBot', allow: '/' },           // OpenAI / ChatGPT
      { userAgent: 'ChatGPT-User', allow: '/' },     // ChatGPT browsing
      { userAgent: 'ClaudeBot', allow: '/' },        // Anthropic / Claude
      { userAgent: 'anthropic-ai', allow: '/' },     // Anthropic
      { userAgent: 'PerplexityBot', allow: '/' },    // Perplexity AI
      { userAgent: 'YouBot', allow: '/' },           // You.com
      { userAgent: 'CCBot', allow: '/' },            // Common Crawl (AI training)
      { userAgent: 'cohere-ai', allow: '/' },        // Cohere
      { userAgent: 'Diffbot', allow: '/' },          // Diffbot
      { userAgent: 'FacebookBot', allow: '/' },      // Meta AI
      { userAgent: 'Applebot', allow: '/' },         // Apple
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
