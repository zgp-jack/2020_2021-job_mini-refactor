import Taro, { useRouter, RouterInfo, useState, Config, useShareAppMessage, useDidShow, login } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import WechatNotice from '../../../components/wechat'
import { getUsedInfo } from '../../../utils/request'
import { getUserShareMessage } from '../../../utils/helper'
import { ShowActionModal } from '../../../utils/msg'
import { REPLACEWEIXINTEXT, FILTERWEIXINREG, SERIES, BAIDUSERIES, MaxUsedInfoId } from '../../../config'
import { GetUsedInfoData } from '../../../utils/request/index.d'
import NologinBtm from '../../../components/nologin_btm';
import './index.scss'

export default function UsedInfo(){
  const router: RouterInfo = useRouter()
  // id为二手详情id used 因为百度收录问题， 当id>MaxUsedInfoId 时都会带used=1来保证最新资源收录
  const { id, used  } = router.params
  const [model, setModel] = useState<GetUsedInfoData>()
  // 设置用户分享信息
  useShareAppMessage(()=>{
    return {
      ...getUserShareMessage(),
      path: `/pages/used/info/index?id=${id}&more=1`
    }
  })
  // 初始化二手交易信息
  useDidShow(()=>{
    if (!used || (used != '1')){
      if (parseInt(id) > MaxUsedInfoId){
        Taro.redirectTo({
          url:  `/pages/detail/info/index?id=${id}&type=1`
        })
        return
      }
    }
    // 获取场景值
    getUsedInfo(id).then((data)=>{
      if(data.errcode == 'ok'){
        // 如果是百度系小程序，则直接设置seo等相关信息
        if (SERIES == BAIDUSERIES) {
          let keywords = data.data.showCateAttr.split('-').reverse().join('')
          let address = data.data.showAddress.split('-').join('')
          Taro.setPageInfo({
            title: `${data.data.title}-鱼泡网`,
            description: `${data.data.title}${data.data.detail}`,
            keywords: `${keywords},${data.data.title},${address}${keywords}`
          })
        }
        setModel(data.data)
      }else{
        ShowActionModal({
          msg: data.errmsg,
          success: () => {
            Taro.navigateBack()
          }
        })
      }
    }).catch(()=>{
      ShowActionModal({
        msg: '网络错误，获取失败',
        success: ()=> {
          Taro.navigateBack()
        }
      })
    })
  })

  // 用户拨打电话
  const userCallPhone = ()=> {
    if(!model) return
    if(model.is_end =='2') return
    Taro.makePhoneCall({
      phoneNumber: model.user_mobile
    })
  }


  // 查看更多招工信息
  const seeMoreUsed = () => {
    let pages = Taro.getCurrentPages()
    let listUrl = `/pages/used/lists/index`
    if (pages.length < 2) {
      Taro.reLaunch({ url: listUrl })
    } else {
      let routeUrl = `/${pages[pages.length - 2].route}`
      if (routeUrl == listUrl) {
        Taro.navigateBack()
      } else {
        Taro.reLaunch({ url: listUrl })
      }
    }
  }

  return (
    <View className='usedinfo-container'>
      <WechatNotice />
      <View className='usedinfo-body'>
        <View className='usedinfo-item clearfix'>
          <View className='usedinfo-item-title'>项目名称</View>
          <View className='usedinfo-item-text'>{model&&model.title}</View>
        </View>
        <View className='usedinfo-item clearfix'>
          <View className='usedinfo-item-title'>发布时间</View>
          <View className='usedinfo-item-text'>{model && model.time}</View>
        </View>
        <View className='usedinfo-item clearfix'>
          <View className='usedinfo-item-title'>联系人</View>
          <View className='usedinfo-item-text'>{model && model.user_name}</View>
        </View>
        <View className='usedinfo-item clearfix'>
          <View className='usedinfo-item-title'>电话号码</View>
          <View className='usedinfo-item-text' onClick={() => userCallPhone()}>{model && model.user_mobile}{model && model.is_end == '2' && <Text className='usedinfo-item-end'>({model.is_end_word})</Text>}</View>
        </View>
        <View className='usedinfo-report'>
          <Text className='usedinfo-report-text'>防骗警示</Text>：工作前，确认好<Text className='usedinfo-report-text'>对方身份、签好合同</Text>，招工、找活中<Text className='usedinfo-report-text'>不要交任何费用</Text>。工作中<Text className='usedinfo-report-text'>拍照</Text>、<Text className='usedinfo-report-text'>录视频</Text>留有证据！若双方发生<Text className='usedinfo-report-text'>经济纠纷</Text>，请<Text className='usedinfo-report-text'>立即报警</Text>或者前往<Text className='usedinfo-report-text'>劳动局投诉</Text>，鱼泡网可<Text className='usedinfo-report-text'>配合调查</Text>，但<Text className='usedinfo-report-text'>概不负责</Text>。如遇<Text className='usedinfo-report-text'>诈骗信息</Text>，请<Text className='usedinfo-report-text'>立即举报!</Text>
        </View>
        <View className='usedinfo-item clearfix'>
          <View className='usedinfo-item-title'>地区</View>
          <View className='usedinfo-item-text'>{model && model.showAddress}</View>
        </View>
        <View className='usedinfo-item clearfix'>
          <View className='usedinfo-item-title'>分类</View>
          <View className='usedinfo-item-text'>{model && model.showCateAttr}</View>
        </View>
        <View className='usedinfo-item clearfix'>
          <View className='usedinfo-item-title'>交易状态</View>
          <View className='usedinfo-item-text'>{model&&model.is_end_word}</View>
        </View>
      </View>
      <View className='usedinfo-body'>
        <View className='usedinfo-item usedinfo-full-item clearfix'>
          <View className='usedinfo-item-title'>要求/备注</View>
        </View>
        <View className='usedinfo-item usedinfo-full-item clearfix'>
          <View className='usedinfo-item-title'>{model ? (REPLACEWEIXINTEXT ? model.detail.replace(FILTERWEIXINREG,'') : model.detail) : '' }</View>
        </View>
      </View>
      {/* 返回首页 */}
      {/* <View className='see-recruit-list-btn' onClick={() => seeMoreUsed()}>查看更多二手交易信息</View>  */}
      {/* <NologinBtm text='查看更多二手交易信息' url={`/pages/used/lists/index`} type='' id={id} path={`pages/used/info/index?id=${id}&used=${used}`}/> */}
    </View>
  )
}

UsedInfo.config = {
  navigationBarTitleText: '二手交易详情'
} as Config