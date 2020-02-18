import Taro from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  placeholder: string,
  value: string
}

export default function Search({ placeholder, value }: Props){
  return (
    <View className='search-header-box'>
      <Input className='search-input' placeholder={ placeholder } value={ value } />
      <Text className='search-btn'>搜索</Text>
    </View>
  )
}