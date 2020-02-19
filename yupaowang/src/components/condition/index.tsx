import Taro, { useState } from '@tarojs/taro'
import { View, Image, Block } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import { AtDrawer } from 'taro-ui'
import './index.scss'

interface ConditionData {
  id: string,
  text: string
}
interface ConditionProps {
  data: ConditionData[]
}

export default function Condition({ data }: ConditionProps ){

  // * 当前展开项id
  const [current, setCurrent] = useState<string>('')

  // * 点击选项展开内容
  const conditionItemClick = (id)=> {
    setCurrent(id)
  }

  // * 关闭抽屉
  const closeDrawer = ()=> {
    setCurrent('')
  }

  return (
    <Block>
      <View className='recruit-condition-box'>
        {data&&data.map((item)=>(
          <View className='recruit-condition-item' key={item.id} onClick={() => conditionItemClick(item.id)}>
            <View className='recruit-condition-content overwords'>
            { item.text }
            <Image className='recruit-condition-select' src={IMGCDNURL + 'select.png'} />
            </View>
          </View>
        ))}
      </View>

      <AtDrawer
        show={current === 'area'}
        mask
        onClose={()=>closeDrawer()}
      >
        <View className='common-drawer-item'>
          <View className='drawer-full-lists'>
            <View className='drawer-list-item overwords'>全国</View>
            <View className='drawer-list-item'>全国</View>
            <View className='drawer-list-item'>全国</View>
            <View className='drawer-list-item'>全国</View>
            <View className='drawer-list-item'>全国</View>
            <View className='drawer-list-item'>全国</View>
            <View className='drawer-list-item'>全国</View>
          </View>
        </View>
      </AtDrawer>
    </Block>
  )
}