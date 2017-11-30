module.exports = {
  presets: [
    'flow',
    [ 'env', {
      targets: {
        node: 'current',
        useBuiltIns: 'usage'
      }
    }]
  ],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'transform-export-namespace',
    'transform-decorators-legacy',
    ['root-import', {
      rootPathPrefix: '@',
      rootPathSuffix: 'src'
    }]
  ]
}
