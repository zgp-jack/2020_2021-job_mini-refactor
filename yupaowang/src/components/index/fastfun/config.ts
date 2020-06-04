import { IMGCDNURL } from '../../../config'

interface FastfunItem {
  url: string,
  img: string,
  text: string
}

const Config: FastfunItem[] = [
  {
    url: '/pages/static/invite',
    img: IMGCDNURL + 'yqhy.png',
    text: '邀请好友'
  },
  {
    url: 'pages/query/query',
    img: IMGCDNURL + 'smcx.png',
    text: '实名查询'
  },
  {
    url: '/pages/static/invite/index',
    img: IMGCDNURL + 'index-newzjxm.png',
    text: '鱼泡动态'
  }
]

export default Config