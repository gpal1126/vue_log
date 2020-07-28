const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {  //node 모듈을 객체로 선언
    mode: 'development',    //개발, 배포 : production
    devtool: 'eval',        //개발, 배포 : hidden-source-map
    resolve: {
        extensions: ['.js', '.vue'],    //확장자 생략 가능하도록 설정
    },
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            //loader: 'vue-loader',
            use: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        //filename: 'app.js',
        filename: '[name].js',  //[name]이 알아서  app으로 적용
        path: path.join(__dirname, 'dist'),
    },
};