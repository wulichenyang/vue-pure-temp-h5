const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [ 'whatwg-fetch', './src/index.js' ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js?[hash]',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.html?$/,
        loader: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              [ 'es2015' ]
            ],
            plugins: [
              'transform-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: [{
            loader: 'css-loader?url=false'
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader',
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
              js: 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
            }
          }
        }
      }
    ]
  },
  externals: {
    jQuery: '$',
    moment: 'moment',
    loadash: '_',
    window: 'window',
    document: 'document'
  },
  resolve: {
    alias: {
      components: path.join(__dirname, './src/components'),
      config: path.join(__dirname, './src/config'),
      // charts: path.join(__dirname, './src/charts'),
      store: path.join(__dirname, './src/store'),
      lib: path.join(__dirname, './src/lib'),
      api: path.join(__dirname, './src/api'),
      utils: path.join(__dirname, './src/utils'),
      scss: path.join(__dirname, './src/assets/scss'),
      template: path.join(__dirname, './src/template'),
      utils: path.join(__dirname, './src/utils'),
      'request$': path.join(__dirname, './src/api/request.js'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true,
    noInfo: false,
    disableHostCheck: true,
    public: '127.0.0.1:9000',
    proxy: {
      '/images': 'http://localhost:9000/dist',
      '/fonts': 'http://localhost:9000/dist',
      '/mars-api-v1': {
        // server@client
        // target: 'https://192.168.1.2:8443/',
        // secure: false

        // server@qiongjie
        target: 'http://192.168.1.97:8080/',
        pathRewrite: {"^/mars-api-v1" : ""}
      },
      '/mars-api-v1': {
        // server@client
        // target: 'https://192.168.1.2:8443/',
        // secure: false

        // server@qiongjie
        target: 'http://192.168.1.187:9123/',
        // pathRewrite: {"^/mars-api-v1" : ""}
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#source-map',
  plugins: [
    new ExtractTextPlugin('style.css?[hash]'),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, './src/assets/images'),
        to: './images'
      },
      {
        from: path.join(__dirname, './src/assets/fonts'),
        to: './fonts'
      },
      {
        from: './index.html',
        to: '.'
      }
    ])
  ]

};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '\"production\"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
};
