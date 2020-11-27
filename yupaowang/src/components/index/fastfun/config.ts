import { IMGCDNURL, INVITEPATH, SHOWINVITEUSER } from '../../../config'

interface FastfunItem {
  url: string,
  img: string,
  text: string,
  show: boolean
}

const Config: FastfunItem[] = [
  {
    url: INVITEPATH,
    img: IMGCDNURL + 'yqhy.png',
    text: '邀请好友',
    show: SHOWINVITEUSER
  },
  {
    url: '/subpackage/pages/checkauth/index',
    img: IMGCDNURL + 'smcx.png',
    text: '实名查询',
    show: true
  },
  {
    url: '/subpackage/pages/news/index',
    img: IMGCDNURL + 'index-newzjxm.png',
    text: '鱼泡动态',
    show: true
  }
]

export default Config