import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import './index.scss'

interface PROPS {
  display: boolean //是否跳转到页面授权
  handleModal: (e: number) => void,
  data:string,
}
export default function CheckingTop({ display, handleModal,data }: PROPS) {
  return (
    <View>
      {display &&
        <View className='tabber-complaintModal'>
          <View className='tabber-complaintModal-content'>
            <View className='tabber-complaintModal-content-title '>提示</View>
            <View className='tabber-complaintModal-content-box'>{data}</View>
            <View className='tabber-complaintModal-content-footer'>
            <View className='tabber-complaintModal-content-footer-left' onClick={() => handleModal(0)}>知道了</View>
            <View className='tabber-complaintModal-content-footer-right' onClick={() => handleModal(1)}>查看工人简历</View>
            </View>
          </View>
        </View>
      }
    </View>
  )
}
