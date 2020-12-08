import Taro, { Config, useDidShow } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { SERVERPHONE, BAIDUSERIES, SERIES, SHOWSERVERPHONE } from '../../../config'
import './index.scss'


export default function DetailInfoPage() {
  useDidShow(()=>{
    if(SERIES == BAIDUSERIES){
      Taro.setPageInfo({
        title: '鱼泡网,建筑招聘,建筑人才,工地招工,施工队找活,工程信息',
        description: '鱼泡网每日发布建筑招聘、建筑人才、工地招工、工地招人、找施工队等工程信息，方便建筑工人找活、找项目，为建筑劳务公司寻找优秀的建筑工人、建筑人才、建筑班组、施工队。',
        keywords: '鱼泡网,建筑招聘,建筑人才,工地招工,施工队找活,工程信息'
      })
    }
  })
  return(
    <View className="anti-fraudbox">
      <View className='anti-fraud-item'>
        <View className='anti-fraud-title'>招工防骗指南</View>
        <View className='anti-fraud-tips'>切忌先给对方转账汇款</View>
        <View className='anti-fraud-info'>凡以资金不足，让您向其对方账户转账汇款，或以微信等联系方式给您发送车票样品等行为，基本属于诈骗惯用手段，请您小心应对，认真识别，或咨询鱼泡客服，谨防上当受骗。</View>
        <View className='anti-fraud-tips'>认真核对身份信息，保存聊天依据</View>
        <View className='anti-fraud-info'> 1、与对方联系时，请认真核对对方名片信息，例如姓名、民族、籍贯、身份证号码等个人信息，了解其应聘工种及相关技能信息。必要时可与对方视频聊天，以保证信息真实性，并录制视频，以此为据。</View>
        <View className='anti-fraud-info'>2、新招工人到工地务工时，需认真查看身份证信息，并作记录，以确保工地工人身份信息真实有效，且有证可查。</View>
        <View className='anti-fraud-tips'>工地诈骗应对方法</View>
        <View className='anti-fraud-info'>1、如遇工地诈骗，请及时与当地警方取得联系，向警方提供聊天依据及对方身份证信息等证据。</View>
        <View className='anti-fraud-info'>2、及时联系鱼泡客服，平台将对其个人信息进行审核入库，并依法提供相关个人资料信息，配合警方，依法提供各项所需证据，严厉打击违法犯罪行为，将犯罪份子绳之以法。</View>
        <View className='anti-fraud-other'>在鱼泡平台中，工友们都抱着真实招工、诚信找活的态度，但防范之心不可无，如有疑问，请到鱼泡网实名查询系统查找您所需要了解的信息，如对方未进行实名认证，请您谨慎联系，谨防上当受骗。</View>
      </View>

      <View className='anti-fraud-item'>
        <View className='anti-fraud-title'>找活防骗指南</View>
        <View className='anti-fraud-tips'>请勿相信高于市场行情的“高薪”招工，谨防传销</View>
        <View className='anti-fraud-info'>1、与对方联系时，开启通话录音，保存聊天依据。</View>
        <View className='anti-fraud-info'>2、认真核对对方招工详情信息，了解薪酬、福利待遇等详细情况，约定好薪酬、工作内容等事项，保留聊天记录。</View>
        <View className='anti-fraud-info'>3、认真询问招工要求、工地现场照片及建设单位等工地信息，以供参考及了解项目的实际情况。</View>
        <View className='anti-fraud-info'>4、在查看招工信息确实无误后，为有效保障您的合法权益，建议您与招工方签订用工协议，明确薪酬、用工时间、工作内容及工地制度等约定条款，并签字盖章。</View>
        <View className='anti-fraud-info'>5、如遇恶意拖欠工人工资情况，请及时报请劳动监察大队处理，利用法律有效保护自身合法权益。</View>
        <View className='anti-fraud-other'>祝广大鱼泡工友顺利找到自己理想的工作和合适的工人。</View>
        {SHOWSERVERPHONE &&
          <View className='anti-fraud-other'>如有疑问，敬请拨打鱼泡客服咨询热线： <Text onClick={() => { Taro.makePhoneCall({ phoneNumber: SERVERPHONE }) }}>{SERVERPHONE}</Text></View>
        }
      </View>

    </View>
  )
}
DetailInfoPage.config = {
  navigationBarTitleText: '鱼泡网-防骗指南',
} as Config