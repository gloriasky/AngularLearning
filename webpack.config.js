module.exports={
    context: __dirname+'/app',
    entry: {
        index: './index.js'
        // angular:'../node_modules/angular/angular.js',
        // angularMocks:'../node_modules/angular-mocks/angular-mocks.js',
        // angularTranslate:'../node_modules/angular-translate/dist/angular-translate.js',
        // lodash:'../node_modules/lodash/lodash.js',
        // index: './index.js',
        // add: './components/addComponent/addController.js',
        // list:'./components/listStringsComponent/listStringController.js',
        // main:'./components/mainComponent/main.js',
        // navbar:'./components/navbarComponent/navbarController.js',
        // numberFilter: './filters/numberFilter.js',
        // myService:'./services/myService.js',
        // styles:'./styles/style.css'
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
                test: /\.png/,
                loader: 'url-loader'
            }
        ]
    }
};