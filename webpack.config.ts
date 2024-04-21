import path from 'path';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'production',
  entry: {
    index: './src/index.tsx',
    app: './src/components/App.tsx',
    error: './src/components/Error/Error.tsx',
    hello: './src/components/Hello/Hello.tsx',
    main: './src/components/Main/Main.tsx'
  },
  output: {
	filename: '[name].[contenthash].js',
  chunkFilename: '[name].[contenthash].js',
	path: path.resolve(__dirname, 'dist'),
  publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0
    }
  },
  performance: {
    maxAssetSize: 512 * 1024,
    maxEntrypointSize: 512 * 1024
  },
  devServer: {
    port: 8000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
