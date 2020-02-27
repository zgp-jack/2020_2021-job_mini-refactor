import Taro, { Config, useState, usePullDownRefresh, useEffect, useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import { HOME, RECRUIT, RESUME, MEMBER, typeInTabbar } from '../../constants/tabbar'
import IndexTabbarConfig from '../../config/pages/index'
import { useSelector, useDispatch } from '@tarojs/redux'
import { changeTabbar } from '../../actions/tabbar'
import Home from '../home'
import Recruit from '../recruit'
import Resume from '../resume'
import Member from '../member'
import './index.scss'

export default function Index(){

  const dispatch = useDispatch()

  // 初始化页面参数
  const router = useRouter()
  const { type } = router.params
  // 获取当前tabbar高亮值
  const tabKey: string = useSelector<any, string>(state=>state.tabbar.key)
  // 标记是否触发下拉刷新
  const [pulldown, setPulldown] = useState<number>(0)

  // 监听页面下拉刷新
  usePullDownRefresh(()=>{
    setPulldown(pulldown + 1)
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
      {tabKey === MEMBER && <Member /> }
      <Tabbar isredirect={false} />
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
