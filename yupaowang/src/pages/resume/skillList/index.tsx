import Taro, { Config, useState, useEffect, useRouter, useDidShow } from '@tarojs/taro'
import { View, Text, Image, Block, Button, Textarea } from '@tarojs/components'
import { resumeDetailAction, recommendListAction, resumesGetTelAcrion, resumeSupportAction, resumeCollectAction } from '../../../utils/request/index'
import WechatNotice from '../../../components/wechat'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { isVaildVal } from '../../../utils/v'
import Msg from '../../../utils/msg'
import { resumeDetailCertificates, resumeDetailProject, resumeDetailOperation, recommendListDataList } from '../../../utils/request/index.d'
import './index.scss'

export default function SkillList() {
  return (
    <View>1121</View>
  )
}
SkillList.config = {
  navigationBarTitleText: '技能证书',
} as Config