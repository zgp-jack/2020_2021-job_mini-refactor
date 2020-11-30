import Taro from "@tarojs/taro-h5";
import { Component } from 'react';
import { Provider } from "@tarojs/redux-h5";

import configStore from "./store/index";
import './app.scss';
import Nerv from 'nervjs';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const store = configStore();
class App extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {}
  componentDidShow(e) {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
        path: '/pages/index/index',
        componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
        isIndex: true
      }, {
        path: '/pages/userauth/index',
        componentLoader: () => import( /* webpackChunkName: "userauth_index" */'./pages/userauth/index'),
        isIndex: false
      }, {
        path: '/pages/recruit/publish/index',
        componentLoader: () => import( /* webpackChunkName: "recruit_publish_index" */'./pages/recruit/publish/index'),
        isIndex: false
      }, {
        path: '/pages/used/lists/index',
        componentLoader: () => import( /* webpackChunkName: "used_lists_index" */'./pages/used/lists/index'),
        isIndex: false
      }, {
        path: '/pages/map/recruit/index',
        componentLoader: () => import( /* webpackChunkName: "map_recruit_index" */'./pages/map/recruit/index'),
        isIndex: false
      }, {
        path: '/pages/map/resume/index',
        componentLoader: () => import( /* webpackChunkName: "map_resume_index" */'./pages/map/resume/index'),
        isIndex: false
      }, {
        path: '/pages/used/publish/index',
        componentLoader: () => import( /* webpackChunkName: "used_publish_index" */'./pages/used/publish/index'),
        isIndex: false
      }, {
        path: '/pages/used/info/index',
        componentLoader: () => import( /* webpackChunkName: "used_info_index" */'./pages/used/info/index'),
        isIndex: false
      }, {
        path: '/pages/static/invite/index',
        componentLoader: () => import( /* webpackChunkName: "static_invite_index" */'./pages/static/invite/index'),
        isIndex: false
      }, {
        path: '/pages/static/notice/index',
        componentLoader: () => import( /* webpackChunkName: "static_notice_index" */'./pages/static/notice/index'),
        isIndex: false
      }, {
        path: '/pages/getintegral/index',
        componentLoader: () => import( /* webpackChunkName: "getintegral_index" */'./pages/getintegral/index'),
        isIndex: false
      }, {
        path: '/pages/integral/source/index',
        componentLoader: () => import( /* webpackChunkName: "integral_source_index" */'./pages/integral/source/index'),
        isIndex: false
      }, {
        path: '/pages/integral/temp/index',
        componentLoader: () => import( /* webpackChunkName: "integral_temp_index" */'./pages/integral/temp/index'),
        isIndex: false
      }, {
        path: '/pages/integral/official/index',
        componentLoader: () => import( /* webpackChunkName: "integral_official_index" */'./pages/integral/official/index'),
        isIndex: false
      }, {
        path: '/pages/integral/expend/index',
        componentLoader: () => import( /* webpackChunkName: "integral_expend_index" */'./pages/integral/expend/index'),
        isIndex: false
      }, {
        path: '/pages/recharge/index',
        componentLoader: () => import( /* webpackChunkName: "recharge_index" */'./pages/recharge/index'),
        isIndex: false
      }, {
        path: '/pages/realname/index',
        componentLoader: () => import( /* webpackChunkName: "realname_index" */'./pages/realname/index'),
        isIndex: false
      }, {
        path: '/pages/map/realname/index',
        componentLoader: () => import( /* webpackChunkName: "map_realname_index" */'./pages/map/realname/index'),
        isIndex: false
      }, {
        path: '/pages/userinfo/info/index',
        componentLoader: () => import( /* webpackChunkName: "userinfo_info_index" */'./pages/userinfo/info/index'),
        isIndex: false
      }, {
        path: '/pages/userinfo/add/index',
        componentLoader: () => import( /* webpackChunkName: "userinfo_add_index" */'./pages/userinfo/add/index'),
        isIndex: false
      }, {
        path: '/pages/userinfo/phone/index',
        componentLoader: () => import( /* webpackChunkName: "userinfo_phone_index" */'./pages/userinfo/phone/index'),
        isIndex: false
      }, {
        path: '/pages/userinfo/updatePass/index',
        componentLoader: () => import( /* webpackChunkName: "userinfo_updatePass_index" */'./pages/userinfo/updatePass/index'),
        isIndex: false
      }, {
        path: '/pages/published/recruit/index',
        componentLoader: () => import( /* webpackChunkName: "published_recruit_index" */'./pages/published/recruit/index'),
        isIndex: false
      }, {
        path: '/pages/published/used/index',
        componentLoader: () => import( /* webpackChunkName: "published_used_index" */'./pages/published/used/index'),
        isIndex: false
      }, {
        path: '/pages/collection/index',
        componentLoader: () => import( /* webpackChunkName: "collection_index" */'./pages/collection/index'),
        isIndex: false
      }, {
        path: '/pages/help/index',
        componentLoader: () => import( /* webpackChunkName: "help_index" */'./pages/help/index'),
        isIndex: false
      }, {
        path: '/pages/feedbacklist/index',
        componentLoader: () => import( /* webpackChunkName: "feedbacklist_index" */'./pages/feedbacklist/index'),
        isIndex: false
      }, {
        path: '/pages/feedback/index',
        componentLoader: () => import( /* webpackChunkName: "feedback_index" */'./pages/feedback/index'),
        isIndex: false
      }, {
        path: '/pages/information/mymessage/index',
        componentLoader: () => import( /* webpackChunkName: "information_mymessage_index" */'./pages/information/mymessage/index'),
        isIndex: false
      }, {
        path: '/pages/information/system/index',
        componentLoader: () => import( /* webpackChunkName: "information_system_index" */'./pages/information/system/index'),
        isIndex: false
      }, {
        path: '/pages/integral/tabber/index',
        componentLoader: () => import( /* webpackChunkName: "integral_tabber_index" */'./pages/integral/tabber/index'),
        isIndex: false
      }, {
        path: '/pages/detail/info/index',
        componentLoader: () => import( /* webpackChunkName: "detail_info_index" */'./pages/detail/info/index'),
        isIndex: false
      }, {
        path: '/pages/topping/index',
        componentLoader: () => import( /* webpackChunkName: "topping_index" */'./pages/topping/index'),
        isIndex: false
      }, {
        path: '/pages/topping/distruction/index',
        componentLoader: () => import( /* webpackChunkName: "topping_distruction_index" */'./pages/topping/distruction/index'),
        isIndex: false
      }, {
        path: '/pages/resume/publish/index',
        componentLoader: () => import( /* webpackChunkName: "resume_publish_index" */'./pages/resume/publish/index'),
        isIndex: false
      }, {
        path: '/pages/resume/add_info/index',
        componentLoader: () => import( /* webpackChunkName: "resume_add_info_index" */'./pages/resume/add_info/index'),
        isIndex: false
      }, {
        path: '/pages/resume/add_member/index',
        componentLoader: () => import( /* webpackChunkName: "resume_add_member_index" */'./pages/resume/add_member/index'),
        isIndex: false
      }, {
        path: '/pages/resume/add_skill/index',
        componentLoader: () => import( /* webpackChunkName: "resume_add_skill_index" */'./pages/resume/add_skill/index'),
        isIndex: false
      }, {
        path: '/pages/resume/add_project/index',
        componentLoader: () => import( /* webpackChunkName: "resume_add_project_index" */'./pages/resume/add_project/index'),
        isIndex: false
      }, {
        path: '/pages/resume/projects/index',
        componentLoader: () => import( /* webpackChunkName: "resume_projects_index" */'./pages/resume/projects/index'),
        isIndex: false
      }, {
        path: '/pages/resume/skills/index',
        componentLoader: () => import( /* webpackChunkName: "resume_skills_index" */'./pages/resume/skills/index'),
        isIndex: false
      }, {
        path: '/pages/rank-rules/index',
        componentLoader: () => import( /* webpackChunkName: "rank-rules_index" */'./pages/rank-rules/index'),
        isIndex: false
      }, {
        path: '/pages/turntable/index',
        componentLoader: () => import( /* webpackChunkName: "turntable_index" */'./pages/turntable/index'),
        isIndex: false
      }, {
        path: '/pages/resume/detail/index',
        componentLoader: () => import( /* webpackChunkName: "resume_detail_index" */'./pages/resume/detail/index'),
        isIndex: false
      }, {
        path: '/pages/resume/newPreview/index',
        componentLoader: () => import( /* webpackChunkName: "resume_newPreview_index" */'./pages/resume/newPreview/index'),
        isIndex: false
      }, {
        path: '/pages/resume/preview/index',
        componentLoader: () => import( /* webpackChunkName: "resume_preview_index" */'./pages/resume/preview/index'),
        isIndex: false
      }, {
        path: '/pages/login/index',
        componentLoader: () => import( /* webpackChunkName: "login_index" */'./pages/login/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/checkauth/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_checkauth_index" */'./subpackage/pages/checkauth/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/about/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_about_index" */'./subpackage/pages/about/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/report/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_report_index" */'./subpackage/pages/report/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/download/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_download_index" */'./subpackage/pages/download/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/ranking/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_ranking_index" */'./subpackage/pages/ranking/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/course/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_course_index" */'./subpackage/pages/course/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/anti-fraud/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_anti-fraud_index" */'./subpackage/pages/anti-fraud/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/projects/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_projects_index" */'./subpackage/pages/projects/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/skills/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_skills_index" */'./subpackage/pages/skills/index'),
        isIndex: false
      }, {
        path: '/subpackage/pages/news/index',
        componentLoader: () => import( /* webpackChunkName: "subpackage_news_index" */'./subpackage/pages/news/index'),
        isIndex: false
      }]} customRoutes={{}} />
                
        </Provider>;
  }
  config = {
    pages: ["/pages/index/index", "/pages/userauth/index", "/pages/recruit/publish/index", "/pages/used/lists/index", "/pages/map/recruit/index", "/pages/map/resume/index", "/pages/used/publish/index", "/pages/used/info/index", "/pages/static/invite/index", "/pages/static/notice/index", "/pages/getintegral/index", "/pages/integral/source/index", "/pages/integral/temp/index", "/pages/integral/official/index", "/pages/integral/expend/index", "/pages/recharge/index", "/pages/realname/index", "/pages/map/realname/index", "/pages/userinfo/info/index", "/pages/userinfo/add/index", "/pages/userinfo/phone/index", "/pages/userinfo/updatePass/index", "/pages/published/recruit/index", "/pages/published/used/index", "/pages/collection/index", "/pages/help/index", "/pages/feedbacklist/index", "/pages/feedback/index", "/pages/information/mymessage/index", "/pages/information/system/index", "/pages/integral/tabber/index", "/pages/detail/info/index", "/pages/topping/index", "/pages/topping/distruction/index",
    // 'pages/topping/recruit/index',//置顶找活范围
    "/pages/resume/publish/index", "/pages/resume/add_info/index", "/pages/resume/add_member/index", "/pages/resume/add_skill/index", "/pages/resume/add_project/index", "/pages/resume/projects/index", "/pages/resume/skills/index", "/pages/rank-rules/index", "/pages/turntable/index", "/pages/resume/detail/index", "/pages/resume/newPreview/index", "/pages/resume/preview/index", "/pages/login/index"],
    subPackages: [{
      root: 'subpackage/pages',
      pages: ["/checkauth/index", "/about/index", "/report/index", "/download/index", "/ranking/index", "/course/index", "/anti-fraud/index", "/projects/index", "/skills/index", "/news/index"]
    }],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    navigateToMiniProgramAppIdList: ['wxca0eab5cd5fe6a7c', 'wxd348efa56021e8d0', 'wxbfab0a324f27b966', 'wx33194c327f50b99d', 'wx0ae31bf0edad4390', 'wx7cea45b9ebdf87ac', 'wx3faf62a5edbb1513', 'wxbac40ffffdee0573' //招标采购
    ],
    "permission": {
      "scope.userLocation": {
        "desc": "获取您的位置将会为您推荐该地区最新信息"
      }
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

}
Nerv.render(<App />, document.getElementById('app'));