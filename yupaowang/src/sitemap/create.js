// 自定义生成sitemap文件插件
let fs = require('fs')
let path = require('path')

// 需要拷贝的源文件地址
let sourePath = path.resolve(__dirname + '/sitemap.json')
// 将源文件拷贝到什么位置
let copyPath = path.resolve(__dirname + '../../../dist/sitemap.json')

class BuildPlugin {
  apply(builder) {
    builder.hooks.afterBuild.tap('BuildPlugin', () => {
      console.log(`\x1B[31m请等待：\x1B[0m \x1B[32m系统正在为您自动生成sitemap.json文件\x1B[0m\n`)
      try{
        let data = fs.readFileSync(sourePath, 'utf-8')
        data = new Uint8Array(Buffer.from(data))
        fs.writeFileSync(copyPath, data, 'utf8', err => {
          console.log('1111')
          if(err) throw ('自动生成sitemap文件出错')
        })
        console.log(`\x1B[31m恭喜您：\x1B[0m \x1B[32m系统已为您自动生成了sitemap.json文件\x1B[0m\n`)
      }catch(err){
        console.log(err)
      }
    })
  }
}

module.exports = BuildPlugin