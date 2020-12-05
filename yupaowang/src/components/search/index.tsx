import Taro from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  placeholder: string,
  value: string,
  setRemark: (val: string) => void,
  setSearchData: () => void
}

export default function Search({ placeholder, value, setSearchData, setRemark }: Props){
  
  return (
    <View className='search-header-box'>
      <Input 
        className='search-input' 
        placeholder={placeholder} 
        placeholderClass='search-input-placeholder'
        value={value} 
        onInput={(e) => setRemark(e.detail.value)} 
        onConfirm={() => setSearchData()} 
      />
      <Text 
        className='search-btn' 
        onClick={()=>setSearchData()}
      >搜索</Text>
    </View>
  )
}