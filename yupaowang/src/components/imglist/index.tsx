import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default function Imglist(){

  // 需要预览的图片列表
  const imgs = [
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
    'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
  ]

  // 用户点击图片预览
  const userPreViewImg = () => {
    Taro.previewImage({
      current: 'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg',
      urls: imgs
    })
  }

  return (
    <View className='imgslist-container'>
      {imgs.map((item,index) => (
        <Image className='imgslist-item' src={item} key={index+index} onClick={() => userPreViewImg()}/>
      ))}
    </View>
  )
}