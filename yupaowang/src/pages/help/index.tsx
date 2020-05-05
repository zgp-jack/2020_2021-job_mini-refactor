import Taro, { Config, useEffect, useState } from '@tarojs/taro'
import { View, Text, ScrollView, Button} from '@tarojs/components'
import { helpAction, feedbackAction } from '../../utils/request'
import { AtAccordion, AtList } from 'taro-ui'
import { heleDatalist } from '../../utils/request/index.d'
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
  // // 设置初始页面
  // const [init, setInit] = useState<InitType>({
  //   page: 1
  // })
  // 用户数据
  const [userData,setUserData] = useState<UserDataType>({
    phone: '',
    username: '',
  }) 
  // 是否能下啦加载更多
  const [isDown,setIsDown] = useState<boolean>(true);
  // 请求数据
  // 列表数据
  useEffect(() => {
    helpAction(initPage.page).then(res =>{
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
  const handleShow = (id,e)=>{
    const newData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < newData.item.length; i++) {
      if (id == newData.item[i].id) {
        newData.item[i].isShow = e;
      } else {
        if (e) {
          newData.item[i].isShow = !e;
        } else {
          newData.item[i].isShow = e;
        }
      }
    }
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
  return (
    <View className='help-content'>
      <ScrollView
        className='recruit-lists-containerbox'
        scrollY
        lowerThreshold={200}
        refresherEnabled
        refresherTriggered={refresh}
        // onRefresherRefresh={() => pullDownAction()}
        onScrollToLower={() => getNextPageData()}
      >
        <View style={{ height: '10px' }}></View>
      {data.item.map(item => (
        <AtAccordion
          icon={{ value: 'help', color: '#09f', size: '15'}}
          // icon={`${apiImgUrl}new-ucenter-question.png`}
          open={item.isShow}
          onClick={(e) => { handleShow(item.id, e) }}
          title={item.question}
        >
          <AtList hasBorder={false}>
            <Text className="help-text">{item.answer}</Text>
          </AtList>
        </AtAccordion>
      ))}
        {!setIsDown && <View className="help-noData">没有更多数据了</View>}
        <View style={{ height: '50px' }}></View>
      </ScrollView>
      <View className="help-button" onClick={() => userRouteJump(`/pages/feedback/index?username=${userData.username}&phone=${userData.phone}`)}><Button>意见反馈</Button></View>
    </View>
  )
}

Help.config = {
  navigationBarTitleText: '帮助中心',
} as Config