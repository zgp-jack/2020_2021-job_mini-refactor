import { HOME, RECRUIT, RESUME, MEMBER } from '../constants/tabbar';
import { ALIYUNCDN, IMGCDNURL } from "../config/index";
const DEFAULT_MENUS = {
  list: [{
    title: '首页',
    defaultImg: ALIYUNCDN + '/newyupao/images/footer-home.png',
    activeImg: ALIYUNCDN + '/newyupao/images/footer-home-active.png',
    id: HOME
  }, {
    title: '招工',
    defaultImg: ALIYUNCDN + '/newyupao/images/footer-zg.png',
    activeImg: ALIYUNCDN + '/newyupao/images/footer-zg-active.png',
    id: RECRUIT
  }, {
    title: '发布',
    defaultImg: IMGCDNURL + 'tabbar-publish-icon.png',
    activeImg: IMGCDNURL + 'tabbar-publish-icon.png',
    id: '',
    click: 'openPublishMenu'
  }, {
    title: '找活',
    defaultImg: ALIYUNCDN + '/newyupao/images/footer-zh.png',
    activeImg: ALIYUNCDN + '/newyupao/images/footer-zh-active.png',
    id: RESUME
  }, {
    title: '会员',
    defaultImg: ALIYUNCDN + '/newyupao/images/footer-member.png',
    activeImg: ALIYUNCDN + '/newyupao/images/footer-member-active.png',
    id: MEMBER,
    msg: true
  }],
  key: ''
};
export default function tabbar(state = DEFAULT_MENUS, action) {
  let newMenus = JSON.parse(JSON.stringify(DEFAULT_MENUS));
  newMenus.list.find(item => {
    if (item.id === action.type) {
      newMenus.key = item.id;
    }
  });
  switch (action.type) {
    case HOME:
      return newMenus;
    case RECRUIT:
      return newMenus;
    case RESUME:
      return newMenus;
    case MEMBER:
      return newMenus;
    default:
      return state;
  }
}