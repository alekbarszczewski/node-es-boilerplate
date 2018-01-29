module.exports = {
  presets: [
    '@babel/flow',
    [ '@babel/env', {
      targets: {
        node: 'current'
      }
    }]
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-export-namespace',
    '@babel/proposal-decorators',
    ['root-import', {
      rootPathPrefix: '@',
      rootPathSuffix: 'src'
    }]
  ],
  env: {
    test: {
      plugins: ['istanbul']
    }
  }
}
