import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import pagesMapRecruitIndex from './pages/map/recruit/index';
import pagesRecruitPublishIndex from './pages/recruit/publish/index';
import pagesUserauthIndex from './pages/userauth/index';
import pagesIntegralExpendIndex from './pages/integral/expend/index';
import pagesIntegralOfficialIndex from './pages/integral/official/index';
import pagesIntegralTempIndex from './pages/integral/temp/index';
import pagesIntegralSourceIndex from './pages/integral/source/index';
import pagesUsedListsIndex from './pages/used/lists/index';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Provider } from "@tarojs/taro-redux-rn";

import configStore from "./store/index";
import appStyleSheet from "./app_styles";
var _styleSheet = appStyleSheet;
const store = configStore();
let App = class App extends Component {
  constructor() {
    super(...arguments);
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                  
                <TCRNProvider>
                  <RootStack />
                </TCRNProvider>
                </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

};
App.config = {
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  navigateToMiniProgramAppIdList: ['wxca0eab5cd5fe6a7c', 'wxd348efa56021e8d0', 'wxbfab0a324f27b966', 'wx33194c327f50b99d', 'wx0ae31bf0edad4390', 'wx7cea45b9ebdf87ac', 'wx3faf62a5edbb1513', 'wxbac40ffffdee0573' //招标采购
  ]
};
const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex], ['pages/used/lists/index', pagesUsedListsIndex], ['pages/integral/source/index', pagesIntegralSourceIndex], ['pages/integral/temp/index', pagesIntegralTempIndex], ['pages/integral/official/index', pagesIntegralOfficialIndex], ['pages/integral/expend/index', pagesIntegralExpendIndex], ['pages/userauth/index', pagesUserauthIndex], ['pages/recruit/publish/index', pagesRecruitPublishIndex], ['pages/map/recruit/index', pagesMapRecruitIndex]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;