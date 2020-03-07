import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { RecruitImageModel } from '../../pages/recruit/index.d'
import './index.scss'

interface PROPS {
  images: RecruitImageModel[],
  max: number,
  userUploadImg?: (i:number) => void
}

export default function ImageView({ images, userUploadImg, max }: PROPS){
  return (
    <View className='uploads-imgs-lists clearfix'>
      {/* 图片列表展示 */}
      {images&&images.map((item, index) => (
        <View className='uploads-img-item' onClick={() => userUploadImg&&userUploadImg(index)}>
          <View className='uploads-img-imgbox'>
            <Image className='uploads-item-img' src={item.httpurl} />
          </View>
        </View>
      ))}
      {/* 图片新增按钮展示 */}
      { max > images.length
        &&
        <View className='uploads-img-item'>
          <View
            className='uploads-img-imgbox uploads-img-imgbox-active'
            onClick={() => userUploadImg&&userUploadImg(-1)}
          ></View>
        </View>
      }
    </View>
  )
}