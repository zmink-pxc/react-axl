const path = require('path');
const sass = require('sass');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-axl.umd.js',
    library: 'ReactAxl',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@controllers': path.resolve(__dirname, 'src/components/Controllers'),
      '@core': path.resolve(__dirname, 'src/components/Core'),
      '@modules': path.resolve(__dirname, 'src/components/Modules'),
      '@utils': path.resolve(__dirname, 'src/components/Utils'),
      '@': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@se': path.resolve(__dirname, 'src/components/Modules/SmartElements'),
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/styles')],
                importer: [
                  function(url) {
                    if (url === '@bit/zmink.axioline._axioline') {
                      return {
                        file: path.resolve(__dirname, 'src/styles/_axioline.scss'),
                      };
                    }
                    return null;
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/styles')],
                importer: [
                  function(url) {
                    if (url === '@bit/zmink.axioline._axioline') {
                      return {
                        file: path.resolve(__dirname, 'src/styles/_axioline.scss'),
                      };
                    }
                    return null;
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            publicPath: 'assets',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'react-axl.css',
    }),
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
  },
};

