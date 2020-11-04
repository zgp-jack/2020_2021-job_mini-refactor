import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

interface PROPS {
  data:string[],
}
export default function Imglist({data}: PROPS){
  // 需要预览的图片列表
  const imgs:string[] = [
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
  ]

  // 用户点击图片预览
  const userPreViewImg = () => {
    Taro.previewImage({
      current:data[0],
      urls: data
    })
  }

  return (
    <View className='imgslist-container'>
      {data.map((item,index) => (
        <Image className='imgslist-item' src={item} key={index+index} onClick={() => userPreViewImg()}/>
      ))}
    </View>
  )
}