import Taro, { useEffect, useState } from '@tarojs/taro'
import { resumeListAction } from '../../utils/request'

export default function useResume(){

  const [data,setData] = useState<any>({})
  // 请求当前找活数据
  useEffect(()=>{
    resumeListAction().then(res=>{
      console.log(res)
      setData(res)
    })
  },[])

  return {
    data
  }
}