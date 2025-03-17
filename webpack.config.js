const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // To handle HTML files
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // To handle CSS files

module.exports = {
    entry: {
        main: './src/index.js'
    } , // Your entry point for JS files
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the dist directory before each build
        publicPath: '/', // Ensure the publicPath is set correctly
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Rule to handle CSS files
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/, // Rule to handle HTML files
                use: 'html-loader',
            },
            {
                test: /\.(js|jsx)$/, // Rule to handle JS/JSX files
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Set the output filename for CSS
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html', // Template for generating HTML
            filename: 'index.html', // Output file in dist
        }),
    ],
    mode: 'production',
};