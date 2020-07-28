const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './resources/js/index.js',
    output: {
        path: path.resolve(__dirname, './assets/js'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '../',
                          hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '../',
                          hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    'css-loader?url=false',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                  {
                    loader: 'script-loader',
                    options: {
                        useStrict: false,
                    },
                  },
                ]
            },
            {
                test: /\.(jpe?g|png|svg)(\?[a-z0-9=.]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../img/'
                    }
                }]
            },
            {
                test: /\.(woff(2)?|woff|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../webfonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "../css/style.css" }),
        new BrowserSyncPlugin({
            host: 'localhost',
            proxy: 'http://localhost/same',
            port: 3000,
            files: ['*.php'],
            injectChanges: true,
            notify: true
        }),
    ],
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
}