/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  compiler: {
    relay: {
      // This should match relay.config.js
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
      eagerEsModules: false,
      reactRemoveProperties: { properties: ['^data-custom$'] },
      removeConsole: {
        exclude: ['error'],
      },
    },
  },
}
