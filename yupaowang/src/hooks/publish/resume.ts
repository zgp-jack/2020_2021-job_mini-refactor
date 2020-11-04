/*
 * @Author: zyb
 * @Date: 2020-11-03 15:03:11
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 20:25:04
 * @Description: 
 */
import { useState,useDidShow } from '@tarojs/taro'
import { resumeListAction } from '../../utils/request'
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr,resume_topObj } from '../../utils/request/index.d';
import { INFODATA_DATA, INTRODUCERS_DATA, RESUME_TOP_DATA } from '../../pages/resume/publish/data';
import { useResumeType } from '../../actions/useResume';
import { setUuid } from '../../actions/uuid';
import { setUseResume } from '../../actions/useResume';
import { useDispatch, useSelector } from '@tarojs/redux'
import Msg from '../../utils/msg'

export default function useResume(){
  const dispatch = useDispatch();
  // 基础信息
  const infoVal = useSelector<any, resInfoObj>(state => state.useResume.info)
  // 人员信息
  const introducesVal = useSelector<any, resIntroduceObj>(state => state.useResume.introducesData)
  // 项目
  const projectVal = useSelector<any, resProjectArr[]>(state => state.useResume.projectData)
  //  职业技能
  const certificatesVal = useSelector<any, resCertificatesArr[]>(state => state.useResume.certificates)
  // 基础信息
  const [infoData, setInfoData] = useState<resInfoObj>(infoVal)
  // 人员信息
  const [introducesData, setIntroducesData] = useState<resIntroduceObj>(introducesVal)
  // 项目
  const [projectData, setProjectData] = useState<resProjectArr[]>(projectVal)
  // 职业技能
  const [certificates, setCertificates] = useState<resCertificatesArr[]>(certificatesVal);
  //置顶
  const [resume_top, setResume_top] = useState<resume_topObj>(RESUME_TOP_DATA)
  // 请求当前找活数据
  useDidShow(()=>{
    resumeListAction().then(res=>{
      if(res.errcode === 200){
        // 生日需要单独设置
        let time;
        if (res.data.info.birthday){
          time = new Date().getFullYear() - (+res.data.info.birthday.split('-')[0] - 0);
        }else{
          time= 0;
        }
        const age = time>0? time + '岁' : '未填写';
        res.data.info.age = age;
        setInfoData(res.data.info);
        setIntroducesData(res.data.introduces);
        setProjectData(res.data.project);
        setCertificates(res.data.certificates);
        setResume_top(res.data.resume_top);
        // 存redux
        dispatch(setUuid(res.data.info.uuid));
        dispatch(setUseResume({
          info:res.data.info,
          introducesData:res.data.introduces,
          certificates:res.data.certificates,
          projectData:res.data.project,
        }))
      }else{
        Msg(res.errmsg);
      }
    })
  })
  return {
    infoData,
    introducesData,
    projectData,
    certificates,
    resume_top,
  }
}