import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
import Imglist from "../../../components/imglist/index";
import Nodata from "../../../components/nodata/index";
import { useSelector } from "@tarojs/redux-h5";
import './index.scss';
export default class Projects extends Taro.Component {
  config = {
    navigationBarTitleText: '技能证书列表',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    const data = useSelector(state => state.resumeList);
    return <View className="projects-container">
      {data.project && data.project.map(item => <View className="project-item">
          <View className="project-item-title">{item.project_name}</View>
          <View className="project-time">
            <Text className="project-time-text">{item.start_time} ~ {item.completion_time}</Text>
            <Text className="project-time-text">{`${item.province_name}-${item.city_name}`}</Text>
          </View>
          <View className="project-description">{item.detail}</View>
          <Imglist data={item.image} />
          {item.check == '0' && <View className="project-reason-text">{item.fail_case}</View>}
        </View>)}
      {!data.project.length && <Nodata />}
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
Projects.config = { navigationBarTitleText: '技能证书列表', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };