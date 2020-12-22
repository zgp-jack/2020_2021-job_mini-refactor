import Taro from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import './index.scss'
import { ALIYUNCDN, IMGCDNURL } from '../../../config'
import { FleamarketList } from '../../../utils/request/index.d'

interface Props {
  data: FleamarketList[][],
  bottom?: boolean,
  hasMore?: boolean
}

export default function UsedList({ data = [], bottom = true, hasMore = true }: Props){
  // 用户查看二手交易详情
  const userLookUsedInfo = (id: string)=> {
    Taro.navigateTo({
      url: `/pages/used/info/index?id=${id}&used=1`
    })
  }
  return (
    <View className='usedlist-container' style={ bottom ? '' : 'padding-bottom:0' }>
      {data.length && data.map((item)=>(
        <Block>
          {item.map((d)=>(
            <View className='usedlist-item' onClick={()=>userLookUsedInfo(d.id)}>
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
      ))
    }
    {
        data && data[0] && data[0].length && !hasMore && <View className='showMore'>没有更多内容了</View>
    }
    { data && data[0] && !data[0].length && <View className='lists-nodata'>
        <Image src={`${ALIYUNCDN}/miniprogram/images/nodata.png`}></Image>
        <Text>暂无相关内容</Text>
      </View>
    }
    </View>
  )
}