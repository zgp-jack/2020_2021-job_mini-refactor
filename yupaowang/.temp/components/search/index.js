import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Input, Text } from '@tarojs/components';
import './index.scss';
export default class Search extends Taro.Component {
  render() {
    const { placeholder, value, setSearchData, setRemark } = this.props;

    return <View className="search-header-box">
      <Input className="search-input" placeholder={placeholder} value={value} onInput={e => setRemark(e.detail.value)} onConfirm={() => setSearchData()} />
      <Text className="search-btn" onClick={() => setSearchData()}>搜索</Text>
    </View>;
  }

}