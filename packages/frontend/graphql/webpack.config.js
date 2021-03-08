const mode = process.env.NODE_ENV || 'production';

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  entry: './lambdas/resolvers.ts',

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'script.js'
  }
};
