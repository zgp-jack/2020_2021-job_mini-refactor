// ? 全局不动配置项 只做导出不做修改
// ! 根据不同编译脚本打包不同小程序
// * 当前打包版本
export const MINIVERSION = MINI;
export const MINICONFIG = require(`./minis/${MINIVERSION}.ts`);
// * 全局请求接口域名
// * 测试站
export const DEVREQUESTURL = 'https://miniapi.zhaogong.vrtbbs.com/';
// * 预发布
export const PREREQUESTURL = 'http://miniapi.kkbbi.com/';
// * 正式站
export const PROREQUESTURL = 'https://newyupaomini.54xiaoshuo.com/';
// * 当前程序使用的请求地址
export const REQUESTURL = PROREQUESTURL;
// * 默认上传图片
export const UPLOADIMGURL = `${PROREQUESTURL}index/upload/`;
// * 阿里云CDN域名
export const ALIYUNCDN = 'http://cdn.yupao.com';
// * 阿里云小程序普通路径
export const ALIYUNCDNMINIIMG = '/miniprogram/images/';
// * 阿里云CDN图片域名
export const IMGCDNURL = "http://cdn.yupao.com/miniprogram/images/";
// * 公司默认客服电话
export const SERVERPHONE = '400-838-1888';
// * 小程序当前版本号
export const VERSION = '1.0.5';
// * 高德地区key
export const MAPKEY = '20f12aae660c04de86f993d3eff590a0';
// * 最大缓存历史城市数量
export const MAXCACHECITYNUM = 3;
// * 用户发布 选择地址 历史记录 最大数量
export const UserPublishAreaHistoryMaxNum = 10;
// * 小程序tabbar msg统计 定时器请求间隔 60 秒
export const MemberMsgTimerInterval = 60000;
// * 发布技能证书最大数量
export const CertificateMaxNum = 3;
// * 发布技能证书图片最大数量
export const CertificateImgMaxNum = 3;
// * 找活人员信息标签最大数量
export const ResumeMemberLabelsMaxNum = 3;
// * 发布项目经验最大数量
export const ProjectListMaxNum = 5;
// * 找活项目经验图片最大数量
export const ProjectImgMaxNum = 6;
// ! 页面内常用路径配置
// * 首页
export const INDEXPATH = '/pages/index/index';
// * 发布招工页面
export const PUBLISHRECRUIT = '/pages/recruit/publish/index';
// * 发布找活页面
export const PUBLISHRESUME = '/pages/resume/publish/index';
// * 发布二手交易
export const PUBLISHUSED = '/pages/used/publish/index';
// * 实名认证页面
export const REALNAMEPATH = '/pages/realname/index';
// * 授权登录页面
export const AUTHPATH = '/pages/userauth/index';
// * 微信外验证码登录
export const CODEAUTHPATH = '/pages/login/index';
// * 已发布招工列表
export const PUBLISHEDRECRUIT = '/pages/published/recruit/index';
// * 下载App
export const DownloadApp = 'https://android.myapp.com/myapp/detail.htm?apkName=io.dcloud.H576E6CC7&amp;ADTAG=mobile';
// * 邀请好友
export const INVITEPATH = '/pages/static/invite/index';
// ! 所有小程序列表
// 百度
export const BAIDU = 'baidu';
// 抖音
export const DOUYIN = 'douyin';
// ! 以下内容为每个小程序独立配置  
// * page-title-global
export const PAGETITLE = MINICONFIG.PAGETITLE;
// * 小程序token 
export const TOKEN = MINICONFIG.TOKEN;
// * 小程序广告unitid
export const UNITID = MINICONFIG.UNITID;
// * 小程序邀请key
export const INVITESOURCE = MINICONFIG.INVITESOURCE;
// * 是否使用推送信息
export const USESUBSCRIBEMESSAGE = MINICONFIG.USESUBSCRIBEMESSAGE;
// * 是否能分享
export const ISCANSHARE = MINICONFIG.ISCANSHARE;
// * textarea能输入的最大字数
export const TEXTAREAMAXLENGTH = MINICONFIG.TEXTAREAMAXLENGTH;
// * 应用内是否使用下载APP引流
export const DOWNLOADAPP = MINICONFIG.DOWNLOADAPP;