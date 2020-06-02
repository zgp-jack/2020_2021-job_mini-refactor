import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Input, Text, Image } from '@tarojs/components'
import RecruitListPage from './recruitList/index';
import ResumeListPage  from './resumeList/index'
import './index.scss'


interface PROPS {
  data: any[],
  type:number,
}
// 找活查看更多招工
// 招工查看找活
// 招工详情就是招工
// 找活详情就去就是找活

export default function CollectionRecruitList({data=[],type}: PROPS) {
  return(
    <View>
      {/* type === 1 招工 */}
      {type === 1 && 
        <View><RecruitListPage data={data}/></View>
      }
      {/* type === 2 找活 */}
      {type === 2 && 
        <View><ResumeListPage data={data}/></View>
      }
    </View>
  )
}