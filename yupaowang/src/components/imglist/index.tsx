import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

interface PROPS {
  data:string[],
}
export default function Imglist({data}: PROPS){

  // 用户点击图片预览
  const userPreViewImg = (index: number) => {
    Taro.previewImage({
      current:data[index],
      urls: data
    })
  }

  return (
    <View className='imgslist-container'>
      {data && data.map((item,index) => (
        <Image className='imgslist-item' src={item} key={index+index} onClick={() => userPreViewImg(index)}/>
      ))}
    </View>
  )
}