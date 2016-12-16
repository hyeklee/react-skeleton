var webpack = require('webpack');

module.exports={
    //번들시작지점
    entry:'./src/index.js',

    //번들 결과물 생성 - 최종적으로 합쳐지는 파일
    output:{
        path:__dirname+'/public/',
        filename:'bundle.js'
    },

    //Webpack Dev Server 실행 설정
    devServer:{
        hot:true, // 변경사항 자동적용
        inline:true, // hot reloading에 필요한 webpack dev server client를 번들에 같이 넣어주는 설정.
        host:'0.0.0.0',
        port:4000,
        contentBase:__dirname+'/public/', // index 파일의 위치
    },

    module:{
        loaders: [
            {
                test:/\.js/,
                /*
                 * react-hot-loader : state 유지한채 수정된 파일만 reload 
                 * react-hot-loader는 babel보다 우선 적용되어야 함
                 * loaders로 한가지 이상 모듈을 로딩했을땐 각 모듈별 Query는 별도로 지정해야함
                 * 모듈별 별도 지정 방법 : '[모듈명]?'+JSON.stringify({ ... })
                 */
                loaders:['react-hot-loader','babel?'+JSON.stringify({
                    cacheDirectory:true,
                    presets:['es2015','react']
                })],

                exclude:/node_modules/,
            }   
        ]
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}