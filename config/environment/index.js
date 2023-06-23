const packgaeJson = require('../../package.json')

export default {
  appVersion: packgaeJson.version,
  isProduction: process.env.NODE_ENV === 'production',
  env: process.env.NODE_ENV,
  key: {
    apiKey: process.env.NEXT_PUBLIC_KEY,
  },
  publicUrl: {
    url: process.env.NEXT_PUBLIC_PUBLIC_URL,
  },
}
