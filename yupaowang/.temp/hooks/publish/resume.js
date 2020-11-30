import Taro, { showActionSheet as _showActionSheet } from "@tarojs/taro-h5";
import { resumeListAction, resumesEditEndAction } from "../../utils/request/index";
import { RESUME_TOP_DATA, INFODATA_DATA, INTRODUCERS_DATA } from '../../pages/resume/publish/data';
import { setUseResume } from '../../actions/resume_data';
import { useDispatch, useSelector } from "@tarojs/redux-h5";
import { setAreaInfo } from '../../actions/recruit';
import Msg, { ShowActionModal } from "../../utils/msg/index";
export default function useResume() {
  const dispatch = useDispatch();
  // 检测用户是否登录
  const login = useSelector(store => store.User['login']);
  // 获取找活名片信息
  const resumeData = useSelector(state => state.resumeData);
  // 基础信息
  const [infoData, setInfoData] = Taro.useState(resumeData.info);
  // 人员信息
  const [introducesData, setIntroducesData] = Taro.useState(resumeData.introducesData);
  // 项目
  const [projectData, setProjectData] = Taro.useState(resumeData.projectData);
  // 职业技能
  const [certificates, setCertificates] = Taro.useState(resumeData.certificates);
  //置顶
  const [resume_top, setResume_top] = Taro.useState(RESUME_TOP_DATA);
  // 人员信息
  const [is_introduces, setIs_introduces] = Taro.useState(0);
  // 最大项目长度
  const [project_count, setProject_count] = Taro.useState(0);
  // 最大技能长度
  const [certificate_count, setCertificate_count] = Taro.useState(0);
  // 显示图标
  const [show_tips, setShow_tips] = Taro.useState(0);
  // 工作状态
  const [selectData, setSelectData] = Taro.useState([]);
  // 工作状态索引
  const [selectDataIndex, setSelectDataIndex] = Taro.useState(0);
  // 工作状态
  const [check, setCheck] = Taro.useState('');
  // 是否修改项目经验
  const [isModifyProject, setIsModifyProject] = Taro.useState('');
  //是否修改技能证书
  const [isModifySkill, setIsModifySkill] = Taro.useState('');
  // 修改项目数量
  const [projectNum, setProjectNum] = Taro.useState(0);
  // 修改职业技能数量
  const [certificatesNum, setCertificatesNum] = Taro.useState(0);
  // 项目列表
  Taro.useEffect(() => {
    initResumeData();
  }, [login]);
  // 当redux数据发生改变后， 将自动更新到页面上
  Taro.useEffect(() => {
    if (!resumeData.isSet) return;
    setInfoData(resumeData.info);
    setIntroducesData(resumeData.introducesData);
    setProjectData(resumeData.projectData);
    setCertificates(resumeData.certificates);
  }, [resumeData]);
  // 请求找活详情数据
  const initResumeData = () => {
    if (!login) return;
    resumeListAction().then(res => {
      if (res.errcode === 200) {
        // debugger
        // 生日需要单独设置
        let time;
        if (res.data.info.birthday) {
          time = new Date().getFullYear() - (+res.data.info.birthday.split('-')[0] - 0);
        } else {
          time = 0;
        }
        const age = time > 0 ? time + '岁' : '未填写';
        res.data.info.age = age;
        //基本信息
        let info = { ...INFODATA_DATA };
        info = { ...info, ...res.data.info };
        setInfoData({ ...info });
        if (res.data.info.is_end == '2') setSelectDataIndex(1);
        // 清除地图redux
        dispatch(setAreaInfo({
          title: '',
          location: '',
          adcode: '',
          info: '',
          provice: '',
          city: ''
        }));
        // 设置页面显示的项目
        // 定义有图片项目数组
        let hasImageProject = [];
        // 定义没图片的数组
        let NoImageProject = [];
        let data = [...res.data.project];
        for (let i = 0; i < data.length; i++) {
          // 将时间转成毫秒并存入数组
          data[i].endTime = new Date(data[i].completion_time).getTime();
          // 获取项目经验对象中images不为空的项目
          if (data[i].image.length != 0) {
            // 增加index字段作为data数组查找标识
            data[i].index = i;
            hasImageProject.push(data[i]);
          } else {
            data[i].index = i;
            NoImageProject.push(data[i]);
          }
        }
        // 设置是否修改项目经验
        let isModifyProject = '';
        if (res.data.project.length > 0) {
          for (let i = 0; i < res.data.project.length; i++) {
            isModifyProject = res.data.project[i].check;
            if (res.data.project[i].check == '0') {
              break;
            }
          }
        }
        setIsModifyProject(isModifyProject);
        // 是否修改技能证书
        let isModifySkill = '';
        if (res.data.certificates.length) {
          for (let i = 0; i < res.data.certificates.length; i++) {
            isModifySkill = res.data.certificates[i].check;
            if (res.data.certificates[i].check == '0') {
              break;
            }
          }
        }
        setIsModifySkill(isModifySkill);
        // 将有图片的数组与没有图片的数组进行按照时间降序排列
        let sortImageProject = hasImageProject.sort(projectSort("endTime"));
        let sortNoImageProject = NoImageProject.sort(projectSort("endTime"));
        // 组合项目经验对象
        let projectItem = [...sortImageProject, ...sortNoImageProject];
        // 获取排序后的第一个元素
        if (projectItem.length) {
          if (new Date(projectItem[0].completion_time).getTime() / 86400000 < parseInt((new Date().getTime() / 86400000).toString())) {
            // 项目
            if (projectItem.length) {
              projectItem[0].completion_timeTitle = 'zhijing';
            }
          } else {
            projectItem[0].completion_timeTitle = 'zhijin';
          }
        }
        setProjectData([...projectItem]);
        // 是否有人员信息
        setIs_introduces(res.data.is_introduces);
        //最大项目长度
        setProject_count(res.data.project_count);
        // 最大技能长度
        setCertificate_count(res.data.certificate_count);
        // 头像旁边图片显示
        setShow_tips(res.data.content && res.data.content.show_tips || 0);
        // 工作状态
        setSelectData(res.data.status);
        // 工作状态用来选择是正在找工作还是已找到工作
        setCheck(res.data.info.check);
        //人员信息
        let introduces = { ...INTRODUCERS_DATA };
        introduces = { ...introduces, ...res.data.introduces };
        // 修改项目数量
        setProjectNum(res.data.fail_project);
        // 修改技能证书数量
        setCertificatesNum(res.data.fail_certificate);
        setIntroducesData({ ...introduces });
        setCertificates([...res.data.certificates]);
        setResume_top({ ...res.data.resume_top });
        // 存redux
        dispatch(setUseResume({
          info: res.data.info,
          introducesData: res.data.introduces,
          certificates: res.data.certificates,
          projectData: projectItem,
          resume_uuid: res.data.info && res.data.info.uuid || '',
          isSet: true
        }));
      } else {
        Msg(res.errmsg);
      }
    });
  };
  // 获取项目结束时间比较近的项目
  // 排序规则降序排列
  const projectSort = key => {
    return function (objectN, objectM) {
      let valueN = objectN[key];
      let valueM = objectM[key];
      if (valueN < valueM) return 1;else if (valueN > valueM) return -1;else return 0;
    };
  };
  // 工作状态
  const handleSelectData = () => {
    if (check == '2') {
      let selectdataList = [],
          selectdataId = [];
      for (let i = 0; i < selectData.length; i++) {
        selectdataList.push(selectData[i].name);
      }
      for (let i = 0; i < selectData.length; i++) {
        selectdataId.push(selectData[i].id);
      }
      _showActionSheet({
        itemList: selectdataList,
        success(res) {
          if (selectDataIndex == res.tapIndex) {
            return;
          }
          setSelectDataIndex(res.tapIndex);
          resumesEditEndAction({ type: selectdataId[res.tapIndex], resume_uuid: infoData.uuid }).then(res => {
            if (res.errcode == 'ok') {
              ShowActionModal({
                title: '温馨提示',
                msg: res.errmsg
              });
              initResumeData();
            } else {
              ShowActionModal({
                title: '温馨提示',
                msg: res.errmsg
              });
            }
          });
        }
      });
      // 审核中
    } else if (check == '1') {
      ShowActionModal({
        title: '温馨提示',
        msg: "审核中请耐心等待"
      });
      return;
      // 审核未通过
    } else if (check == '0') {
      ShowActionModal({
        title: '温馨提示',
        msg: "审核未通过，请修改信息"
      });
      return;
    }
  };
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
    isModifySkill,
    isModifyProject,
    projectNum,
    certificatesNum
  };
}