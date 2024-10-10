const nextra = require('nextra')

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  search: {
    codeblocks: false
  }
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh', 'de'],
    defaultLocale: 'zh'
  }
})
