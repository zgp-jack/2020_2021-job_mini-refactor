import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import './index.scss'

interface ConditionData {
  id: string,
  text: string
}
interface ConditionProps {
  data: ConditionData[]
}

export default function Condition({ data }: ConditionProps ){
  return (
    <View className='recruit-condition-box'>
      {data.map((item)=>(
        <View className='recruit-condition-item' key={ item.id }>
          <View className='recruit-condition-content overwords'>
          { item.text }
          <Image className='recruit-condition-select' src={IMGCDNURL + 'select.png'} />
          </View>
        </View>
      ))}
    </View>
  )
}