import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import './index.scss'

interface PROPS {
  total?: number,
  num: number,
  classname?: string
}

export default function WordsTotal({ total = 500, num = 0, classname = '' }: PROPS){
  return (
    <View className={ 'words-total-box ' + classname }>{ num }<Text>/{ total }</Text></View>
  )
}