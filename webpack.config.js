var webpack = require('webpack');
module.exports={
    context: __dirname+'/app',
    entry: {
        app: './app.js'
    },
    mode: "development",
    output: {
        path: __dirname+'/app/dist',
        filename: "bundle.js",

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
            },
            {
                test: /\.png/,
                loader: 'url-loader'
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            },

        ]
    },
};