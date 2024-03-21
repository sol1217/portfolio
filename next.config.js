/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
}

const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
}

module.exports = nextConfig
