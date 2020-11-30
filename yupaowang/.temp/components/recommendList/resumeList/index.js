import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image, Block } from '@tarojs/components';
import { IMGCDNURL } from "../../../config/index";
import './index.scss';
// 找活
export default class ResumeListPage extends Taro.Component {
  render() {
    const { data = [] } = this.props;

    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    const handleLast = () => {
      Taro.navigateBack({
        delta: 1
      });
    };
    return <View className="resume-list-container">
      <View className="resumeDetail-recommend">
        <View className="resumeDetail-recommend-top">
          <Text className="resumeDetail-recommend-top-text">相关推荐</Text></View>
      </View>
      {data.map(item => <Nerv.Fragment key={item.id}>
          
          <View className="resume-list-item" key={item.id} onClick={() => userRouteJump(`/pages/resume/detail/index?uuid=${item.uuid}&location=${item.location}`)}>
              <View className="resume-list-header">
                <Image className="resume-list-user" src={item.headerimg} />
                <View className="resume-list-userinfo">
                  <View className="resume-list-userinfo-detail">
                    <Text className="resume-userinfo-name">{item.username}</Text>
                    <Text className="resume-userinfo-birthday">{item.birthday}岁</Text>
                    {item.certificate == 1 && <Image className="resume-userinfo-img" src={`${IMGCDNURL}newresume-infolist-jnz.png?t=1`} />}
                  </View>
                  <Text className="resume-list-type">{item.type}</Text>
                  <View className="resume-otherinfo">
                    <Text className="resume-otherinfo-text">{item.nation}</Text>
                    <Text className="resume-otherinfo-text">{item.experience}</Text>
                  </View>
                </View>
              </View>
              <View className="resume-list-works">
                {item.occupations.map((v, i) => <Text className="resume-list-words-text" key={i + i}>{v}</Text>)}
              </View>
              <View className="resume-list-content overwords">{item.introduce}</View>
              <View className="resume-list-footer">
                <View className="resume-list-footer-flex">
                  <Image className="resume-list-loc" src={IMGCDNURL + 'lpy/biaoqian.png'} />
                  <View className="resume-list-loctxt overwords">{item.show_address}</View>
                </View>
                <Text className="resume-list-time">{item.prof_degree}</Text>
              </View>
            </View>
        </Nerv.Fragment>)}
      <View className="seemore-recommend-recruit" onClick={() => handleLast()}>查看更多找活信息</View>
    </View>;
  }

}