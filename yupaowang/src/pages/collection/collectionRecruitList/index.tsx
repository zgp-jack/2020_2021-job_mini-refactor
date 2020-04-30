import Taro from '@tarojs/taro'
import { View, Text, Image, Block, Button } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import './index.scss'
import { CollectionRecruitListDataList } from '../../../utils/request/index.d'

interface PROPS {
  data: CollectionRecruitListDataList[],
  handlerClick : Function,
}

export default function CollectionRecruitList({ data, handlerClick }: PROPS) {
  return (
    <View className='recruit-lists-container'>
      {data&&data.map((item) => (
        <Block>
          {
            // item.map((d) => (
            <View className='recruit-list-item'>
              {/* {item.top && <Image className='list-toprecruit-img' src={IMGCDNURL + 'newlist-jobzd.png'} />} */}
              {item.is_end == '2' && <Image className='recruit-findend-img' src={IMGCDNURL + 'newlist-jobfindend.png'} />}
              <View className='recruit-list-header'>
                <View className='recruit-list-title overwords'>{item.title}</View>
                {/* {item.top && <Text className='recruit-list-settop'>我要置顶</Text>} */}
              </View>
              <View className='recruit-list-body'>
                <Image className='recruit-list-user' src={item.header_img} />
                <View className='recruit-list-body-content'>
                  <View className='recruit-body-header'>
                    <Text className='recruit-list-username'>{item.user_name}</Text>
                    {item.is_end !== '2' && <Image className='recruit-list-finding' src={IMGCDNURL + 'newlist-jobfinding.png'} />}
                  </View>
                  <View className='recruit-list-words'>
                    <View className='recruit-words-text'>{item.detail}</View>
                  </View>
                </View>
              </View>
              <View className='recruit-list-footer'>
                {/* <Image className='recruit-list-loc' src={IMGCDNURL + 'newlist-jobposi.png'} /> */}
                <View className='recruit-list-loctxt overwords'>{item.time}</View>
                <Button size='mini' className='recruit-list-button' onClick={()=>{handlerClick(item.id)}}>取消收藏</Button>
              </View>
            </View>
          // )
          // )
          }
        </Block>
      )
      )}
    </View>
  )
}