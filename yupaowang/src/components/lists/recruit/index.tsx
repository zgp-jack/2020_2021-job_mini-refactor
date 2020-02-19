import Taro from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import './index.scss'
import { RecruitList } from '../../../utils/request/index.d'

interface PROPS {
  data: RecruitList[][]
}
//小程序的
export default function RecruitList({ data }: PROPS){
  
  return (
    <View className='recruit-lists-container'>
      {data.map((item)=>(
        <Block>
          {item.map((d) => (
            <View className='recruit-list-item'>
              {d.top && <Image className='list-toprecruit-img' src={IMGCDNURL + 'newlist-jobzd.png'} />}
              {d.is_end == 2 && <Image className='recruit-findend-img' src={IMGCDNURL + 'newlist-jobfindend.png'} /> }
              <View className='recruit-list-header'>
                <View className='recruit-list-title overwords'>{ d.title }</View>
                {d.top && <Text className='recruit-list-settop'>我要置顶</Text>}
              </View>
              <View className='recruit-list-body'>
                <Image className='recruit-list-user' src={ d.image } />
                <View className='recruit-list-body-content'>
                  <View className='recruit-body-header'>
                    <Text className='recruit-list-username'>{ d.user_name }</Text>
                    {d.is_end !== 2 && <Image className='recruit-list-finding' src={IMGCDNURL + 'newlist-jobfinding.png'} />}
                  </View>
                  <View className='recruit-list-words'>
                    <View className='recruit-words-text'>{ d.detail }</View>
                  </View>
                </View>
              </View>
              <View className='recruit-list-footer'>
                <Image className='recruit-list-loc' src={IMGCDNURL + 'newlist-jobposi.png'} />
                <View className='recruit-list-loctxt overwords'>{ d.show_address }</View>
                <Text className='recruit-list-time'>{ d.time }</Text>
              </View>
            </View>
            )
          )}
        </Block>
        )
      )}
    </View>
  )
}