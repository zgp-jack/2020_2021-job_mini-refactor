import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { ProfessionRecruitData } from './index.d'
import classnames from 'classnames'
import { AtIcon } from 'taro-ui'

import './index.scss'

interface PROPS {
  data: ProfessionRecruitData[] | undefined,
  num: number,
  title?: string,
  footerTitle?: string,
  onClickItem: (i:number,k:number,id:string,name:string) => void,
  closeProfession: () => void
}

export default function Profession({ data, title = '选择工种', footerTitle = '确定', closeProfession, onClickItem}: PROPS){
  console.log(data,'datadatadata')
  return (
    <View className='profession-container'>
      <View className='profession-content'>
        <View className='profession-header'>{ title }</View>
        <ScrollView scrollY className='profession-body'>
          {
            data && data.map((item,i)=>(
              <View className='profession-list-item' key={ item.id }>
                <View className='profession-list-title'>{ item.name }</View>
                <View className='profession-list-content'>
                  {item.children.map((d,k)=>(
                    <View className='prosession-item overwords' onClick={() => onClickItem(i,k,d.id,d.name)} key={ d.id }>
                      { d.name }
                      <View className={classnames({
                        'at-icon': true,
                        'at-icon-check': true,
                        'icon-checked': true,
                        'icon-checked-active': d.is_check
                      })}></View>
                    </View>
                  ))}
                </View>
              </View>
            ))
          }
        </ScrollView>
        <View className='profession-footer' onClick={()=>closeProfession()}>{ footerTitle }</View>
      </View>
    </View>
  )
}

Profession.options = {
  addGlobalClass: true
}