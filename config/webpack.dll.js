var path    = require('path');
var webpack = require('webpack');
module.exports = {
    entry:{
        shim: [
            "console-polyfill",
            "babel-polyfill",
            "raf/polyfill",
            "media-match"
        ],
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'redux-thunk',
            'lodash',
            "axios",
            "jquery"
        ]
    },
    output: {
        path: path.resolve(__dirname), // 生成的dll.js路径，我是存在/build/dev中
        filename: '[name].[hash:5].dll.js', // 生成的文件名字
        library: '[name]_library'  // 生成文件的一些映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
        new webpack.DllPlugin({
            // 会生成一个json文件，里面是关于dll.js的一些配置信息
            path: path.resolve(__dirname,'./[name].manifest.json'),
            name: '[name]_library', // 与上面output中配置对应
            context:__dirname
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                // Disabled because of an issue with Uglify breaking seemingly valid code:
                // https://github.com/facebookincubator/create-react-app/issues/2376
                // Pending further investigation:
                // https://github.com/mishoo/UglifyJS2/issues/2011
                comparisons: false
            },
            output: {
                comments: false,
                // Turned on because emoji and regex is not minified properly using default
                // https://github.com/facebookincubator/create-react-app/issues/2488
                ascii_only: true
            }
        })
    ]
};