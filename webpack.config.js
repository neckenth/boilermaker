const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: 'development',
    // mode: isDev ? 'development' : 'production',
    entry: ['babel-polyfill', './client/index.js'],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-maps',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}