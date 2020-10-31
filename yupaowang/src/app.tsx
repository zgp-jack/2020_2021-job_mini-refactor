import Taro, { Config } from '@tarojs/taro'
import { Component } from 'react'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'
import './app.scss'

const store = configStore()

class App extends Component {
  config: Config = {
    pages: [
      'pages/index/index', //首页
      'pages/userauth/index', //用户授权
      "pages/recruit/publish/index", //发布招工
      "pages/used/lists/index", //二手交易列表
      "pages/map/recruit/index", //发布招工地图
      "pages/map/resume/index", //发布找活地图
      "pages/used/publish/index", //发布二手交易
      "pages/used/info/index", //二手交易详情
      "pages/invite/index", //邀请好友
      "pages/getintegral/index", //获取积分
      "pages/integral/source/index", //积分来源记录
      "pages/integral/temp/index", //临时积分记录
      "pages/integral/official/index", //正式积分记录
      "pages/integral/expend/index", //积分消耗记录
      "pages/recharge/index", //用户充值页面
      "pages/realname/index", //用户实名认证
      "pages/map/realname/index", // 用户实名选择地址
      "pages/userinfo/info/index", // 用户修改资料
      "pages/userinfo/add/index", // 用户完善资料
      "pages/userinfo/phone/index", // 用户更换手机
      "pages/userinfo/updatePass/index",//修改密码
      "pages/published/recruit/index", // 已发布招工列表
      "pages/published/used/index", // 已发布二手交易
      "pages/collection/index", //收藏
      "pages/help/index", //帮助中心
      "pages/feedbacklist/index", //意见反馈列表
      "pages/feedback/index", //意见反馈
      "pages/static/invite/index", //新闻资讯
      "pages/query/index", //实名查询
      "pages/information/mymessage/index", //我的信息
      "pages/information/system/index", //我的信息详情
      'pages/integral/tabber/index', //积分来源顶部
      'pages/detail/info/index', //招工详情
      'pages/topping/index', //置顶
      'pages/topping/distruction/index',//置顶选择范围
      // 'pages/topping/recruit/index',//置顶找活范围
      'pages/resume/publish/index', //发布找活
      'pages/resume/detail/index', // 找活详情
      'pages/resume/skillList/index',//技能证书
      'pages/resume/projectList/index',//项目经验
      'pages/resume/addProject/index', //新增项目,
      'pages/resume/addSkill/index',//新增技能
      'pages/resume/basics/index',//基础信息
      'pages/resume/mine/index',//新增
      'pages/resume/recList/index', //更多招工信息
      'pages/resume/preview/index', // 预览
      'pages/resume/personInfo/index',//人员信息
      'pages/login/index',//用户登录
    ],
    subPackages: [
      {
        root: 'subpackage/pages',
        pages: [
          'checkauth/index',
          'about/index',//关于我们
          'report/index',//举报骗子
          'notice/index',//资讯详情
          'download/index',//下载app
          'ranking/index',//排名规则
          'course/index',//使用教程
          'anti-fraud/index', //防骗指南
        ]
      },
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    navigateToMiniProgramAppIdList: [
      'wxca0eab5cd5fe6a7c', //装修招工
      'wxd348efa56021e8d0', //焊工招聘
      'wxbfab0a324f27b966', //招聘司机
      'wx33194c327f50b99d', //工厂招人
      'wx0ae31bf0edad4390', //机械租赁
      'wx7cea45b9ebdf87ac', //在建项目
      'wx3faf62a5edbb1513', //工具商城
      'wxbac40ffffdee0573'  //招标采购
    ],
    "permission": {
      "scope.userLocation": {
        "desc": "获取您的位置将会为您推荐该地区最新信息"
      }
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store} >
        <Index />
      </Provider>
    )
  }
  
}

Taro.render(<App />, document.getElementById('app'))
