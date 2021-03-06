const projects = require('../project.config')

const webpack = require('webpack-bundle-analyzer')
// * 非微信小程序标识集合
const unweixinmins = ["baidu", "douyin"]
// * 引入自己的打包文件 json匹配操作插件
const initProjectBuild = require('../build')
// * 当前编译小程序集合
const miniflag = JSON.stringify(process.argv[2])
const reminiflag = miniflag.replace(/\"/g, "")
const ISWEIXIN = projects[reminiflag].type === 'config'

// 根据标识去初始化自己的项目配置
initProjectBuild(reminiflag)

const config = {
  projectName: '鱼泡网',
  date: '2020-2-13',
  designWidth: 750,
  // deviceRatio: {
  //   '640': 2.34 / 2,
  //   '750': 1,
  //   '828': 1.81 / 2
  // },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread'
    ]
  },
  plugins: [],
  defineConstants: {
    MINI: miniflag,
    ISWEIXIN: ISWEIXIN
  },
  // copy: {
  //   patterns: [
  //     { from: 'src/sitemap/sitemap.json', to: 'dist/sitemap.json' }
  //   ],
  //   options: {}
  // },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}
module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

