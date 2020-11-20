/*
 * @Author: zyb
 * @Date: 2020-11-03 09:23:50
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-17 14:01:25
 * @Description:
 */
import Taro from "@tarojs/taro-h5";
import { getResumeAddInfoConfig } from "../../utils/request/index";
import { useDispatch, useSelector } from "@tarojs/redux-h5";
import { setResumeInfoConfig } from '../../actions/resume_addinfo';
export default function useResumeAddInfo() {
  const dispatch = useDispatch();
  const addInfoConfig = useSelector(store => store['resumeAddInfo']);
  // 保存配置项
  const [infoConfig, setInfoConfig] = Taro.useState(addInfoConfig);
  // 当前性别的下标
  const [genderCurrent, setGenderCurrent] = Taro.useState(0);
  // 当前民族的下标
  const [nationCurrent, setNationCurrent] = Taro.useState(0);
  // 获取年月日范围
  const startDatePicker = new Date().getFullYear() - 60 + '-01-01';
  // 获取结束时间范围
  const endDatePicker = new Date().getFullYear() - 18 + '-12-31';
  // 初始化基本信息数据
  //const 
  // 请求配置项数据
  Taro.useEffect(() => {
    if (addInfoConfig.isset) return;
    getResumeAddInfoConfig().then(res => {
      let data = { ...res, isset: true };
      setInfoConfig({ ...data });
      dispatch(setResumeInfoConfig({ ...data }));
    });
  }, []);
  return {
    infoConfig,
    genderCurrent,
    startDatePicker,
    endDatePicker
  };
}