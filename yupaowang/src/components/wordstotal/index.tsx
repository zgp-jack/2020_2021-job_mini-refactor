import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { TEXTAREAMAXLENGTH } from '../../config'
import './index.scss'

interface PROPS {
  total?: number,
  num: number,
  classname?: string
}

export default function WordsTotal({ total = TEXTAREAMAXLENGTH || 500, num = 0, classname = '' }: PROPS){
  console.log(num)
  return (
    <View className={ 'words-total-box ' + classname }>{ num }<Text>/{ total }</Text></View>
  )
}