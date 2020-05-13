import Taro, { Config, useEffect, useState } from '@tarojs/taro'
import { View, Text, ScrollView} from '@tarojs/components'
import { helpAction, feedbackAction } from '../../utils/request'
import { AtAccordion, AtList } from 'taro-ui'
import { heleDatalist } from '../../utils/request/index.d'
import Nodata from '../../components/nodata'
import { isIos } from '../../utils/v'
import './index.scss'

export interface InitPageType {
  page:number
}
export interface DataType {
  item: heleDatalist[]
}
export interface InitType {
  page : number
}
export interface UserDataType {
  phone: string,
  username: string,
}
export default function Help() {
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // 设置默认页面
  const [initPage, setinitPage] = useState<InitPageType>({
    page: 1
  })
  const [data, setData] = useState<DataType>({
    item:[],
  })
  // 用户数据
  const [userData,setUserData] = useState<UserDataType>({
    phone: '',
    username: '',
  }) 
  // 是否能下啦加载更多
  const [isDown,setIsDown] = useState<boolean>(true);
  // 判断是否是ios
  const [ios, setIos] = useState<boolean>(false)
  // 请求数据
  // 列表数据
  useEffect(() => {
    // 判断是安卓还是苹果
    setIos(isIos())
    let terminal_type = ios ? 'ios' : 'android';
    helpAction(initPage.page, terminal_type).then(res =>{
      Taro.hideNavigationBarLoading()
      for(let i =0;i<res.lists.length;i++){
        res.lists[i].isShow = false;
        res.lists[i].id = Math.random();
      }
      if (initPage.page === 1) {
        setData({ item: [...res.lists] })
      }else{
        setData({ item: [...data.item, ...res.lists] });
      }
      if (refresh) setRefresh(false)
      if(res.lists.length ===0){
        setIsDown(false)
      }
    })
  },[initPage])
  // 用户信息
  useEffect(() => {
    feedbackAction(1).then(res =>{
      setUserData(res.memberInfo);
    })
  },[])
  // 开关
  const handleShow = (id:number|undefined)=>{
    const newData = JSON.parse(JSON.stringify(data));
    newData.item.forEach((v: heleDatalist) => {
      let flag: boolean = v.id === id && !v.isShow
      v.isShow = flag ? true : false
    })
    setData(newData);
  }
  // * 触底加载下一页
  const getNextPageData = () => {
    if (!isDown) return;
    Taro.showNavigationBarLoading()
    setinitPage({ ...initPage, page: initPage.page + 1 })
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // * 监听下拉刷新
  const pullDownAction = () => {
    setRefresh(true)
    setIsDown(true)
    setinitPage({ page: 1 })
  }
  return (
    <View className='help-content'>
      {!data.item.length && <Nodata />}
      <ScrollView
        className='recruit-lists-containerbox'
        scrollY
        lowerThreshold={200}
        refresherEnabled
        refresherTriggered={refresh}
        onRefresherRefresh={() => pullDownAction()}
        onScrollToLower={() => getNextPageData()}
      >
        <View className='topNoneBox'></View>
          {data.item.map(item => (
            <AtAccordion
              icon={{ value: 'help', color: '#09f', size: '15'}}
              key={item.id}
              open={item.isShow}
              onClick={() => { handleShow(item.id) }}
              title={item.question}
            >
              <AtList hasBorder={false}>
                <Text className='help-text'>{item.answer}</Text>
              </AtList>
            </AtAccordion>
          ))}
        {!isDown && data.item.length && <View className='help-noData'>没有更多数据了</View>}
        <View className='BootomNoneBox'></View>
      </ScrollView>
      <View className='help-button-box' onClick={() => userRouteJump(`/pages/feedback/index?username=${userData.username}&phone=${userData.phone}`)}><Text className='help-button'>意见反馈</Text></View>
    </View>
  )
}

Help.config = {
  navigationBarTitleText: '帮助中心',
} as Config