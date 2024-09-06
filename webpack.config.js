const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack web worker repro',
        }),
    ],
}, {
    entry: './src/worker.js',
    target: 'webworker',
    output: {
        filename: 'worker.js'
    }
}];
