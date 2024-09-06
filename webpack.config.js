const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack web worker repro',
        }),
    ],
    output: {
        clean: true
    }
};
