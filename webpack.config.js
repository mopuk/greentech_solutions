const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['images/*.{jpg,png}'], {
    destination: 'build/images',
    plugins: [
        imageminJpegtran(),
        imageminPngquant({
            quality: [0.6, 0.8]
        })
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