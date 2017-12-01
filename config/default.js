const envalid = require('envalid')

const { str } = envalid

const env = envalid.cleanEnv(process.env, {
  APP_SECRET: str({
    desc: 'Application secret (for example 64 hex-encoded bytes). Use `make app-secret` to generate random value',
    example: '2f6844998fd56c94a7d96f86a2fcc4af4f04c6735d9ef66644accbfd7a4479f1fa38aa0ad6d70a035be72552f2b4d08cec84c4d832b6fa3954c35cd58f915b85'
  })
}, { strict: true })

module.exports = {
  appSecret: env.APP_SECRET
}
