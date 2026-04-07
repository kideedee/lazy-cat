export const SITE_METADATA = {
  title: `Lazy Cat – dev blog`,
  author: 'Son Vu Quang',
  headerTitle: `Lazy Cat`,
  description:
    'Code by day, blog by night. Join me on my backend journey as we learn and grow together.',
  language: 'en-us',
  locale: 'en-US',
  stickyNav: true,
  theme: 'system', // system, dark or light
  siteUrl: 'https://lazy-cat.pages.dev',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/lazy-cat.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: '',
  github: '',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  goodreadsBookshelfUrl: '',
  goodreadsFeedUrl: '',
  imdbRatingsList: '',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: '',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: '',
    paypal: '',
    kofi: '',
  },
  features: {
    mermaid: true,
  },
}
