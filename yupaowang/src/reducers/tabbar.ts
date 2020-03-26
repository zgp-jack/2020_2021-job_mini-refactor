import { HOME, RECRUIT, RESUME, MEMBER } from '../constants/tabbar'

export interface Menu {
  title: string,
  defaultImg: string,
  activeImg: string,
  id: string,
  msg?: boolean
}

export interface DEFAULT_MENUS_TYPE {
  list: Menu[],
  key: 'home' | 'recruit' | 'resume' | 'member' | ''
}

const DEFAULT_MENUS: DEFAULT_MENUS_TYPE = {
  list: [
    {
      title: '首页',
      defaultImg: 'http://cdn.yupao.com/newyupao/images/footer-home.png',
      activeImg: 'http://cdn.yupao.com/newyupao/images/footer-home-active.png',
      id: HOME
    },
    {
      title: '招工',
      defaultImg: 'http://cdn.yupao.com/newyupao/images/footer-zg.png',
      activeImg: 'http://cdn.yupao.com/newyupao/images/footer-zg-active.png',
      id: RECRUIT
    },
    {
      title: '找活',
      defaultImg: 'http://cdn.yupao.com/newyupao/images/footer-zh.png',
      activeImg: 'http://cdn.yupao.com/newyupao/images/footer-zh-active.png',
      id: RESUME
    },
    {
      title: '会员',
      defaultImg: 'http://cdn.yupao.com/newyupao/images/footer-member.png',
      activeImg: 'http://cdn.yupao.com/newyupao/images/footer-member-active.png',
      id: MEMBER,
      msg: true
    }
  ],
  key: ''
}

interface ACTION {
  type: 'home' | 'recruit' | 'resume' | 'member'
}

export default function tabbar(state: DEFAULT_MENUS_TYPE = DEFAULT_MENUS, action: ACTION) {
  let newMenus = JSON.parse(JSON.stringify(DEFAULT_MENUS))
  newMenus.list.find(item => {
    if (item.id === action.type) {
      newMenus.key = item.id
    }
  })
  switch (action.type) {
    case HOME:
      return newMenus
    case RECRUIT:
      return newMenus
    case RESUME:
      return newMenus
    case MEMBER:
      return newMenus
    default:
      return state
  }
}