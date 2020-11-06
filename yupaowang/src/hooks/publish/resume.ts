/*
 * @Author: zyb
 * @Date: 2020-11-03 15:03:11
<<<<<<< HEAD
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-06 11:21:32
=======
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-05 19:53:36
>>>>>>> 2b5749a609afbaa14d25b780c7d39444fbbbe5bd
 * @Description: 
 */
import { useState,useDidShow, useEffect } from '@tarojs/taro'
import { resumeListAction } from '../../utils/request'
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr,resume_topObj } from '../../utils/request/index.d';
import { RESUME_TOP_DATA, INFODATA_DATA, INTRODUCERS_DATA } from '../../pages/resume/publish/data';
import { setUseResume } from '../../actions/resume_data';
import { useDispatch, useSelector } from '@tarojs/redux'
import Msg from '../../utils/msg'

export default function useResume(){
  const dispatch = useDispatch();
  // 基础信息
  const infoVal = useSelector<any, resInfoObj>(state => state.resumeData.info)
  // 人员信息
  const introducesVal = useSelector<any, resIntroduceObj>(state => state.resumeData.introducesData)
  // 项目
  const projectVal = useSelector<any, resProjectArr[]>(state => state.resumeData.projectData)
  //  职业技能
  const certificatesVal = useSelector<any, resCertificatesArr[]>(state => state.resumeData.certificates)
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
  
  useEffect(()=>{
    initResumeData()
  },[])

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