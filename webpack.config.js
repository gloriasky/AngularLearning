module.exports={
    context: __dirname+'/app',
    entry: {
        index: './index.js'
    },
    mode: "development",
    output: {
        path: __dirname+'/app/dist',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};