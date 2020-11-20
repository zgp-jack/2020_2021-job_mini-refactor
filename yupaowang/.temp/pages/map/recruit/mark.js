import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { Areas } from '../../../config/store';
import { getAllAreas } from "../../../utils/request/index";
import './index.scss';
export default class RecruitMap extends Taro.Component {
  render() {
    // 城市数据
    const [areas, setAreas] = Taro.useState([]);
    // 获取城市数据
    Taro.useEffect(() => {
      let areas = _getStorageSync(Areas);
      if (areas) setAreas(areas);else getAllAreas().then(res => {
        // 存入缓存
        _setStorageSync(Areas, res);
        setAreas(res);
      });
    }, []);
    return <View className="publishrecruit-container">
      
      123
    </View>;
  }

}