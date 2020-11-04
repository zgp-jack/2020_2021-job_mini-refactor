/*
 * @Author: zyb
 * @Date: 2020-11-03 15:03:11
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 15:50:26
 * @Description: 
 */
import { useState,useDidShow } from '@tarojs/taro'
import { resumeListAction } from '../../utils/request'
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr } from '../../utils/request/index.d';
import { INFODATA_DATA, INTRODUCERS_DATA } from '../../pages/resume/publish/data';
import { setResProject } from '../../actions/resProject';
import { setIntroduces } from '../../actions/introduces';
import { setResInfo } from '../../actions/resInfo';
import { setCertificatesData } from '../../actions/certificates';
import { useDispatch, useSelector } from '@tarojs/redux'
import Msg from '../../utils/msg'

export default function useResume(){
  const dispatch = useDispatch()
  // 基础信息
  const [infoData, setInfoData] = useState<resInfoObj>(INFODATA_DATA)
  // 人员信息
  const [introducesData, setIntroducesData] = useState<resIntroduceObj>(INTRODUCERS_DATA)
  // 项目
  const [projectData, setProjectData] = useState <resProjectArr[]>([])
  // 职业技能
  const [certificates, setCertificates] = useState <resCertificatesArr[]>([]);
  // 请求当前找活数据
  useDidShow(()=>{
    resumeListAction().then(res=>{
      if(res.errcode === 200){
        // 生日需要单独设置
        const time = new Date().getFullYear() - (+res.data.info.birthday.split('-')[0] - 0);
        const age = time>0? time + '岁' : '未填写';
        res.data.info.age = age;
        if (res.data.project.length>0){
          const lastData = res.data.project[res.data.project.length-1];
          console.error(lastData,'1111')
          console.error(new Date(lastData.completion_time).getTime() / 86400000,'new Date(lastData.completion_time).getTime()/86400000');
          console.error(new Date().getTime() / 86400000,'new Date().getTime() / 86400000)')
          if(new Date(lastData.completion_time).getTime()/86400000 < new Date().getTime() / 86400000){

          }
        }
        setInfoData(res.data.info);
        setIntroducesData(res.data.introduces);
        setProjectData(res.data.project);
        setCertificates(res.data.certificates);
        // 存redux
        dispatch(setResProject(res.data.project));
        dispatch(setIntroduces(res.data.introduces));
        dispatch(setCertificatesData(res.data.certificates));
        dispatch(setResInfo(res.data.info))
      }else{
        Msg(res.errmsg);
      }
      // setData(res)
    })
  })

  return {
    // data
    infoData,
    introducesData,
    projectData,
    certificates,
  }
}