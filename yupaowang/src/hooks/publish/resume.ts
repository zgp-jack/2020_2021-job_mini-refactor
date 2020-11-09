/*
 * @Author: zyb
 * @Date: 2020-11-03 15:03:11
 * @LastEditors: jsxin
 * @LastEditTime: 2020-11-09 17:11:48
 * @Description: 
 */
import Taro,{ useState,useDidShow, useEffect } from '@tarojs/taro'
import { resumeListAction, resumesEditEndAction } from '../../utils/request'
import { resIntroduceObj, resInfoObj, resProjectArr, resCertificatesArr, resume_topObj, resTop_statusArr } from '../../utils/request/index.d';
import { RESUME_TOP_DATA, INFODATA_DATA, INTRODUCERS_DATA } from '../../pages/resume/publish/data';
import { setUseResume } from '../../actions/resume_data';
import { useResumeType } from '../../pages/resume/publish/index.d'
import { useDispatch, useSelector } from '@tarojs/redux'
import Msg, { ShowActionModal} from '../../utils/msg'

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
  // 人员信息
  const [is_introduces, setIs_introduces] = useState<number>(0);
  // 最大项目长度
  const [project_count, setProject_count] = useState<number>(0)
  // 最大技能长度
  const [certificate_count, setCertificate_count] = useState<number>(0);
  // 显示图标
  const [show_tips, setShow_tips]= useState<number>(0);
  // 工作状态
  const [selectData, setSelectData] = useState<resTop_statusArr[]>([]);
  // 工作状态索引
  const [selectDataIndex, setSelectDataIndex] = useState<number>(0);
  // 工作状态
  const [check, setCheck] = useState<string>('');
  // 页面显示项目
  const [ProjectList, setProjectList] = useState<resProjectArr[]>([]);
  // 页面显示技能
  // 项目列表
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
        info = { ...info, ...res.data.info };
        setInfoData({ ...info });
        // 设置页面显示的项目
          // 定义有图片项目数组
          let hasImageProject: resProjectArr[] = [];
          // 定义没图片的数组
        let NoImageProject: resProjectArr[] = [];
          let data = [...res.data.project];
        for (let i = 0; i < data.length; i++) {
          // 将时间转成毫秒并存入数组
          data[i].endTime = new Date(data[i].completion_time).getTime()
          // 获取项目经验对象中images不为空的项目
          if (data[i].image.length != 0) {
            // 增加index字段作为data数组查找标识
            data[i].index = i
            hasImageProject.push(data[i])
          } else {
            data[i].index = i
            NoImageProject.push(data[i])
          }
        }
        // 将有图片的数组与没有图片的数组进行按照时间降序排列
        let sortImageProject = hasImageProject.sort(projectSort("endTime"))
        let sortNoImageProject = NoImageProject.sort(projectSort("endTime"))
        // 组合项目经验对象
        let projectItem = [...sortImageProject, ...sortNoImageProject];
        // 获取排序后的第一个元素
        let projectOne = projectItem[0];
        if (new Date(projectItem[0].completion_time).getTime() / 86400000 < parseInt(((new Date().getTime()) / 86400000).toString())) {
          // 项目
          setProjectData([...projectItem]);
        }
        // 是否有人员信息
        setIs_introduces(res.data.is_introduces);
        //最大项目长度
        setProject_count(res.data.project_count);
        // 最大技能长度
        setCertificate_count(res.data.certificate_count);
        // 头像旁边图片显示
        setShow_tips(res.data.content.show_tips);
        // 工作状态
        setSelectData(res.data.status);
        // 工作状态用来选择是正在找工作还是已找到工作
        setCheck(res.data.info.check);
        //人员信息
        let introduces: resIntroduceObj = { ...INTRODUCERS_DATA };
        introduces = { ...introduces, ...res.data.introduces }
        setIntroducesData({ ...introduces });
        setCertificates([...res.data.certificates]);
        setResume_top({ ...res.data.resume_top });
        // 存redux
        dispatch(setUseResume({
          info: res.data.info,
          introducesData: res.data.introduces,
          certificates: res.data.certificates,
          projectData: res.data.project,
          resume_uuid: res.data.info&&res.data.info.uuid || '',
          isSet: true,
        }))
      } else {
        Msg(res.errmsg);
      }
    })
  }
  // 获取项目结束时间比较近的项目
  // 排序规则降序排列
  const projectSort = (key)=> {
    return function (objectN, objectM) {
      let valueN = objectN[key];
      let valueM = objectM[key];
      if (valueN < valueM) return 1
      else if (valueN > valueM) return -1
      else return 0
    }
  }
  // 工作状态
  const handleSelectData = ()=>{
    if (check == '2'){
      let selectdataList: string[] = [], selectdataId:number[]=[];
      for (let i = 0; i < selectData.length; i++) {
        selectdataList.push(selectData[i].name)
      }
      for (let i = 0; i < selectData.length; i++) {
        selectdataId.push(selectData[i].id)
      }
      Taro.showActionSheet({
        itemList: selectdataList,
        success(res:any) {
          console.error(res,'res')
          if (selectDataIndex == res.tapIndex) {
            return
          }
          setSelectDataIndex(res.tapIndex);
          resumesEditEndAction({ type: selectdataId[res.tapIndex], resume_uuid:infoData.uuid}).then(res=>{
            if(res.errcode == 'ok'){
              ShowActionModal({
                title: '温馨提示',
                msg: res.errmsg,
              })
              initResumeData();
            }else{
              ShowActionModal({
                title: '温馨提示',
                msg: res.errmsg,
              })
            }
          })
        }
      })
      // 审核中
    }else if (check == '1') {
      ShowActionModal({
        title: '温馨提示',
        msg: "审核中请耐心等待",
      })
      return
      // 审核未通过
    } else if (check == '0') {
      ShowActionModal({
        title: '温馨提示',
        msg: "审核未通过，请修改信息",
      })
      return
    }
  }
  return {
    infoData,
    introducesData,
    projectData,
    certificates,
    resume_top,
    initResumeData,
    is_introduces,
    project_count,
    certificate_count,
    show_tips,
    selectData,
    selectDataIndex,
    handleSelectData,
  }
}