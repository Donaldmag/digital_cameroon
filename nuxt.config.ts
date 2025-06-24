// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: [
    "~/assets/css/style.css",
    "~/assets/css/plugins/animate.css",
    "~/assets/css/plugins/fontawesome-6.css",
    "~/assets/css/vendor/bootstrap.css",
    "~/assets/css/vendor/metismenu.css",
  ],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  plugins: [
    // { src: '~/plugins/gsap.js', mode: 'client' },
  ],
  vue: {
    propsDestructure: true,
  },
  // SEO Config for the entire app
  app: {
    head: {
      title: "Digital Cameroon",
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",

      meta: [
        { name: "description", content: "Digital Cameroon" },
        {
          name: "theme-color",
          content: "#141414",
          media: "(prefers-color-scheme: dark)",
        },
        { name: "author", content: "Doblwy" },
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/fav.png" }, 
      ],

      script: [
        { src: "/js/vendor/jquery.min.js", type: "text/javascript" },
        { src: '/js/plugins/bootstrap.min.js', type: 'text/javascript' },
        { src: "/js/plugins/contact.form.js", type: "text/javascript" },
        { src: "/js/vendor/waypoint.js", type: "text/javascript" },
        { src: "/js/plugins/swiper.js", type: "text/javascript" },

        //for side bar sticky
        { src: "/js/plugins/resizer-sensor.js", type: "text/javascript" },
        { src: "/js/plugins/sticky-sidebar.js", type: "text/javascript" },

        { src: "/js/plugins/isotop.js", type: "text/javascript" },
        {
          src: "/js/plugins/imagesloaded.pkgd.min.js",
          type: "text/javascript",
        },

        {
          src: "/js/plugins/smoothscroll-varticle.js",
          type: "text/javascript",
        },
        { src: "/js/vendor/gsap.js", type: "text/javascript" },
        { src: "/js/plugins/scrolltiger.js", type: "text/javascript" },
        { src: "/js/plugins/scrolltoplugin.js", type: "text/javascript" },
        { src: "/js/plugins/splittext.js", type: "text/javascript" },
        { src: "/js/plugins/smoothscroll.js", type: "text/javascript" },

        //title opacity scroll magix
        { src: "/js/plugins/scrollmagic.js", type: "text/javascript" },
        { src: "/js/plugins/animate-scrollmagic.js", type: "text/javascript" },

        { src: "/js/plugins/tilt.js", type: "text/javascript" },
        { src: "/js/plugins/counterup.js", type: "text/javascript" },

        { src: "/js/vendor/waw.js", type: "text/javascript" },

        //custom javascripts
        { src: "/js/main.js", type: "text/javascript" },
      ],
    },
  },
});
