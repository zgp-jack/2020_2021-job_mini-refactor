/*
 * @Author: jsxin
 * @Date: 2020-11-30 09:34:43
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-30 16:06:13
 * @Description: 项目打包配置项 appid-project对应项 
 */
// 小程序类别列表
const type_weixin = 'config'
const type_zijie = 'tt'
const type_baidu = 'swan'
const type_qq = 'qq'

const projects = {
  // 微信类
  yupao: {
    appid: 'wx31a1c86a67bc6c54',
    projectname: '鱼泡网',
    type: type_weixin
  },
  jizhao: {
    appid: 'wx456feacb0e86162f',
    projectname: '工地急招',
    type: type_weixin
  },
  // 字节类
  douyin: {
    appid: 'tt50eb2656cfd1bd43',
    projectname: '鱼泡网',
    type: type_zijie
  },
  // 百度类
  baidu: {
    appid: '21569591',
    projectname: '鱼泡网',
    type: type_baidu
  }
  // QQ类
  
}

module.exports = projects