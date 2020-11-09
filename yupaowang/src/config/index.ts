// ? 全局不动配置项 只做导出不做修改

// ! 根据不同编译脚本打包不同小程序
// * 当前打包版本
export const MINIVERSION: string = MINI
export const MINICONFIG = require(`./minis/${MINIVERSION}.ts`)

// * 全局请求接口域名
// * 测试站
export const DEVREQUESTURL: string = 'https://miniapi.zhaogong.vrtbbs.com/'
// * 正式站
export const PROREQUESTURL: string = 'https://newyupaomini.54xiaoshuo.com/'
// * 当前测试
export const REQUESTURL: string = DEVREQUESTURL;
// * 默认上传图片
export const UPLOADIMGURL: string = PROREQUESTURL + 'index/upload/'
// * 阿里云CDN域名
export const ALIYUNCDN: string = 'http://cdn.yupao.com'
// * 阿里云小程序普通路径
export const ALIYUNCDNMINIIMG: string = '/miniprogram/images/'
// * 阿里云CDN图片域名
export const IMGCDNURL: string = ALIYUNCDN + ALIYUNCDNMINIIMG
// * 公司默认客服电话
export const SERVERPHONE: string = '400-838-1888'
// * 小程序当前版本号
export const VERSION: string = '1.0.5'
// * 高德地区key
export const MAPKEY: string = '20f12aae660c04de86f993d3eff590a0'
// * 最大缓存历史城市数量
export const MAXCACHECITYNUM: number = 3
// * 用户发布 选择地址 历史记录 最大数量
export const UserPublishAreaHistoryMaxNum: number = 10
// * 小程序tabbar msg统计 定时器请求间隔 1分钟
export const MemberMsgTimerInterval: number = 1000 * 60
// * 发布技能证书最大数量
export const CertificateMaxNum: number = 3
// * 发布技能证书图片最大数量
export const CertificateImgMaxNum: number = 3
// * 发布项目经验最大数量
export const ProjectListMaxNum: number = 5
// * 找活项目经验图片最大数量
export const ProjectImgMaxNum: number = 6

// ! 页面内常用路径配置
// * 实名认证页面
export const REALNAMEPATH: string = '/pages/realname/index'
// * 授权登录页面
export const AUTHPATH: string = '/pages/userauth/index'
// * 微信外验证码登录
export const CODEAUTHPATH: string = '/pages/login/index'
// * 下载App
export const DownloadApp: string = 'https://android.myapp.com/myapp/detail.htm?apkName=io.dcloud.H576E6CC7&amp;ADTAG=mobile'

// ! 所有小程序列表
// 百度
export const BAIDU: string = 'baidu'
// 抖音
export const DOUYIN: string = 'douyin'


// ! 以下内容为每个小程序独立配置
// * page-title-global
export const PAGETITLE: string = MINICONFIG.PAGETITLE
// * 小程序token
export const TOKEN: string = MINICONFIG.TOKEN
// * 小程序广告unitid
export const UNITID: string = MINICONFIG.UNITID
// * 小程序邀请key
export const INVITESOURCE: string = MINICONFIG.INVITESOURCE
// * 是否使用推送信息
export const USESUBSCRIBEMESSAGE: boolean = MINICONFIG.USESUBSCRIBEMESSAGE
