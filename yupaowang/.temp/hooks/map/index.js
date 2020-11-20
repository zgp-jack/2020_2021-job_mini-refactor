import Taro from "@tarojs/taro-h5";
export default function useRecruitMap(text) {
  // 定义城市adcode
  const [adcode, setAdcode] = Taro.useState('');
  // 当前显示城市
  const [area, setArea] = Taro.useState(text);
  // 选择的坐标
  const [location, setLocation] = Taro.useState('');
  // 选择详细地址信息
  const [areaInfo, setAreaInfo] = Taro.useState();
}