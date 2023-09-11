const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})
   
module.exports = withNextra({
    images: {
        unoptimized: true,
    },
    i18n: {
        locales: ['en', 'ko'],
        defaultLocale: 'en'
    }
});