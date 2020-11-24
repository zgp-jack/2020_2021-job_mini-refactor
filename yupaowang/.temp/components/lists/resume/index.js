import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync } from "@tarojs/taro-h5";
import { View, Text, Image, Block } from '@tarojs/components';
import { IMGCDNURL } from "../../../config/index";
import Nodata from "../../nodata/index";
import './index.scss';
import { UserLocation } from '../../../config/store';
export default class ResumeList extends Taro.Component {
  render() {
    const { data, bottom = true, hasMore = true } = this.props;

    // 用户页面跳转
    const userRouteJump = uuid => {
      let location = _getStorageSync(UserLocation);
      location = location ? location = location.split(',').reverse() : '';
      Taro.navigateTo({
        url: `/pages/resume/detail/index?uuid=${uuid}&location=${location}`
      });
    };
    return <View className="resume-list-container" style={bottom ? '' : 'padding-bottom:0'}>
      {data && data.map((item, di) => <Nerv.Fragment key={`${di}-${di}`}>
          {item && item.map(d => <View className="resume-list-item" key={d.id} onClick={() => userRouteJump(d.uuid)}>
              <View className="resume-list-header">
                <Image className="resume-list-user" src={d.headerimg} />
                <View className="resume-list-userinfo">
                  <View className="resume-list-userinfo-detail">
                    <Text className="resume-userinfo-name">{d.username}</Text>
                    {d.gender && <Text className="resume-userinfo-sex">{d.gender == '1' ? '男' : '女'}</Text>}
                    {d.birthday && <Text className="resume-userinfo-age">{d.birthday}岁</Text>}
                  </View>
                  <Text className="resume-list-type">{d.type}</Text>
                  <View className="resume-otherinfo">
                    {d.nation && <Text className="resume-otherinfo-text">{d.nation}</Text>}
                    {d.experience && <Text className="resume-otherinfo-text">{d.experience}</Text>}
                    {d.prof_degree && <Text className="resume-otherinfo-text">{d.prof_degree}</Text>}
                  </View>
                  
                </View>
              </View>
              <View className="resume-list-works">
                {d.occupations.map((i, ii) => <Text className="resume-list-words-text" key={`${d.id}-${ii}`}>{i}</Text>)}
              </View>
                <View className="resume-list-content overwords">{d.introduce}</View>
              <View className="resume-list-footer">
                <Image className="resume-list-loc" src={IMGCDNURL + 'lpy/biaoqian.png'} />
                <View className="resume-list-loctxt overwords">{d.show_address}</View>
                <Text className="resume-list-time">{d.time}</Text>
              </View>
            </View>)}
        </Nerv.Fragment>)}
      {data && data[0] && data[0].length && !hasMore && <View className="list-data-notmore">没有更多数据了</View>} 
      {data && data[0] && !data[0].length && <Nodata text="暂无相关数据" />}
    </View>;
  }

}