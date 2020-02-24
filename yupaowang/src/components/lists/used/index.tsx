import Taro from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import './index.scss'
import { IMGCDNURL } from '../../../config'
import { FleamarketList } from '../../../utils/request/index.d'

interface Props {
  data: FleamarketList[][],
  bottom?: boolean
}

export default function UsedList({ data, bottom = true }: Props){
  return (
    <View className='usedlist-container' style={ bottom ? '' : 'padding-bottom:0' }>
      {data.map((item)=>(
        <Block>
          {item.map((d)=>(
            <View className='usedlist-item'>
              <View className='usedlist-item-header'>
                <View className='usedlist-item-title overwords'>{ d.title }</View>
                <Text className='usedlist-item-time'>{ d.time }</Text>
              </View>
              <View className='usedlist-item-body'>
                <Image className='usedlist-item-user' src={ d.image } />
                <View className='usedlist-item-content'>
                  <View className='usedlist-content-item'>
                    <Image className='usedlist-content-item-img' src={IMGCDNURL + 'infoman.png'} />
                    <View className='usedlist-content-info'>联系人：{ d.user_name }</View>
                  </View>
                  <View className='usedlist-content-item'>
                    <Image className='usedlist-content-item-img' src={IMGCDNURL + 'posi.png'} />
                    <View className='usedlist-content-info'>{ d.show_address }</View>
                  </View>
                  <View className='usedlist-content-item'>
                    <Image className='usedlist-content-item-img' src={IMGCDNURL + 'status.png'} />
                    <View className='usedlist-content-info'>交易状态：<Text className='usedlist-content-status'>{ d.state_arr.state }</Text></View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </Block>
      ))}
    </View>
  )
}