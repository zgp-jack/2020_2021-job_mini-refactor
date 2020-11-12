import Taro, { Config, useState, usePullDownRefresh, useEffect, useRouter, RouterInfo, useDidShow } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import { HOME, RECRUIT, RESUME, MEMBER, typeInTabbar } from '../../constants/tabbar'
import IndexTabbarConfig from '../../config/pages/index'
import { useSelector, useDispatch } from '@tarojs/redux'
import { changeTabbar } from '../../actions/tabbar'
import Home from '../home'
import Recruit from '../recruit/lists'
import Resume from '../resume/lists'
import Member from '../member'
import './index.scss'

export default function Index(){

  const dispatch = useDispatch()

  // 初始化页面参数
  const router: RouterInfo = useRouter()
  const { type = RECRUIT } = router.params
  // 获取当前tabbar高亮值
  const tabKey: string = useSelector<any, string>(state=>state.tabbar.key)
  // 标记是否触发下拉刷新
  const [pulldown, setPulldown] = useState<number>(0)
  // 会员中心是当前页面的一个组件 所以没有判断页面显示的功能 这里传值给会员中心促使改变刷新数据
  const [showIndex, setShowIndex] = useState<number>(0)

  // 监听页面下拉刷新
  usePullDownRefresh(()=>{
    setPulldown(pulldown + 1)
  })

  // 当页面显示的 时候 触发
  useDidShow(()=>{
    setShowIndex(showIndex+1)
  })

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
      {tabKey === HOME && <Home />}
      {tabKey === RECRUIT && <Recruit />}
      {tabKey === RESUME && <Resume />}
      {tabKey === MEMBER && <Member memberIndex={showIndex} /> }
      <Tabbar notredirect />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config
