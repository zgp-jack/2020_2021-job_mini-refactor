/*
 * @Author: zyb
 * @Date: 2020-11-03 15:03:11
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 10:38:00
 * @Description: 
 */
import { useEffect, useState } from '@tarojs/taro'
import { resumeListAction } from '../../utils/request'
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr } from '../../utils/request/index.d';
import { INFODATA_DATA, INTRODUCERS_DATA } from '../../pages/resume//publish/data';
import Msg from '../../utils/msg'
export default function useResume(){
  // 基础信息
  const [infoData, setInfoData] = useState<resInfoObj>(INFODATA_DATA)
  // 人员信息
  const [introducesData, setIntroducesData] = useState<resIntroduceObj>(INTRODUCERS_DATA)
  // 项目
  const [projectData, setProjectData] = useState <resProjectArr[]>([])
  // 职业技能
  const [certificates, setCertificates] = useState <resCertificatesArr[]>([]);
  // 请求当前找活数据
  useEffect(()=>{
    resumeListAction().then(res=>{
      console.log(res);
      if(res.errcode === 200){
        console.error(res.data,'data')
        // 生日需要单独设置
        const time = new Date().getFullYear() - (+res.data.info.birthday.split('-')[0] - 0);
        const age = time>0? time + '岁' : '未填写';
        res.data.info.age = age;
        setInfoData(res.data.info);
        setIntroducesData(res.data.introduces);
        setProjectData(res.data.project);
        setCertificates(res.data.certificates)
      }else{
        Msg(res.errmsg);
      }
      // setData(res)
    })
  },[])

  return {
    // data
    infoData,
    introducesData,
    projectData,
    certificates,
  }
}