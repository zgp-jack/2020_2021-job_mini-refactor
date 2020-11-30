/*
 * @Author: your name
 * @Date: 2020-10-28 11:04:26
 * @LastEditTime: 2020-11-28 14:34:43
 * @LastEditors: jsxin
 * @Description: In User Settings Edit
 * @FilePath: \yupaowang\src\config\minis\jizhao.ts
 */
// * 每个小程序单独配置  工地急招

// * page-title-global
var PAGETITLE: string = '鱼泡网-'
// ! 小程序token 
var TOKEN: string = 'jizhao'
// ! 小程序公司体系
var SERIES: string = 'weixin'
// * 小程序是否能被分享
var ISCANSHARE: boolean = true
// * 小程序广告unitid
var UNITID: string = 'adunit-80f40e8b4f60c3f6'
// * 邀请key
var INVITESOURCE: string = "712790d9629c6dcea00e3f5bff60132b"
// * 是否使用推送信息
var USESUBSCRIBEMESSAGE: boolean = true
// * 激励视频
var VIDEOAD = 'adunit-31b05acadbd2a1d1'
// * textarea能输入的最大字数
var TEXTAREAMAXLENGTH: number = 500
// * 应用内是否存在下载APP引流
var DOWNLOADAPP: boolean = true
// * 是否支持高德地图api
var USEGAODEMAPAPI: boolean = true
// * 是否显示加工友微信号
var SHOWWEIXINNUMBER: boolean = true
// * 是否显示关注公众号
var SHOWOFFICIALACCOUNT: boolean = true
// * 详情是否需要替换微信关键词
var REPLACEWEIXINTEXT: boolean = false

// ! 百度系小程序  上传图片 JSON解析数据
var ISPARSEUPLOADIMG: boolean = true
// * 是否显示邀请好友链接
var SHOWINVITEUSER: boolean = true


module.exports = {
  PAGETITLE,
  TOKEN,
  SERIES,
  UNITID,
  INVITESOURCE,
  USESUBSCRIBEMESSAGE,
  VIDEOAD,
  TEXTAREAMAXLENGTH,
  DOWNLOADAPP,
  USEGAODEMAPAPI,
  ISPARSEUPLOADIMG,
  SHOWWEIXINNUMBER,
  SHOWOFFICIALACCOUNT,
  SHOWINVITEUSER,
  REPLACEWEIXINTEXT
}