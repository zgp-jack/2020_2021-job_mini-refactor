/*
 * @Author: zyb
 * @Date: 2020-11-03 15:03:11
<<<<<<< HEAD
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-06 17:18:01
=======
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-05 19:53:36
>>>>>>> 2b5749a609afbaa14d25b780c7d39444fbbbe5bd
 * @Description: 
 */
import { useState,useDidShow, useEffect } from '@tarojs/taro'
import { resumeListAction } from '../../utils/request'
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr, resume_topObj } from '../../utils/request/index.d';
import { RESUME_TOP_DATA, INFODATA_DATA, INTRODUCERS_DATA } from '../../pages/resume/publish/data';
import { setUseResume } from '../../actions/resume_data';
import { useResumeType } from '../../pages/resume/publish/index.d'
import { useDispatch, useSelector } from '@tarojs/redux'
import Msg from '../../utils/msg'

export default function useResume(){
  const dispatch = useDispatch();
  // 获取找活名片信息
  const resumeData: useResumeType = useSelector<any, useResumeType>(state => state.resumeData)
  // 基础信息
  const [infoData, setInfoData] = useState<resInfoObj>(resumeData.info)
  // 人员信息
  const [introducesData, setIntroducesData] = useState<resIntroduceObj>(resumeData.introducesData)
  // 项目
  const [projectData, setProjectData] = useState<resProjectArr[]>(resumeData.projectData)
  // 职业技能
  const [certificates, setCertificates] = useState<resCertificatesArr[]>(resumeData.certificates);
  //置顶
  const [resume_top, setResume_top] = useState<resume_topObj>(RESUME_TOP_DATA)
  
  useEffect(()=>{
    initResumeData()
  },[])

  // 当redux数据发生改变后， 将自动更新到页面上
  useEffect(()=>{
    if(!resumeData.isSet) return
    setInfoData(resumeData.info)
    setIntroducesData(resumeData.introducesData)
    setProjectData(resumeData.projectData)
    setCertificates(resumeData.certificates)
  }, [resumeData])

  // 请求找活详情数据
  const initResumeData = () => {
    resumeListAction().then(res => {
      if (res.errcode === 200) {
        // 生日需要单独设置
        let time: number;
        if (res.data.info.birthday) {
          time = new Date().getFullYear() - (+res.data.info.birthday.split('-')[0] - 0);
        } else {
          time = 0;
        }
        const age = time > 0 ? time + '岁' : '未填写';
        res.data.info.age = age;
        //基本信息
        let info: resInfoObj = { ...INFODATA_DATA };
        info = { ...info, ...res.data.info }
        setInfoData({ ...info });
        //人员信息
        let introduces: resIntroduceObj = { ...INTRODUCERS_DATA };
        introduces = { ...introduces, ...res.data.introduces }
        setIntroducesData({ ...introduces });
        // 项目
        setProjectData([...res.data.project]);
        setCertificates([...res.data.certificates]);
        setResume_top({ ...res.data.resume_top });
        // 存redux
        dispatch(setUseResume({
          info: res.data.info,
          introducesData: res.data.introduces,
          certificates: res.data.certificates,
          projectData: res.data.project,
          resume_uuid: res.data.info.uuid || '',
          isSet: true,
        }))
      } else {
        Msg(res.errmsg);
      }
    })
  }

  return {
    infoData,
    introducesData,
    projectData,
    certificates,
    resume_top,
    initResumeData
  }
}