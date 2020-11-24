import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { IMGCDNURL } from "../../../config/index";
import Nodata from "../../nodata/index";
import './index.scss';
// 招工
export default class RecruitListPage extends Taro.Component {
  render() {
    const { data = [], occupations = '', city = '' } = this.props;

    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    return <View>
      <View className="header">
        <Text className="header-text">相关推荐</Text>
      </View>
      {!data.length && <Nodata />}
      {data.map(v => <View key={v.id} className="recruitListBox" onClick={() => userRouteJump(`/pages/detail/info/index?id=${v.id}`)}>
          
          <View className="recruitListBox-title">
            {v.title}
          </View>
          
          <View className="recruitListBox-content">
            <Image src={v.image} className="recruitListBox-content-img" />
            <View className="recruitListBox-content-box">
              <View className="recruitListBox-content-name">{v.user_name}</View>
              <View className="recruitListBox-content-details overwrods">{v.detail}</View>
            </View>
          </View>
          
          <View className="recruitListBox-footer">
            <View><Image className="recruitListBox-footer-image" src={`${IMGCDNURL}newlist-jobposi.png`} />{v.show_address}</View>
            <View>{v.time}</View>
          </View>
        </View>)}
      <View className="recruitListBox-last" onClick={() => userRouteJump(`/pages/resume/recList/index?city=${city}&occupations=${occupations}`)}>查看更多招工信息</View>
    </View>;
  }

}