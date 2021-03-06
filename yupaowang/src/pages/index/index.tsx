import Taro, { Config, useState, usePullDownRefresh, useEffect, useRouter, RouterInfo, useDidShow, useShareAppMessage } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import { HOME, RECRUIT, RESUME, MEMBER, typeInTabbar } from '../../constants/tabbar'
import IndexTabbarConfig from '../../config/pages/index'
import { useSelector, useDispatch } from '@tarojs/redux'
import { changeTabbar } from '../../actions/tabbar'
import Home from '../home'
import { INDEXPATH, SERIES, BAIDUSERIES } from '../../config'
import { getUserShareMessage } from '../../utils/helper'
import Recruit from '../recruit/lists'
import Resume from '../resume/lists'
import Member from '../member'
import { REFID } from '../../config/store'
import './index.scss'

export default function Index(){

  const dispatch = useDispatch()

  // 初始化页面参数
  const router: RouterInfo = useRouter()
  // type 类型(会重置tabbar)，默认招工列表 refId 邀请人id 谁分享出去就是谁 classify 工种参数 area 地区参数 listtype 类型 keywords关键词
  const { type = RECRUIT, refId = '', classify = '', area = '', listtype = '', keywords = '' } = router.params
  // 获取当前tabbar高亮值
  const tabKey: string = useSelector<any, string>(state=>state.tabbar.key)
  // 获取当前的用户id
  const userId: number = useSelector<any, number>(state=>state.User.userId)
  // 标记是否触发下拉刷新
  const [pulldown, setPulldown] = useState<number>(0)
  // 会员中心是当前页面的一个组件 所以没有判断页面显示的功能 这里传值给会员中心促使改变刷新数据
  const [showIndex, setShowIndex] = useState<number>(0)

  // 监听页面下拉刷新
  usePullDownRefresh(()=>{
    setPulldown(pulldown + 1)
  })

  // 设置当前页面分享
  useShareAppMessage(()=>{
    let path: string = `${INDEXPATH}?type=${tabKey}`
    return {
      ...getUserShareMessage(),
      path: userId ? `${path}&refId=${userId}` : path
    }
  })

  // 当页面显示的 时候 触发
  useDidShow(()=>{
    // 显示的时候重置当前标题
    if(tabKey){
      Taro.setNavigationBarTitle({ title: IndexTabbarConfig[tabKey].navigationBarTitleText })
    }
    // 由于index容纳了home/recruit/resume/member 4个页面，在需要使用当前页面展示的时候监听当前字段
    setShowIndex(showIndex + 1)
    console.log(type,classify,area,listtype,keywords)
    // 设置百度seo相关信息
    if (SERIES == BAIDUSERIES) {
      Taro.setPageInfo({
        title: '鱼泡网-建筑招聘|建筑人才|工地招工|施工队找活|工程信息',
        description: '鱼泡网每日发布建筑招聘、建筑人才、工地招工、工地招人、找施工队等工程信息，方便建筑工人找活、找项目，为建筑劳务公司寻找优秀的建筑工人、建筑人才、建筑班组、施工队。',
        keywords: '鱼泡网,建筑招聘,建筑人才,工地招工,施工队找活,工程信息'
      })
    }
  })

  // 进入页面的时候 ，如果有邀请人，我们将邀请人id存入缓存中， 等待新用户授权时使用
  useEffect(()=>{
    if (refId) Taro.setStorageSync(REFID,refId)
  },[refId])

  // 初始化底部显示页面
  useEffect(() => {
    if (typeInTabbar(type)){
      dispatch(changeTabbar(type))
    }else{
      dispatch(changeTabbar(RECRUIT))
    }
  }, [type])

  // 初始化页面配置信息
  useEffect(()=>{
    if (!tabKey) return
    let data = IndexTabbarConfig[tabKey]
    Taro.setNavigationBarTitle({ title: data.navigationBarTitleText })
    Taro.setNavigationBarColor({
      backgroundColor: data.navigationBarBackgroundColor || '#0099ff',
      frontColor: '#ffffff'
    })
  },[tabKey])

  return (
    <View>
      {tabKey === HOME && <Home homeIndex={showIndex}  />}
      {tabKey === RECRUIT && <Recruit />}
      {tabKey === RESUME && <Resume />}
      {tabKey === MEMBER && <Member memberIndex={showIndex} /> }
      <Tabbar notredirect />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '',
  enablePullDownRefresh: false,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config
