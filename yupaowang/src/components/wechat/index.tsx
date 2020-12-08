import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text, Block } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux'
import changeWechatNotice from '../../actions/wechat_notice'
import SUCCESS from '../../constants/wechat_notice'
import { WechatNoticeType } from '../../reducers/wechat_notice'
import { getWechatNotice } from '../../utils/request'
import { BannerNoticeNotice } from '../../utils/request/index.d'
import SwiperNews from '../../components/swiper/news'
import { IProps } from '../../components/swiper/index'
import { copyWechatNumber, userCallPhone } from '../../utils/helper'
import { SHOWWEIXINNUMBER, SHOWSERVERPHONE, SHOWLISTSNOTICE } from '../../config'
import classnames from 'classnames'
import './index.scss'

export default function WechatNotice(){

  const [swiperNews, setSwiperNews] = useState<IProps<BannerNoticeNotice>>({
    vertical: true,
    lists: []
  })

  const dispatch = useDispatch()
  const wechatNoticeData = useSelector<any, WechatNoticeType>(state => state.WechatNotice)

  // 获取微信号与公告列表
  useEffect(() => {
    if (wechatNoticeData.success){
      setSwiperNews({ ...swiperNews, lists: wechatNoticeData.notice })
      return
    }
    getWechatNotice().then(res => {
      res[SUCCESS] = SUCCESS
      let action = {
        type: SUCCESS,
        data: res
      }
      setSwiperNews({...swiperNews, lists: res.notice})
      dispatch(changeWechatNotice(action))
    })
  },[])

  // 复制微信号
  const userCopyWechatNumber = () => {
    copyWechatNumber(wechatNoticeData.wechat.number)
  }

  // 用户拨打电话
  const userCallPhoneAction = () => {
    userCallPhone(wechatNoticeData.phone)
  }

  return (
    <Block>
    { (SHOWSERVERPHONE || SHOWWEIXINNUMBER || SHOWLISTSNOTICE) && 
    <View className={classnames({
      'wechatinfo-container': true,
      'wechatinfo-container-notop': !SHOWWEIXINNUMBER && !SHOWSERVERPHONE
    })} >
      {(SHOWWEIXINNUMBER || SHOWSERVERPHONE) &&
      <View className='wechat-container'>
        {SHOWWEIXINNUMBER &&
        <Block>
        <Text className='wechat-addgroup'>加群：</Text>
        加工友微信号：
        <Text className='wechat-text' onClick={() => userCopyWechatNumber() }>{ wechatNoticeData.wechat.number }</Text>
        <Text className='wechat-btn' onClick={() => userCopyWechatNumber()} >复制</Text>
        拉你进招工找活群。
        </Block>}
        {SHOWSERVERPHONE &&
        <Block>
        客服电话：
        <Text className='wechat-text' onClick={() => userCallPhoneAction() } >{ wechatNoticeData.phone }</Text>
        <Text className='wechat-btn' onClick={() => userCallPhoneAction() } >呼叫</Text>
        </Block>}
      </View>}
      {SHOWLISTSNOTICE&&
      <View className={classnames({
        'notice-container': true,
        'notice-container-notop': !SHOWSERVERPHONE && !SHOWWEIXINNUMBER
      })}>
        <Text className='notice-tips'>鱼泡资讯：</Text>
        <View className='notice-lists'>
          <SwiperNews data={ swiperNews } />
        </View>
      </View>}
    </View>}
    </Block>
  )
}