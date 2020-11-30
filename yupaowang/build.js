let fs = require('fs')
let projects = require('./project.config')

// 默认配置项文件
let mini_normal_json = ''
// 需要打包的配置项文件
let mini_config_json = ''

function initProjectBuild(type){// type 被解析出来的标识符
  console.log(`当前进度：解析出当前项目标识为${type}...\n`)
  // 根据标识先将当前配置项取出，如果没有找到则表示在project.config.js中未声明，抛出异常
  let project_data = projects[type]
  if (!project_data) throw ('当前标识暂未在配置项中声明，请先声明后再执行打包操作！')
  // 先保存下来当前打包是哪个系列的小程序，用于后面创建不同的配置json
  mini_normal_json = './project.config.json'
  mini_config_json = `./project.${project_data.type}.json`
  // 当前配置项中需要过滤的字段
  let filter_fiele = ['type']
  // 将所有的字段根据键值对组成一个数组对象，方便正则替换
  let replaceArr = []
  Object.keys(project_data).forEach(key => {
    // 过滤一下不需要使用的字段
    let inarr = filter_fiele.find(item => item == key)
    if (inarr) return
    // 验证是否有字段的值为空
    let val = project_data[key]
    if (!val) throw (`project.config.js下的${type}配置中，${key}字段没有给出相应的值`)
    // 使用相应的格式 组成一个替换 对象数组
    let data_item = {
      name: key,
      val: val
    }
    replaceArr.push(data_item)
  })
  // ! 执行打包文件匹配写入
  console.log('当前进度：执行打包文件匹配写入...\n')
  readTempFileAction(replaceArr)
  console.log('当前进度：文件写入执行完毕...\n')
}

function readTempFileAction(replaceArr) {
  console.log('当前进度：开始读取默认配置文件...\n')
  // 将所有默认数据取出
  let data = fs.readFileSync(mini_normal_json, 'utf-8')
  // 如果失败 直接抛出异常
  if (!data) throw data
  // 当前可能会被替换的数据，将之前准备的值保存准备传递
  let mydata = replaceArr
  // 准备好自己将要写入的数据
  let str = replaceConfig(data, mydata)
  // 将数据写入到指定的文件夹
  writeFileData(mini_config_json, str)
}

// 根据正则将对应的键值对替换
function replaceConfig(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    let data = arr[i]
    let reg = eval('/("' + data.name + '":)(\\s?"?)([\\w%|\u4e00-\u9fa5]+)("?,?)/g')
    str = str.replace(reg, `$1$2${data.val}$4`)
  }
  return str
}

// 将自己的文件内容写入到文件
async function writeFileData(filePath, data) {
  console.log('当前进度：正在执行文件替换操作...\n')
  data = new Uint8Array(Buffer.from(data))
  try{
    await fs.writeFileSync(filePath, data, 'utf8', err => {
      console.log(err)
      if (err) throw ('写入文件出错')
      console.log('当前进度：编译配置项写入成功，进入打包环节...\n')
    })
  }catch(err){
    console.log(err)
  }
}

module.exports = initProjectBuild