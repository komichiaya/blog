export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/minireset.css/0.0.2/minireset.css' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2522897_lksvq2zkic.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/global.css',
    '~assets/index.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    { src: '@/plugins/element-ui.js', ssr: true },
    { src: "~plugins/axios.js", ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  env: {
    DEV_API: "",
    PROD_API: "",
    domain: process.env._ENV == "production"
      ? "http://localhost:3000/api"
      : "http://localhost:3000/api",
  },

  axios: {
    retry: { retries: 3 },
    //开发模式下开启debug
    debug: process.env._ENV == "production" ? false : true,
    //设置不同环境的请求地址
    baseURL:
      process.env._ENV == "production"
        ? "http://localhost:3000/api"
        : "http://localhost:3000/api",
    withCredentials: true,
  },
  proxy: {
    //开启代理
    "/api/": {
      target: "http://localhost:8965",
      pathRewrite: { "^/api/": "" }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['element-ui', 'external_library', 'axios'],
    transpile: ['vue-clamp', 'resize-detector']
  }
}
