import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import RecruitListPage from './recruitList/index';
import ResumeListPage from './resumeList/index';
import './index.scss';
// 找活查看更多招工
// 招工查看找活
// 招工详情就是招工
// 找活详情就去就是找活
export default class CollectionRecruitList extends Taro.Component {
  render() {
    const { data = [], type } = this.props;

    return <View>
      
      {type === 1 && <View><RecruitListPage data={data} /></View>}
      
      {type === 2 && <View><ResumeListPage data={data} /></View>}
    </View>;
  }

}