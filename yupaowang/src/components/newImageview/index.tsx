import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { RecruitImageModel } from '../../pages/recruit/index.d'
import { IMGCDNURL } from '../../config';
import './index.scss'

interface PROPS {
  images: RecruitImageModel[],
  max: number,
  userUploadImg?: (i:number) => void,
  userDelImg?: (i:number) => void
}

export default function NewImageview({ images, userUploadImg, max, userDelImg }: PROPS){
  let bool: boolean = userDelImg ? true : false
  return (
    <View className='uploads-imgs-lists'>
      {/* 图片列表展示 */}
      {images&&images.map((item, index) => (
        <View className='uploads-img-item' key={ index + 'a' } onClick={() => userUploadImg&&userUploadImg(index)}>
          <View className='uploads-img-imgbox'>
            <Image className='uploads-item-img' src={item.httpurl} />
            {bool && <View onClick={(e) => { e.stopPropagation(); userDelImg && userDelImg(index) }} className='uploads-img-del'><Image className='uploads-img-del-icon' src={`${IMGCDNURL}new-published-close-icon.png`}/></View>}
          </View>
        </View>
      ))}
      {/* 图片新增按钮展示 */}
      { max > images.length
        &&
        <View className='uploads-img-item'>
          <Image onClick={() => userUploadImg && userUploadImg(-1)} src={`${IMGCDNURL}yc/upload-img.png`} className='uploads-img-imgbox-active'/>
        </View>
      }
    </View>
  )
}

NewImageview.options = {
  addGlobalClass: true
}