var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/App.js'
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname,'public/build') ,
        publicPath: 'public/build',
        filename: 'app.bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modulesy/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react','@babel/env',{
                        'plugins': ['@babel/plugin-proposal-class-properties']}]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                  modules: true
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader'
                  },
                ],
            }
        ] ,
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
    port: 8000,
    contentBase: 'public',
    proxy: {
    '/api/*': {
    target: 'http://localhost:3000'
    }
    }
    }
}