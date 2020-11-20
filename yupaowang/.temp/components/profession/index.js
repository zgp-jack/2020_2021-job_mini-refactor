import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import './index.scss';
export default class Profession extends Taro.Component {
  render() {
    const { data, title = '选择工种', footerTitle = '确定', closeProfession, onClickItem } = this.props;

    return <View className="profession-container">
      <View className="profession-content">
        <View className="profession-header">{title}</View>
        <ScrollView scrollY className="profession-body">
          {data && data.map((item, i) => <View className="profession-list-item" key={item.id}>
                <View className="profession-list-title">{item.name}</View>
                <View className="profession-list-content">
                  {item.children.map((d, k) => <View className="prosession-item overwords" onClick={() => onClickItem(i, k, d.id, d.name)} key={d.id}>
                      {d.name}
                      <View className={classnames({
                  'at-icon': true,
                  'at-icon-check': true,
                  'icon-checked': true,
                  'icon-checked-active': d.is_check
                })}></View>
                    </View>)}
                </View>
              </View>)}
        </ScrollView>
        <View className="profession-footer" onClick={() => closeProfession()}>{footerTitle}</View>
      </View>
    </View>;
  }

}
Profession.options = {
  addGlobalClass: true
};