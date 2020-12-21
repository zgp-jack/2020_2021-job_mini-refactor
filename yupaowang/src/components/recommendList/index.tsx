import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import RecruitListPage from './recruitList/index';
import ResumeListPage  from './resumeList/index'
import './index.scss'


interface PROPS {
  data: any[],
  type:number,
  areasId?: number,
  occupations?:string,
  jobIds: number,
}
// 找活查看更多招工
// 招工查看找活
// 招工详情就是招工
// 找活详情就去就是找活

export default function CollectionRecruitList({ data = [], type, areasId, occupations, jobIds }: PROPS) {
  return(
    <View>
    {/* type === 1 招工 */}
      {type === 1 && 
        <View><RecruitListPage data={data} areasId={areasId} occupations={occupations} type={type} jobIds={jobIds}/></View>
      }
      {/* type === 2 找活 */}
      {type === 2 && 
        <View><ResumeListPage data={data} areasId={areasId} occupations={occupations} type={type} /></View>
      }
    </View>
  )
}