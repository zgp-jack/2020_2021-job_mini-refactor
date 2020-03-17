import Taro, { Config, Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'
import './app.scss'

const store = configStore()

class App extends Component {

  config: Config = {
    pages: [
      'pages/index/index', //首页
      'pages/used/lists/index', //二手交易
      'pages/integral/source/index', //积分来源记录
      'pages/integral/temp/index', //积分临时记录
      'pages/integral/official/index', //积分正式记录
      'pages/integral/expend/index', //积分消耗记录
      'pages/userauth/index', //用户授权
      'pages/recruit/publish/index', //发布招工信息
      'pages/map/recruit/index', //发布招工地图
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
