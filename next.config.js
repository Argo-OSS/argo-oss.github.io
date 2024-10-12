const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = {
  ...withNextra(),
  env: {
    OCTOKIT_TOKEN: process.env.OCTOKIT_TOKEN
  },
  images: {
    unoptimized: true, // static page로 배포하려면 반드시 필요
    staticImage: true,
  },
};
