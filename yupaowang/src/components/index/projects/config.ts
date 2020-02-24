import { IMGCDNURL } from '../../../config/index'

export interface FastBarItem {
  appid: string,
  url: string
  opentype: string,
  target: '' |'miniProgram',
  img: string,
  text: string,
  isout: boolean
}

const FastBarConfig: FastBarItem[] = [
  {
    appid: '',
    url: 'recruit',
    opentype: 'navigate',
    target: '',
    img: IMGCDNURL + 'a.png',
    text: '建筑招工',
    isout: false
  },
  {
    appid: 'wxca0eab5cd5fe6a7c',
    url: '',
    opentype: 'navigate',
    target: 'miniProgram',
    img: IMGCDNURL + 'b.png',
    text: '装修招工',
    isout: false
  },
  {
    appid: 'wxd348efa56021e8d0',
    url: '',
    opentype: 'navigate',
    target: 'miniProgram',
    img: IMGCDNURL + 'c.png',
    text: '焊工招聘',
    isout: false
  },
  {
    appid: 'wxbfab0a324f27b966',
    url: '',
    opentype: 'navigate',
    target: 'miniProgram',
    img: IMGCDNURL + 'driver.png',
    text: '招聘司机',
    isout: false
  },
  {
    appid: 'wx33194c327f50b99d',
    url: '',
    opentype: 'navigate',
    target: 'miniProgram',
    img: IMGCDNURL + 'd.png',
    text: '工厂招人',
    isout: false
  },
  {
    appid: 'wx0ae31bf0edad4390',
    url: '',
    opentype: 'navigate',
    target: 'miniProgram',
    img: IMGCDNURL + 'jx.png',
    text: '机械租赁',
    isout: false
  },
  {
    appid: 'wx7cea45b9ebdf87ac',
    url: '',
    opentype: 'navigate',
    target: 'miniProgram',
    img: IMGCDNURL + 'newindex-zjxmicon.png',
    text: '在建项目',
    isout: false
  },
  {
    appid: 'wx3faf62a5edbb1513',
    url: '',
    opentype: 'navigate',
    target: 'miniProgram',
    img: IMGCDNURL + 'ypsc.png',
    text: '工具商城',
    isout: false
  },
  {
    appid: '',
    url: '/pages/used/index',
    opentype: 'navigate',
    target: '',
    img: IMGCDNURL + 'es.png',
    text: '二手交易',
    isout: true
  },
  {
    appid: 'wxbac40ffffdee0573',
    url: '',
    opentype: 'navigate',
    target: 'miniProgram',
    img: IMGCDNURL + 'zbcg.png',
    text: '招标采购',
    isout: false
  }
]

export default FastBarConfig