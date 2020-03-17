import { useState } from '@tarojs/taro'

export default function useRecruitMap(text: string){

  // 定义城市adcode
  const [adcode, setAdcode] = useState<string>('');
  // 当前显示城市
  const [area, setArea] = useState<string>(text)
  // 选择的坐标
  const [location, setLocation] = useState<string>('')
  // 选择详细地址信息
  const [areaInfo, setAreaInfo] = useState()
}