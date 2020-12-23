import Taro, { useState, useEffect, Config, useDidShow, useRouter, RouterInfo } from '@tarojs/taro'
import { View, Text, Image, Block, ScrollView } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'
import HeaderList from './config'
import { userGetPublishedRecruitLists, userChangeRecruitStatus, jobUpdateTopStatusAction, getFreeIssueConfig, getNotRemind } from '../../../utils/request'
import { UserPublishedRecruitListDataItem } from '../../../utils/request/index.d'
import classnames from 'classnames'
import { User } from '../../../reducers/user'
import Nodata from '../../../components/nodata'
import Tabbar from '../../../components/tabbar'
import Auth from '../../../components/auth'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import PromptBox from '../../../components/prompt_box/index'
import Msg from '../../../utils/msg'
import { textData } from '../../../components/prompt_box/index'
import { freeIssueRule } from '../../../utils/request/index.d'
import useJobView from '../../../hooks/init_job_view/index'
import './index.scss'

export interface searchDataType {
  type: string,
  mid: number,
  uuid: string,
  page: number
}

export default function PublishedRecruit(){
  const { initJobView } = useJobView()
  // 获取路由参数
  const router: RouterInfo = useRouter()
  // 发布招工id
  const jobId: string = router.params.id
  // 发布招工提示信息类型member_first:用户第一次发布day_first：用户当日第一次发布 
  // day_last：用户当日最后一条免费发布
  // ' '：用户未登录或不是上方任何一种情况，不弹窗
  const type: string = router.params.type
  // 提示文本内容
  const text: string = router.params.text
  // 当前高亮key
  const [id, setId] = useState<string>(HeaderList[0].id)
  // 是否还有下一页
  const [more, setMore] = useState<boolean>(true)
  // 数据加载中
  const [loading, setLoading] = useState<boolean>(false)
  // 是否下拉刷新
  const [refresh, setRefresh] = useState<boolean>(false)
  // 已发布招工列表
  const [lists, setLists] = useState<UserPublishedRecruitListDataItem[]>([])
  // 子组件提示框的显示属性
  const [prompt, setPrompt] = useState<any>({})
  // 是否展示提示框
  const [showModel, setShowModel] = useState<boolean>(false)
  // 请求状态
  const [reqStatus, setReqStatus] = useState<boolean>(true)
  // 获取用户信息
  const user = useSelector<any, User>(state => state.User)
  const [searchData, setSearchData] = useState<searchDataType>({
    mid: user.userId,
    uuid: user.uuid,
    page: 1,
    type: id
  })

  useEffect(() => {
    if (type == 'member_first' && lists.length > 0 && reqStatus) {
      let itemIndex: number = lists.findIndex(item => item.id == jobId)
      let item = lists[itemIndex]
      setReqStatus(false)
      userRouteJump(`/pages/marketing_page/index?defaultTopArea=${item.area_id}&job_id=${item.id}`)
    }
  },[lists])
  // 根据type是否显示弹窗
  useEffect(() => {
    if (type == 'day_first'){
      // 发布成功提示框
      const promptData = {
        showClose: false,
        showTitle: true,
        cancelText: '暂不提醒',
        confirmText: '去增加曝光率',
        titleText: '温馨提示',
        content: [{ des: text}]
      }
      setPrompt(promptData)
      setShowModel(true)
    } else if (type == 'day_last'){
      // 发布成功提示框
      getFreeConfig()
    }
  },[])
  // 当redux更新后 ， 立即更新用户数据
  useEffect(() => {
    if (!user.login || loading) return
    setSearchData({ ...searchData, mid: user.userId, uuid: user.uuid })
  }, [user])
  
  // 返回刷新页面
  useDidShow(()=>{
    setSearchData({ ...searchData, page: 1 })
  })
  // 加载数据类别
  const getPublishedRecruitLists = () =>  {
    if (!user.login) return
    setLoading(true)
    userGetPublishedRecruitLists(searchData)
    .then(res => {
      if(res.errcode == 'ok'){
        let list = res.data.lists
        let len = list.length
        let page = searchData.page
        setMore(len ? true : false)
        if (page === 1) {
          setLists(list)
        } else {
          setLists([...lists, ...list])
        }
        if (refresh) {
          setRefresh(false)
          Taro.stopPullDownRefresh()
          Taro.hideNavigationBarLoading()
        }
        setLoading(false)
      }else{
        Msg(res.errmsg)
      }
    })
    .catch(()=>{
      if (refresh) {
        setRefresh(false)
        Taro.stopPullDownRefresh()
        Taro.hideNavigationBarLoading()
      }
      setLoading(false)
    })
  }

  // 用户切换招工状态列表
  const userChangePublishedItem = (key: string) => {
    setId(key)
    setSearchData({...searchData,type: key, page: 1})
  }

  useEffect(()=>{
    if (!user.login || loading) return
    getPublishedRecruitLists()
  }, [searchData])

  // 加载下一页
  const getNextPageData = () => {
    if (!more || loading) return
    setSearchData({ ...searchData, page: searchData.page + 1 })
  }

  // 刷新当前页
  const reloadPage = () => {
    Taro.showNavigationBarLoading()
    setRefresh(true)
    setSearchData({ ...searchData, page: 1 })
  }

  // 停止招工
  const userStopRecruit = (id: string,i: number) => {
    userChangeRecruitStatus(id)
    .then(res=>{
      Msg(res.errmsg)
      if(res.errcode == 'ok'){
        let bakLists = lists
        bakLists[i].is_check = res.data.is_check.toString()
        bakLists[i].is_end = res.data.is_end.toString()
        if (bakLists[i].top_data){
          bakLists[i].top_data.is_top = res.data.top.is_top.toString()
        } 
        setLists([...bakLists])
      }
    })
  }
  // 跳转
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 取消置顶 jobUpdateTopStatusAction
  const handlCancel = (id:string, index: number)=>{
    const params = {
      infoId: id,
      status:0,
    }
    jobUpdateTopStatusAction(params).then(res=>{
      detailUserSetTopAction(res, index)
    })
  }

  // 已有置顶取消置顶操作  未置顶 但未到期 相同判断
  const detailUserSetTopAction = (res,index: number) => {
    if (res.errcode === 'ok') {
      Msg(res.errmsg)
      let mylists = JSON.parse(JSON.stringify(lists))
      mylists[index].top_data.is_top = res.data.top.is_top
      setLists(mylists)
    } else if (res.errcode === 'auth_forbid') {
      // 去实名
      Taro.showModal({
        title: '温馨提示',
        content: res.errmsg,
        cancelText: '取消',
        confirmText: '去实名',
        success(res) {
          if (res.confirm) {
            let backtwo = "backtwo"
            Taro.navigateTo({
              url: `/pages/realname/index?backtwo=${backtwo}`
            })
          }
        }
      })
      return
    } else if (res.errcode == "member_forbid") {
      Taro.showModal({
        title: '温馨提示',
        content: res.errmsg,
        cancelText: "取消",
        confirmText: "联系客服",
        success(res) {
          if (res.confirm) {
            Taro.makePhoneCall({
              phoneNumber: SERVERPHONE,
            })
          }
        }
      })
      return;
    } else {
      Taro.showToast({
        title: res.errmsg,
        icon: "none",
        duration: 1500
      })
    }
  }

  //置顶
  const handleTopping = (item, index: number)=>{
    if (item.is_end === '2') {
      Taro.showModal({
        title: '提示',
        content: '已招到状态不能进行置顶操作，请修改招工状态',
        showCancel: false
      })
      return false;
    }
    if (item.top == '1'){
      let now = new Date().getTime() / 1000 // 当前时间戳
      let data = item.top_data; //置顶数据
      let endtime = data.end_time //置顶到期时间
      let toping = data.is_top // 是否置顶状态
      let showTime = now > parseInt(endtime) ? true : false; // 置顶是否过期 已过期
      if (showTime) { //如果置顶过期
        userRouteJump(`/pages/newtopping/recRang/index?defaultTopArea=${item.area_id}&job_id=${item.id}`)
        return false
      }
      const params = {
        infoId: item.id,
        status: toping == '0' ? '1' : "0"
      }
      jobUpdateTopStatusAction(params).then(res => {
        detailUserSetTopAction(res, index)
      })
    }else{
      userRouteJump(`/pages/newtopping/recRang/index?defaultTopArea=${item.area_id}&job_id=${item.id}`)
    }
    
  }

  // *提示框处理
  // 处理发布招工请求返回值中data提示框文字显示内容
  const handleText = (text: string, rules: freeIssueRule[]) => {
    let texts: textData[] = []
    for (let i = 0; i < rules.length; i++) {
      if (i === 0) {
        texts.push({ text: text.substring(i, rules[i].start), color: "#000000" })
      } else {
        texts.push({ text: text.substring(rules[i - 1].start + rules[i - 1].length, rules[i].start), color: "#000000" })
      }
      texts.push({
        text: text.substring(rules[i].start, rules[i].start + rules[i].length),
        color: rules[i].value,
      })
      if (i === rules.length - 1) {
        texts.push({ text: text.substring(rules[i].start + rules[i].length), color: "#000000" })
      }
    }
    const promptData = {
      showClose: false,
      showTitle: true,
      cancelText: '不了，谢谢',
      confirmText: '去发布',
      titleText: '提示',
      content: [{ text: texts }]
    }
    setPrompt(promptData)
    setShowModel(true)
  }

  // 获取后台配置的免费发布招工条数配置信息
  const getFreeConfig = () => {
    getFreeIssueConfig().then(res => {
      if (res.errcode == "ok") {
        if (res.data.type == "paid_issue") {
          handleText(res.data.tips.text, res.data.tips.rules)
        }
      } else if (res.errcode == "fail") {
        Msg(res.errmsg)
      }
    })
  }

  // 用户当天第一免费发布弹窗的 暂不提醒 按钮请求
  const notRemindReq = () => {
    getNotRemind()
  }

  // 当天免费的最后一条发布招工信息弹窗，点击 去发布 去发布招工
  const confirm = () =>{
    // 当天第一次免费发布
    if (type == 'day_first'){
      if (jobId) {//根据jobId获取对应招工详细信息
        let itemIndex: number = lists.findIndex(item => item.id == jobId)
        let item = lists[itemIndex]
        userRouteJump(`/pages/newtopping/recRang/index?defaultTopArea=${item.area_id}&job_id=${item.id}`)
      }
      setShowModel(false)
    } else if (type == 'day_last'){
      // 当天最后一次免费发布
      initJobView()
      setShowModel(false)
    } 
  }

  // 当天免费的最后一条发布招工信息弹窗，点击 不了谢谢 关闭弹窗
  const cancel = () => {
    if (type == 'day_first') {
      notRemindReq()
      setShowModel(false)
    } else if (type == 'day_last') {
      setShowModel(false)
    }
  }
  const close = () => {
    setShowModel(false)
  }

  return (
    <Block>
      <Auth />
      {showModel ? <PromptBox
        showClose={prompt.showClose}
        showTitle={prompt.showTitle}
        cancelText={prompt.cancelText}
        confirmText={prompt.confirmText}
        titleText={prompt.titleText}
        content={prompt.content}
        cancel={cancel}
        confirm={confirm}
        close={close}
      /> : ''}
      <View className='user-published-container'>
        <View className='user-published-header'>
          {HeaderList.map(item => (
            <View 
              onClick={()=>userChangePublishedItem(item.id)}
              className={classnames({
                'user-published-header-item': true,
                'user-published-header-item-active': id === item.id
              })}
            >
            <Text className='published-item-title'>{ item.title }</Text>
            </View>
          ))}
        </View>
        <ScrollView 
          className='user-published-body'
          scrollY
          refresherEnabled
          refresherTriggered={refresh}
          onRefresherRefresh={() => reloadPage()}
          lowerThreshold={200}
          onScrollToLower={() => getNextPageData()} 
        >
          {lists.map((item,index)=>(
            <View className='user-published-item' key={item.id}>
              {item.is_check == '1' && <Image className='published-status-img' src={IMGCDNURL + 'published-recruit-checking.png'} />}
              {item.is_check == '0' && <Image className='published-status-img' src={IMGCDNURL + 'published-recruit-nopass.png'} /> }
              {item.is_end == '2' && item.is_check == '2' && <Image className='published-status-img' src={IMGCDNURL + 'published-recruit-end.png'} /> }
              <View onClick={() => userRouteJump(`/pages/detail/info/index?id=${item.id}&type=1`)}>
              <View className='user-published-title overwords'>{ item.title }</View>
              <View className='user-published-content'>{ item.detail }</View>
              </View>
              <View className='user-published-footer'>
                {item.is_check == '1' && item.top == '1' &&
                  <View className='published-ischeking-img-box'>
                    <Image className='published-checking-img' src={ IMGCDNURL + 'published-info.png' } />
                    提示：人工审核中，该信息仅自己可见。
                  </View>
                }
                {/* {item.is_check == '1' && !(item.top && item.top_data.is_top == '1')&& 
                <View className='published-ischeking'>
                  <View className='user-published-footer-item' onClick={() => userRouteJump(`/pages/newtopping/recRang/index?defaultTopArea=${item.area_id}&job_id=${item.id}`)}>预约置顶</View>
                </View>
                } */}
                {(item.is_check == '2' || (item.is_check == '1' && item.top == '0' ) )&& item.is_end != '2' && item.is_check == '1' && (item.top && item.top_data.is_top == '1' ? '' :<View>
                  <View className='published-ischeking-subscribe'>
                    <View className='user-published-footer-item' onClick={() => userRouteJump(`/pages/newtopping/recRang/index?defaultTopArea=${item.area_id}&job_id=${item.id}&subscribe=1`)}>预约置顶</View>
                  </View>
                </View>)}
                {item.is_check != '1' && <View className='user-published-footer-item' onClick={() => userRouteJump(`/pages/recruit/publish/index?id=${item.id}`)}>修改</View>}
                {item.is_check == '2' &&
                <Block >
                  <View className='user-published-footer-item' onClick={() => userStopRecruit(item.id, index)}>{item.is_end == '2'?'重新招工':'停止招工'}</View>
                {/* // 置顶按钮 */}
                {item.is_end != '2' && 
                  <View>
                      {item.top && item.top_data && item.top_data.is_top == '1' ?
                          <View className='user-published-footer-item' onClick={()=>handlCancel(item.id, index)}>取消置顶</View> :
                          <View className='user-published-footer-item' onClick={()=>handleTopping(item, index)}>我要置顶</View>
                      }
                  </View>
                }
                  {/* <View className='user-published-footer-item' onClick={() => userRouteJump(`/pages/topping/index?id=${item.id}&type=1`)}>修改置顶</View> */}
                </Block>
                }
              </View>
              {/* // 置顶信息 */}
              {item.top && item.top_data && item.top_data.is_top == '1' &&
                <View className='published-top-box'>
                <View className='published-top-time'>到期时间：<Text className='published-top-time-color'>{item.top_data.time_str}</Text></View>
                <View className='published-top-cancel' onClick={() => userRouteJump(`/pages/newtopping/recRang/index?job_id=${item.id}`)}>修改置顶</View>
              </View>
              }
            </View>
          ))}
          {!more && searchData.page > 1 && <View className='showMore'>没有更多数据了</View>}
          {!lists.length &&
          <View className='user-published-nodata'>
            <Nodata />
          </View>
          }
        </ScrollView>
      </View>
      <Tabbar />
    </Block>
  )
}


PublishedRecruit.config = {
  navigationBarTitleText: '我的招工信息',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config