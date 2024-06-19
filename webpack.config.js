const path = require('path');
// const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';

const jsLoaders = () => [
  {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
];

const config = {
  entry: {
    index: ['./src/scripts/index.js', './src/styles/styles.scss'],
    // bootstrap: ['./src/styles/bootstrap/bootstrap.scss'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devtool: 'eval-cheap-source-map',
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true,
    host: 'localhost',
    static: './dist',
    watchFiles: ['src/**/*'],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      images: path.resolve(__dirname, './src/assets/images'),
      fonts: path.resolve(__dirname, './src/assets/fonts'),
    },
  },
  performance: {
    maxAssetSize: 1000000,
  },
  optimization: {
    minimize: false,
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              [
                'gifsicle',
                {
                  interlaced: true,
                },
              ],
              [
                'jpegtran',
                {
                  progressive: true,
                },
              ],
              [
                'optipng',
                {
                  optimizationLevel: 5,
                },
              ],
              [
                'svgo',
                {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  plugins: [
    // new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-preset-env', {}],
                  // autoprefixer({
                  //   browsers: ['ie >= 8', 'last 4 version'],
                  // }),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(ttf|woff2|woff|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
