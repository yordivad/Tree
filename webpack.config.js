let path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-decorators-legacy']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test:  /\.less$/,
                use: [
                    {loader: "style-loader" },
                    {loader: "css-loader" },
                    {loader: "less-loader"}
                    ]
            },
            {
                test:  /\.css/,
                loader: "css-loader"
            }
        ]
    },
    stats: {
        colors: true
    },

    devtool: 'source-map'
};