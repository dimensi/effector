// @flow

module.exports = function(context, opts) {
  return {
    configureWebpack(config, isServer, {getCacheLoader, getBabelLoader}) {
      return {
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude(modulePath /*: string*/) {
                // Don't transpile node_modules except any docusaurus package
                return (
                  /node_modules/.test(modulePath) &&
                  !/docusaurus/.test(modulePath)
                )
              },
              use: [
                opts.cacheLoader && getCacheLoader(isServer),
                getBabelLoader(isServer, {
                  overrides: [
                    {
                      presets: ['@babel/flow'],
                    },
                  ],
                }),
              ].filter(Boolean),
            },
          ],
        },
      }
    },
  }
}
