export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-tailwind-website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/#setup
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/date-fns-moduleWith
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
    nestedProperties: ['author.name'],
  },
  // Tailwindcss
  tailwindcss: {
    jit: true,
  },
  // Router
  router: {
    middleware: 'userAgent',
  },
  // Generate routes
  generate: {
    routes: async () => {
      const routes = []
      let posts = []
      let tags = []

      const { $content } = require('@nuxt/content')

      /* Posts */
      if (posts === null || posts.length === 0) {
        posts = await $content('blogs').where({ offLink: false }).fetch()
      }

      /* Post Tags */
      if (tags === null || tags.length === 0) {
        tags = await $content('tags').fetch()
      }

      /* Posts */
      for (const post of posts) {
        routes.push(`/blog/${post.slug}`)
      }

      /* Post Tags */
      for (const tag of tags) {
        routes.push(`/blog/tag/${tag.name.replace(' ', '_')}`)
      }

      return routes.sort()
    },
  },
}
