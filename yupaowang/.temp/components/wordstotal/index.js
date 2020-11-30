import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
import { TEXTAREAMAXLENGTH } from "../../config/index";
import './index.scss';
export default class WordsTotal extends Taro.Component {
  render() {
    const { total = TEXTAREAMAXLENGTH || 500, num = 0, classname = '' } = this.props;

    return <View className={'words-total-box ' + classname}>{num}<Text>/{total}</Text></View>;
  }

}