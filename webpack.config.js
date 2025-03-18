const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const imagemin = require('imagemin');

const files = await imagemin(['images/*.{jpg,png}'], {
    destination: 'build/images',
    plugins: [
    ]
});

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GreenTech Solutions',
            template: "src/index.html",
            filename: "index.html",
        }),
    ],
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        assetModuleFilename: '[path][name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: "production"
};