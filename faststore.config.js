
module.exports = {
  seo: {
  "title": "Dal Costa Atacado",
  "description": "Dal Costa a loja de biquinis e acessórios para praia de SC",
  "titleTemplate": "%s | Dal Costa",
  "author": "XP Agência"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "dalcostab2b",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://dalcostab2b.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/biqu%C3%ADnis",
    search: "/s?q=DAL%20COSTA",
    pdp: "/calcinha-media-dupla-com-lateral-larga-e-drapeada-atelie-300171001/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/calcinha-media-dupla-com-lateral-larga-e-drapeada-atelie-300171001/p",
      collection: "/biqu%C3%ADnis",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/calcinha-media-dupla-com-lateral-larga-e-drapeada-atelie-300171001/p",
      collection: "/biqu%C3%ADnis",
      collection_filtered: "/biqu%C3%ADnis/?category-1=biqu%C3%ADnis&brand=DAL%20COSTA&facets=category-1%2Cbrand%27",
      search: "/s?q=DAL%20COSTA",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://dalcostab2b.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
