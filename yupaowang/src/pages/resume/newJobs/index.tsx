import Taro, { Config, useState, useDidShow, createContext,useEffect } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { AtModal } from "taro-ui"
import { resumeListAction, jobRecommendListAction, resumesGetDataAction, resumesEditEndAction, resumesChangeTopStatusAction, resumesEditImgAction } from '../../../utils/request/index'
import Msg from '../../../utils/msg'
import { useSelector, useDispatch } from '@tarojs/redux'
import UploadImgAction from '../../../utils/upload'
import { IMGCDNURL } from '../../../config'
import { resumesGetData } from '../../../utils/request/index.d'
import { Injected, DataType, introducesType, UserLocationPromiss, UserLastPublishRecruitArea } from './index.d'
import CollectionRecruitList from '../../../components/recommendList'
import { UserLocationCity } from '../../../config/store'
import { AREABEIJING } from '../../../models/area'
import { userAuthLoction } from '../../../utils/helper'
import Auth from '../../../components/auth'
import { setPersonnelAction } from '../../../actions/personnel'
import { setResumeAction } from '../../../actions/resume';
import './index.scss'

export const context = createContext<Injected>({} as Injected)

export default function NewJob() {
  const dispatch = useDispatch()
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])
  const [data, setData] = useState<DataType>({
    info: {
      progress: '0',
      view_num: '0',
      sort_flag: '',
      username: '',
      nation: '',
      tel: '',
      address: '',
      introduce: '',
      note: '',
      is_end: '',
      check: '',
      uuid: '',
      user_uuid: '',
      city: '',
      occupations_id: '',
      occupations: [],
    },
    resume_top: {
      is_top: 0,
      has_top: 0,
      top_provinces_str: [],
      start_time_str: 0,
      end_time_str: '',
      top_tips_string: '',
      is_show_tips: 0,
      end_time: '',
    },
    content: {
      show_tips: 0,
      check_tips_string: ''
    },
    introduces: {
      experience: '',
      type_str: '未填写',
      hometown: '未填写',
      prof_degree_str: '未填写',
      number_people: '未填写',
      tags: [],
    },
    fail_certificate: 0,
    certificate_count: 0,
    fail_project: 0,
    popup_text: [],
    top_status: [],
  })
  //显示分享还是完善基础资料
  const [showcomplete, setShowcomplete] = useState<boolean>(true)
  // 是否有个人资料
  const [showtopone, setShowtopone] = useState<boolean>(false)
  // 
  const [passre, setPassre] = useState<boolean>(true)
  // 用于判断我的工作状态
  const [nopassre, setNopassre] = useState<boolean>(true)
  // 选择工作状态
  const [showpassre, setShowpassre] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const [selectdata, setSelectdata] = useState<string[]>([])
  const [showtop, setShowtop] = useState<boolean>(false)
  // 基础信息状态
  const [checkone, setCheckone] = useState<boolean>(false)
  const [headerimg, setHeaderimg] = useState<string>('')
  const [authenticationimg, setAuthenticationimg] = useState<string>('')
  // 基础信息图片
  const [certificate_show, setCertificate_show] = useState<number>(0)
  // 性别
  const [sex, setSex] = useState<string>('未填写')
  // 年纪
  const [age, setAge] = useState<string>('')
  // 
  const [checkonef, setCheckonef] = useState<string>('')
  // 工种样式修改
  const [showskill, setShowskill] = useState<boolean>(true)
  // const [checkstatus, setCheckstatus] =useState<boolean>(true)
  // 自我介绍样式判断
  const [intro, setIntro] = useState<boolean>(true);
  // 自我介绍样式判断
  const [introne, serIntrone] = useState<boolean>(false)
  // 显示没有数据完善人员信息
  const [selfintro, setselfintro] = useState<boolean>(true)
  // 个人资料审核
  const [ressonone, setRessonone] = useState<boolean>(false)
  // const [showdetail, setShowdetail ] = useState<boolean>(true)
  // 右边图片审核中
  const [checktwo, setChecktwo] = useState<boolean>(false)
  // 是否显示人员信息
  const [selfintrone, setSelfintrone] = useState<boolean>(false)
  // 设置项目长度
  const [projectlength, setProjectlength] = useState<number>(0)
  // 已有项目总长度
  const [project_count, setProject_count] = useState<number>(0)
  // 项目
  const [project, setProject] = useState<any>([])
  // 技能证书长度
  const [skilllength, setSkilllength] = useState<number>(0)
  // 判断是修改还是新增技能
  const [checkfourf, setCheckfourf] = useState<string>('0')
  // 传递修改技能证书
  const [skillData, setSkillData] = useState<any[]>()
  // 传递修改项目经验
  const [projectData, setProjectData] = useState<any[]>()
  // 技能证书
  const [skillbooksone, setSkillbooksone] = useState<any>([])
  // 推荐的列表
  const [recData, setRecData] = useState<any>([])
  // 设置默认地址
  const [area, setArea] = useState<string>(AREABEIJING.name)
  // 工作状态
  // const [isOpened, setIsOpened] = useState<boolean>(false)
  const [resumeTop, setResumeTop] = useState<any>()
  // 工作状态列表
  const [statusList, setStatusList] = useState<any>()
  // 共用数据通过content传递给后面的子页面
  const [publicList, setPublicList] = useState<resumesGetData>({
    gender: [],
    label: [],
    nation: [],
    occupation: [],
    prof_degree: [],
    type: []
  })
  // 人员信息
  const [userInfo, setUserInfo] = useState<introducesType>({
    experience: '',
    type_str: '',
    hometown: '',
    prof_degree_str: '',
    number_people: '',
    tags: [],
  })
  // 选择详细地址信息
  const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
    title: '',
    adcode: '',
    location: '',
    info: ''
  })
  //设置基础信息所在区域
  // const [basicsCity, setBasicsCity] = useState<string>('')
  // 修改还是更多项目经验
  const [proStatus, setProStatus] = useState<string>('0');
  // 提示内容
  const [popup, setPopup] = useState<string>('')
  // 提示弹窗
  const [tips, setTips] = useState<boolean>(false);
  // 置顶提示
  const [toppingModal, setToppingModal] = useState<boolean>(false)
  // 置顶的当前索引
  const [indextop, setIndextop] = useState<number>(0)
  const [frequency, setFrequency] = useState<number>(0)
  useDidShow(() => {
    if (!login) return
    if (frequency>0){
      getDataList();
    }
  })
  useEffect(()=>{
    if (!login) return
    getDataList();
  }, [login])
  const getDataList = ()=>{
    resumeListAction().then(res => {
      if (res.errcode == 200) {
        // 存redux给子页面用
        dispatch(setResumeAction(res.data))
        // 没有登陆需要验证，然后登陆后，大于0就只在useDidShow发请求
        setFrequency(1)
        // 有info.uuid就去掉完善资料
        if (res.data.info.uuid) {
          setShowtop(true)
        }
        Taro.setStorageSync("introinfo", res.data.info)
        setData({ info: res.data.info, resume_top: res.data.resume_top, content: res.data.content, introduces: res.data.introduces, certificate_count: res.data.certificate_count, fail_certificate: res.data.fail_certificate, fail_project: res.data.fail_project, popup_text: res.data.popup_text, top_status: res.data.top_status })
        const list = res.data.status.map(v => v.name);
        // 置顶当前索引
        if (res.data.resume_top.is_top == 1) {
          setIndextop(0)
        } else if (res.data.resume_top.is_top == 0) {
          setIndextop(1)
        }
        // 设置我的工作状态
        if (res.data.info.is_end === '2') {
          setIndex(1);
        }
        setResumeTop(res.data.resume_top);
        // 都通过的情况下，并且正在招人，并且未置顶，提示前往置顶，暂不提示15天内不再提示
        // 没有未通过并且正在找，当前状态未置并且不再15天内
        // 获取存储时间
        const toppingTime = Taro.getStorageSync('toptimer');
        const newTime = new Date().getTime();
        let failProject = '0';
        res.data.project.map((v) => {
          failProject = v.check;
          if (v.check === '0') {
            failProject = '0'
            return
          }
        })
        let failCertificate = '0';
        res.data.certificates.map((v) => {
          failCertificate = v.check;
          if (v.check === '0') {
            failCertificate = '0'
            return
          }
        })
        const onoff = (res.data.resume_top.is_top !== 0 && res.data.resume_top.is_top !== 1) || res.data.resume_top.has_top == 0;
        const top_onoff = res.data.info.check == '0' || res.data.introduces.check == '0' || failProject === '0' || failCertificate === '0';
        const day = (newTime - toppingTime) / 86400000;
        // 没有置顶时间 ，没有审核失败， 有uuid 就是资料完善了的，
        if (!toppingTime && !top_onoff && res.data.info.uuid && onoff && res.data.info.check !== '1' && index === 0) {
          setToppingModal(true);
          Taro.setStorageSync("toptimer", newTime)
        } {
          if (day >= 15 && !top_onoff && res.data.info.uuid && onoff && res.data.info.check !== '1' && index === 0) {
            setToppingModal(true);
            Taro.setStorageSync("toptimer", newTime)
          }
        }
        // 设置城市
        let userLoctionCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
        setArea(userLoctionCity.city);
        if (userLoctionCity) {
          setArea(userLoctionCity.city)
        } else {
          userAuthLoction().then(res => {
            setArea(res.city)
          }).then(() => {
            setArea(AREABEIJING.name)
          })
        }
        //状态列表
        setStatusList(res.data.status);
        //给子页面设置值用reduxszz
        // console.log(res.data.introduces,'res.data.introduces')
        // dispatch(setPersonnelAction(res.data.introduces))
        // setUserInfo(res.data.introduces)
        setSelectdata(list)
        if (res.data.info.uuid && res.data.info.is_introduces != '0' && res.data.project.length != 0 && res.data.certificates.length != 0) {
          setShowcomplete(false)
        } else {
          setShowcomplete(true)
        }
        if (res.data.info.uuid) {
          setShowtopone(true)
        } else {
          setShowtopone(false)
        }
        setShowpassre(true)
        // 设置提示的内容
        let popupData = '';
        for (let i = 0; i < res.data.popup_text.length; i++) {
          if (res.data.popup_text.length - 1 == i) {
            popupData += res.data.popup_text[i]
          } else {
            popupData += res.data.popup_text[i] + "、"
          }
        }
        setPopup(popupData)
        // 判断技能证书全部遍历一次有失败就显示
        let skillType;
        res.data.certificates.map((v) => {
          if (v.check === '1') {
            setCheckfourf(v.check);
            skillType = v.check;
            return;
          }
          skillType = v.check;
          setCheckfourf(v.check);
        })
        // 项目经验遍历有失败就显示修改
        let projectType;
        res.data.project.map((v) => {
          if (v.check === '1') {
            setProStatus(v.check);
            projectType = v.check;
            return;
          }
          projectType = v.check;
          setProStatus(v.check);
        })
        console.log(projectType,'projectType')
        // 设置提示弹窗
        if (skillType === '0' || projectType === '0' || res.data.info.check === '0' || res.data.introduces.check === '0') {
          setTips(true)
        }
        // 人员信息
        if (res.data.is_introduces == '1') {
          setselfintro(false)
          setSelfintrone(true)
        } else if (res.data.is_introduces == '0') {
          setselfintro(true)
          setSelfintrone(false)
        }
        if (data.info.check != '0' || res.data.introduces.check != '0') {
          setRessonone(false)
          setPassre(true)
          setNopassre(true)
        }
        if (data.info.check == '0' || res.data.introduces.check == '0') {
          setRessonone(true)
          setPassre(false)
          setNopassre(true)
        }
        if (data.info.check == '1' || res.data.introduces.check == '1') {
          setRessonone(false)
          setPassre(true)
          setNopassre(false)
        }
        // if (res.data.info.check == "0") {
        //   setPassre(false)
        //   setRessonone(false)
        // }
        // if (res.data.info.check == "1") {
        //   setNopassre(false)
        //   setRessonone(false)
        // }
        if (res.data.info.check == '1') {
          setCheckone(true)
          // setChecktwo(true)
        } else {
          setCheckone(false)
          // setChecktwo(false)
        }
        setChecktwo(res.data.introduces.check == '1' ? true : false)
        if (res.data.certificates.length === 0) {
          setSkilllength(0)
        } else {
          setSkilllength(res.data.certificates.length >= 1 ? res.data.certificates.length : 0)
        }
        // if (showdetail) {
        //   if (res.data.info.check == "0") {
        //     setRessonone(true);
        //   }
        //   setShowdetail(false);
        // }
        if (res.data.project.length === 0) {
          setProjectlength(0)
          setProject([])
          setSkillbooksone([])
        } else {
          setSkillbooksone([res.data.certificates[0]])
          if (res.data.project) {
            if (new Date(res.data.project[0].completion_time).getTime() / 86400000 < new Date().getTime() / 86400000) {
              setProjectlength(res.data.project.length >= 1 ? res.data.project.length : 0)
              const item = res.data.project[0];
              item.completiontime = 'zhijing';
              setProject([item])
            } else {
              const item = res.data.project[0];
              item.completiontime = 'zhijin';
              setProjectlength(res.data.project.length >= 1 ? res.data.project.length : 0)
              setProject([item])
            }
          }
        }
        // 修改技能证书设置redux
        // console.log(res.data.certificates,'res.data.certificatess')
        // dispatch(setSkillDataAction(res.data.certificates))
        // setSkillData(res.data.certificates)
        // 修改项目经验设置redux
        // console.log(res.data.project,'vres.data.project')
        // dispatch(setProjectDataAction(res.data.project))
        // setProjectData(res.data.project)
        setProject_count(res.data.project_count)
        setIntro(false)
        serIntrone(true)
        setHeaderimg(res.data.info.headerimg)
        setShowskill(false)
        setCheckonef(res.data.info.check ? res.data.info.check : '')
        // 基础信息图片
        setAuthenticationimg(res.data.info.authentication)
        // 基础信息图片
        setCertificate_show(res.data.info.certificate_show)
        setSex(res.data.info.gender == "1" ? "男" : "女")
        const date = new Date();
        const dateo = date.getTime()
        const dateone = new Date(dateo);
        if (res.data.info.birthday) {
          if (dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) == 0) {
            setAge('')
          } else {
            setAge(dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) + "岁")
          }
        }
        // 推荐列表
        let paramsList = {
          area_id: res.data.info.city,
          classify_id: res.data.info.occupations_id,
          job_ids: '',
          page: 1,
          type: 1,
        }
        jobRecommendListAction(paramsList).then(res => {
          setRecData(res.data.list)
        })
      } else {
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
        })
        return
      }
    });
    // 给子页面提供公用数据
    resumesGetDataAction().then(res => {
      setPublicList(res);
      // console.log(res,'setPublicListAction')
      dispatch(setPersonnelAction(res))
    })
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  const handleTopping = () => {
    if (!showtop) {
      // 跳去基础信息页面
      Taro.showModal({
        title: '温馨提示',
        content: data.resume_top.top_tips_string,
        confirmText: `去添加`,
        success(res) {
          if (res.confirm) {
            // 跳转
            Taro.navigateTo({
              url: '/pages/clients-looking-for-work/essential-information/esinformation',
            })
            // that.toperfect()
          } else if (res.cancel) {
          }
        }
      })
      return
    } else if (data.resume_top.is_show_tips === 1) {
      Taro.showModal({
        title: '温馨提示',
        content: data.resume_top.top_tips_string,
        showCancel: false,
      })
      return
    } else {
      // 置顶
      Taro.navigateTo({
        url: `/pages/topping/index?rec=1`,
      })
    }
  }
  // 需要传递的值
  const value: Injected = {
    area: area,
    setArea: (city: string) => setArea(city),
    setAreaInfo: (item: UserLastPublishRecruitArea) => setAreaInfo(item),
    setPublishArea: (val: string) => {
      // console.log(areaInfo,'areaInfo');
      // if (!model) return
      // setModel({ ...model, address: val })
      // setBasicsCity(val);
    },
    userInfo: userInfo,
    // 公用值
    publicList: publicList,
    // 修改技能证书
    skillData: skillData,
    // 修改项目经验
    projectData: projectData,
    // 置顶数据
    resumeTop,
    // 所在区域
    // basicsCity: basicsCity,
  }
  //设置工作状态
  const handleStatus = () => {
    if (data.info.check === '2') {
      const sheetList = statusList.map(v => v.name)
      const sheetListId = statusList.map(v => v.id);
      Taro.showActionSheet({
        itemList: sheetList,
        success(res: any) {
          if (index == res.tapIndex) {
            return
          }
          setIndex(res.tapIndex);
          const type = sheetListId[res.tapIndex];
          const params = {
            type,
            resume_uuid: data.info.uuid
          }
          resumesEditEndAction(params).then(res => {
            if (res.errcode == 'ok') {
              Taro.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
              })
            } else {
              Taro.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
              })
            }
          })
        },
        fail(res) {
          console.log(res);
        }
      })
    } else if (data.info.check === '1') {
      Taro.showModal({
        title: '温馨提示',
        content: "审核中请耐心等待",
        showCancel: false,
      })
      return
    } else if (data.info.check === '0') {
      Taro.showModal({
        title: '温馨提示',
        content: "审核未通过，请修改信息",
        showCancel: false,
      })
      return
    }
  }
  // 设置置顶状态
  const handleToppStatus = () => {
    let nowtime = getMyDate(new Date().getTime());
    const endtime = getMyDate(parseInt(data.resume_top.end_time) * 1000);
    if (nowtime > endtime) {
      Taro.showModal({
        title: '温馨提示',
        content: '您的置顶已过期',
        showCancel: false,
      })
      return
    }
    // 获取滑动值
    const sheetList = data.top_status.map(v => v.name)
    // const sheetListId = data.top_status.map(v => v.id);
    //获取当前是否可以置顶
    let contentom = data.resume_top.top_tips_string
    Taro.showActionSheet({
      itemList: sheetList,
      success(res: any) {
        // 当前值一样就不发动请求
        if (indextop == res.tapIndex) {
          return
        }
        if (indextop == 1 && data.resume_top.is_show_tips == 1) {
          Taro.showModal({
            title: '温馨提示',
            content: contentom,
            showCancel: false,
          })
          return
        }
        setIndextop(res.tapIndex);
        let params = {
          uuid: data.info.uuid,
        };
        resumesChangeTopStatusAction(params).then(res => {
          if (res.errcode === 'ok') {

          }
          Taro.showModal({
            title: '温馨提示',
            content: res.errmsg,
            showCancel: false,
          })
        })
      }
    })
  }
  const getMyDate = (str) => {
    const oDate = new Date(str),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth() + 1,
      oDay = oDate.getDate(),
      oHour = oDate.getHours(),
      oMin = oDate.getMinutes(),
      // oSen = oDate.getSeconds(),
      oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' +
        addZero(oMin);
    return oTime;
  }
  const addZero = (num) => {
    if (parseInt(num) < 10) {
      num = '0' + num;
    }
    return num;
  }
  const handelEditTopp = () => {
    let nowtime = getMyDate(new Date().getTime());
    let contentom = data.resume_top.top_tips_string
    const endtime = getMyDate(parseInt(data.resume_top.end_time) * 1000);
    if (nowtime > endtime) {
      Taro.showModal({
        title: '温馨提示',
        content: '您的置顶已过期',
        showCancel: false,
      })
      return
    }
    if (data.resume_top.is_show_tips == 1) {
      Taro.showModal({
        title: '温馨提示',
        content: contentom,
        showCancel: false,
      })
      return
    }
    const area = JSON.stringify(data.resume_top.top_provinces_str);
    const endTime = data.resume_top.end_time;
    const endTimeStr = data.resume_top.end_time_str
    // const maxnumber = data.resume_top.max_number;
    // const firstprovincenum = data.resume_top.first_province_num;
    userRouteJump(`/pages/topping/index?rec=1&type=1&areaData=${area}&endTimes=${endTime}&endTimeStr=${endTimeStr}`)
  }
  // 修改头像
  const userUploadAvatar = () => {
    if (data.info.check == '1') {
      Taro.showModal({
        title: '温馨提示',
        content: '信息审核中，请稍后再试',
        showCancel: false,
      })
      return
    }
    UploadImgAction().then(res => {
      if (res.errcode == 'ok') {
        let params = {
          image: res.url
        }
        resumesEditImgAction(params).then(data => {
          if (data.errcode === '200') {
            Msg('保存成功')
          }

        })
        // userChangeAvatar(res.url).then(data => {
        //   Msg(data.errmsg)
        //   if (data.errcode == 'ok') {
        //     setHeaderImg(res.httpurl)
        //   }
        // })
      } else {
        Msg(res.errmsg)
      }
    }).catch(() => {
      Msg('网络错误，上传失败')
    })

  }
  // 人员信息完善
  const handlePerfect = (url)=>{
    if(!data.info.uuid){
      Taro.showModal({
        title: '温馨提示',
        content: '您未完善基础信息填写,请先填写基础信息',
        showCancel: false,
        success(res) {
          Taro.navigateTo({
            url: '/pages/resume/basics/index',
          })
        }
      })
      return
    }else{
      Taro.navigateTo({
        url,
      })
    }
  }
  console.log(passre, nopassre,'nopassre,nopassre')
  return (
    <context.Provider value={value}>
      <Auth />
      <View className='newJob'>
        {!showtop && <View className='heard'>请完善以下信息</View>}
        <View className='card'>
          <View className="card-otext">
            <Text>名片完善度：</Text>
            <View className="card-otext-lang">
              <View className="card-otext-lang-olang" style={`width:${parseInt(data.info.progress)}%`}></View>
            </View>
            <Text className="card-otext-olangw">{data.info.progress}%</Text>
            <Text className="card-otext-num">{data.info.view_num}</Text>
          </View>
          {/* showcomplete */}
          {showcomplete ?
            <View className="isline">
              <Button className="isline-shareliveone" onClick={() => userRouteJump('/pages/resume/basics/index')}>名片越完善 找活越容易,马上去完善>></Button>
              <Text className="isline-sontwoview">浏览次数</Text>
            </View> :
            <View>
              <Button className="isline-shareliveone">分享找活名片,可提升名片排名度</Button>
              <Text className="isline-sontwoview">浏览次数</Text>
            </View>
          }
          <View className='ranking'>
            <View>
              <Image className='ranking-img' src={`${IMGCDNURL}lpy/biaptu.png`} />
              <Text>我的排名点：{data.info.sort_flag}</Text>
            </View>
            <View className='ranking-go' onClick={() => userRouteJump(`/subpackage/pages/ranking/index`)} >马上去提升排名>></View>
          </View>
          <View className={data.resume_top.is_top === 2 || data.resume_top.has_top == 0 ? 'ranking' : 'ranking-last'}>
            <View>
              <Image className='ranking-img' src={`${IMGCDNURL}lpy/personaltop.png`} />
              <Text>我的置顶:
            {data.resume_top.is_top === 2 && <Text>置顶已过期</Text>}
                {data.resume_top.has_top == 0 && <Text>未置顶</Text>}
              </Text>
            </View>
            {data.resume_top.has_top == 0 &&
              <View className='ranking-go' onClick={handleTopping}>马上去置顶>></View>
            }
            {
              data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
              <View>
                <View className='topselect_box' >
                  <View className='select' onClick={handleToppStatus}>
                    {data.resume_top.has_top == 0 || data.resume_top.is_top == 0 &&
                      <Text className="select_text">未置顶</Text>
                    }
                    {data.resume_top.is_top == 1 &&
                      <Text className='select_text'>置顶中</Text>
                    }
                    <Image className='select_img' src={`${IMGCDNURL}select.png`} />
                  </View>
                </View>
              </View>
            }
          </View>
          {/* wx: if="{{ has_top != 0 && resume_top.is_top != 2}}" */}
          {data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
            <View className="toptime" >
              <View className='toptime-view'>
                <Text>置顶地区</Text>
                {/* wx: for="{{ resume_top.top_provinces_str }}" wx:key="{{ index }}" */}
                {data.resume_top.top_provinces_str.length && data.resume_top.top_provinces_str.map((v, i) => (
                  <Text className='proviceop' key={i + i}>{v.name}</Text>
                ))}
              </View>
            </View>
          }
          {data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
            <View className="toptime">
              <View className='toptime-view'>
                <Text>置顶时间：</Text>
                <Text>{data.resume_top.start_time_str} ~ {data.resume_top.end_time_str}</Text>
              </View>
            </View>
          }
          {data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
            <View className="topdetail">
              <Text onClick={handelEditTopp}>点击修改找活置顶信息>></Text>
            </View>
          }
        </View>
        {/* 基础信息 */}
        <View className='findingnamecardthree'>
          <View className='findingnamecardthreemobile'>
            <View className='findingnamemobile'>
              <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/jichu.png`} />
            </View>
            <View className="findingnamemobileone" onClick={() => userRouteJump(`/pages/topping/index?rec=1`)}>
              <Text>基础信息</Text>
            </View>
          </View>
        </View>
        <View>
          {showtopone &&
            <View className='cardoneson'>
              <View className="cardonesonone">
                <View className='cardonesonone-view'>
                  <Image className='cardonesonone-image' src={`${IMGCDNURL}lpy/workdetail.png`} />
                </View>
                <Text className='cardonesonone-text'>我的工作状态：</Text>
              </View>
              {showpassre &&
                <View className='select_box'>
                  {/* passre&& nopassre */}
                  {passre && nopassre &&
                    <View className='select'
                      onClick={handleStatus}
                    >
                      {index == 0 && <Text className='select_text'>{selectdata[index]}</Text>}
                      {index == 1 && <Text className='select_text'>{selectdata[index]}</Text>}
                      <Image className='select-img' src={`${IMGCDNURL}select.png`} />
                    </View>
                  }
                  {!passre && nopassre &&
                    <View className='select'>
                      <Text className='select_text'>审核未通过</Text>
                    </View>
                  }
                  {passre && !nopassre &&
                    <View className='select'>
                      <Text className='select_text'>人工审核中</Text>
                    </View>
                  }
                </View>
              }
            </View>
          }
          {/* 基本资料 */}
          {/* wx: if="{{ showtopone }}" */}
          {showtopone &&
            <View className="cardcolore">
              <View className="cardtwo" >
                <Image className="link" src={`${IMGCDNURL}lpy/newresume-linktag.png`} />
                <Image className="linkone" src={`${IMGCDNURL}lpy/newresume-linktag.png`} />
                <View className="cardonetwof">
                  {/* wx: if="{{ checkone&& show_tips == 1}}" */}
                  {checkone && data.content.show_tips == 1 && <Image className="checkone" src={`${IMGCDNURL}lpy/audit.png`} />}
                  <View className="cardtwosonone">
                    <View className="cardtwosononeimg">
                      <View className='oimg'>
                        {/* <ImageView images={image.item} max={1} userUploadImg={userUploadImg} /> */}
                        <Image className='oimg-image' src={headerimg} onClick={() => userUploadAvatar()}></Image>
                      </View>
                      <View className="oimgone">
                        <Text className="otext">{data.info.username}</Text>
                        {/* {wx: if="{{ authenticationimg == 2}}"} */}
                        {authenticationimg == '2' &&
                          <Image className='iconImage' src={`${IMGCDNURL}new-list-realname-icon.png`}></Image>
                        }
                        {certificate_show == 1 &&
                          <Image className='iconImage' src={`${IMGCDNURL}new-list-jnzs-icon.png?t=1`}></Image>
                        }
                        <View className="otextone">
                          <Text>{sex}</Text>
                          {age &&
                            <Text className={sex ? 'ochange' : ''} >{age}</Text>
                          }
                          <Text className={age ? 'ochange' : ''}>{data.info.nation}</Text>
                        </View>
                      </View>
                    </View>
                    {!checkone && checkonef != '0' &&
                      <View className="cardtwosontwo">
                        <Text onClick={() => userRouteJump('/pages/resume/basics/index')}>编辑</Text>
                      </View>
                    }
                    {checkonef == '0' &&
                      <View className="cardtwosontwo">
                    <Text onClick={() => userRouteJump('/pages/resume/basics/index')}>待修改</Text>
                      </View>
                    }
                  </View>
                  <View className="lineone">
                    <View className="linezo">
                      <View className='cworkotype'>
                        <View className="ocworkotype">工种</View>
                        <View className="ocworkotypeoo">
                          {/* wx: if="{{!showskill}}" */}
                          {!showskill &&
                            <View className="ocworkotyp">
                              <View className='ocworkotyptu'>
                                {data.info.occupations && data.info.occupations.map((v, i) => (
                                  <View className='ocworkotyptu-list' key={i + i}>{v}</View>
                                ))}
                              </View>
                            </View>
                          }
                          {showskill &&
                            <View className="ocworkotyp">
                              <View className='oimg'>
                                {data.info.occupations && data.info.occupations.map((v, i) => (
                                  <View className='oimg' key={i + i}>{v}</View>
                                ))}
                              </View>
                            </View>
                          }
                        </View>
                      </View>
                      <View className="cardotext">
                        <Text className="oworkotext">手机</Text>
                        <Text className="workotextone">{data.info.tel}</Text>
                      </View>
                      <View className="cardotext">
                        <Text className="oworkotext">所在地区</Text>
                        <Text className="workotextone">{data.info.address}</Text>
                      </View>
                      <View className="cardotext">
                        <Text className="oworkotext">自我介绍</Text>
                        {/* <Text className="workotextone">{data.info.address}</Text> */}
                      </View>
                    </View>
                  </View>
                  {/* intro */}
                  {intro && <View className="content" >{data.info.introduce}</View>}
                  {/* introne */}
                  {introne && <View className="contentone">{data.info.introduce}</View>}
                </View>
              </View>
            </View>
          }
          {ressonone &&
            <View className="cardcoloreno">
              <View className="nopass">
                <Text className='nopass-text'>个人资料审核失败原因：</Text> {data.info.note}
              </View>
            </View>
          }
        </View>
        {/*   没有信息 */}
        {!showtop &&
          <View className="cardcolore">
            <View className="findingnamecardtwo">
              <Text className="findingnamecardtwothree">您还没有完善基础信息</Text>
              <View className="findingnamecardtwofour" onClick={() => userRouteJump('/pages/resume/basics/index')}>去完善</View>
            </View>
          </View>
        }
        {/* 人员信息 */}
          <View className='findingnamecardthree'>
            <View className='findingnamecardthreemobile'>
              <View className='findingnamemobile'>
                <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-description.png`} />
              </View>
              <View className="findingnamemobileone">
                <Text>人员信息</Text>
              </View>
            {selfintrone && <View>
                {!checktwo && checkonef != '0' &&
                  <View className="cardthreeone" onClick={() => userRouteJump('/subpackage/pages/personInfo/index?type=1')}>编辑</View>
                }
                {!checktwo && checkonef == '0' &&
                <View className="cardthreeone" onClick={() => userRouteJump('/subpackage/pages/personInfo/index?type=1')} >待修改</View>
                }
              </View>
              }
            </View>
          </View>
        {/* 有信息 */}
        {selfintrone &&
          <View className='cardcolore'>
            <View className='cardtwoif'>
              {/*  wx: if="{{ checktwo&& show_tips == 1}}" */}
              {checktwo && data.content.show_tips == 1 &&
                <Image className="checktwo" src={`${IMGCDNURL}lpy/audit.png`} />
              }
              <View className="lineone">
                <View className="linezo">
                  <View className="cardotext">
                    <Text className="oworkotext">工龄</Text>
                    <Text className="workotextone">{data.introduces.experience}年</Text>
                  </View>
                  <View className="cardotext">
                    <Text className="oworkotext">人员构成</Text>
                    <Text className="workotextone">{data.introduces.type_str}</Text>
                  </View>
                  <View className="cardotext">
                    <Text className="oworkotext">我的家乡</Text>
                    <Text className="workotextone">{data.introduces.hometown}</Text>
                  </View>
                  <View className="cardotext">
                    <Text className="oworkotext">熟练度</Text>
                    <Text className="workotextone">{data.introduces.prof_degree_str}</Text>
                  </View>
                  {data.introduces.number_people !== '1' &&
                    <View className="cardotext">
                      <Text className="oworkotext">队伍人数</Text>
                      <Text className="workotextone">{data.introduces.number_people}</Text>
                    </View>
                  }
                  <View className="cardotext">
                    <Text className="oworkotext">标签</Text>
                    <View className="alllabletu">
                      {data.introduces.tags && data.introduces.tags.map((v, i) => (
                        <Text className='labletu' key={i + i}>{v.label_name}</Text>
                      ))}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        }
        {/* {!ressonone && 
        <View className="cardcoloreno">
          <View className="nopass">
            <Text className='nopass-text'>个人资料审核失败原因：</Text> { data.info.note }
          </View>
        </View>
      } */}
        {/*   没有信息 */}
        {selfintro &&
          <View className="cardcolore">
            <View className="findingnamecardtwo">
              <Text className="findingnamecardtwothree">完善人员信息，能让老板充分了解您或您的队伍</Text>
            <View className="findingnamecardtwofour" onClick={()=>handlePerfect('/subpackage/pages/personInfo/index')}>去完善</View>
            </View>
          </View>
        }
        {/* 项目经验 */}
        <View className="findingnamecardthree">
          <View className="findingnamecardthreemobile">
            <View className="findingnamemobile">
              <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-experience.png`} />
            </View>
            <View className="findingnamemobileone">
              <Text>项目经验</Text>
            </View>
            {projectlength != 0 && projectlength < project_count &&
              <View className="cardthreeone" onClick={() => userRouteJump(`/pages/resume/addProject/index?id=${data.info.uuid}`)}>
                添加
            </View>}
          </View>
        </View>
        {/*   没有信息 */}
        {projectlength == 0 &&
          <View className="cardcolore">
            <View className="findingnamecardtwo">
              <Text className="findingnamecardtwothree">添加项目经验，可提升老板对您的信任程度</Text>
            <View className="findingnamecardeighttwo" onClick={() => handlePerfect(`/pages/resume/addProject/index?id=${data.info.uuid}`)}>添加项目经验</View>
            </View>
          </View>
        }
        {/* wx: if="{{ projectlength != 0}}" */}
        {projectlength != 0 &&
          <View className='cardcolore'>
            <View className="cardsix">
              {project && project.map((item: any) => (
                <View className='cardsixzong' key={item.id}>
                  {/* wx: if="{{ item.check == 1 && show_tips == 1 }}" */}
                  {item.check == 1 && data.content.show_tips == 1 &&
                    <Image className="checkthree" src={`${IMGCDNURL}lpy/audit.png`} />
                  }
                  {/* wx: if="{{ item.check == 2 }}" */}
                  {/* bindtap="editor" data-uid="{{ item }}" */}
                  {item.check == 2 &&
                    <View className="editor" onClick={() => userRouteJump(`/pages/resume/addProject/index?type=0&id=${data.info.uuid}`)}>编辑</View>
                  }
                  {item.check == 0 &&
                    <View className="editor" onClick={() => userRouteJump(`/pages/resume/addProject/index?type=0&id=${data.info.uuid}`)}>待修改</View>
                  }
                  {/* wx: if="{{ item.check == 0 }}" */}
                  {item.check == 0 &&
                    <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`} />
                  }
                  {/* item.check == 1&&show_tips == 0 */}
                  {item.check == 1 && data.content.show_tips == 0 &&
                    <Image className="audit" src={`${IMGCDNURL}lpy/review.png`} />
                  }
                  <View>
                    <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className="cardsixone" />
                  </View>
                  <View className="cardsixall">
                    <View className="cardsixtwo">
                      <Text>{item.project_name}</Text>
                    </View>
                    <View className="cardsixthreeborder">
                      <View className="cardsixthree">
                        <Text className='cardsixthree-text'>{item.start_time}-{item.completiontime == "zhijin" ? "至今" : item.completion_time}</Text>
                        {/*  wx: if="{{ item.city_name }}" */}
                        {item.city_name &&
                          <Text className='cardsixthree-text'>{item.province_name}-{item.city_name}</Text>
                        }
                        {/* wx: if="{{!item.city_name}}" */}
                        <Text className='cardsixthree-text'>{item.province_name}</Text>
                      </View>
                    </View>
                    <View className="cardsixfour">
                      <Text className='cardsixthree-text'>{item.detail}</Text>
                    </View>
                    <View className="cardsixfive">
                      {/* wx: for="{{ item.image }}" */}
                      {item.image && item.image.map((v, i) => (
                        <Image className='cardsixfive-image' src={v} key={i + i} />
                      ))}
                      {/* <Image  data-url="{{ item }}" catchtap="previewImage" wx:key="{{ index }}" src="{{ item }}" data-index="{{ pindex }}"/> */}
                    </View>
                    {item.check == 0 &&
                      <View className='resson'>
                        未通过原因：{item.fail_case}
                      </View>
                    }
                  </View>
                </View>
              ))}
              <View className="cardsixsixall">
                <View className="cardsixsix">
                  <View className="more" onClick={() => userRouteJump(`/pages/resume/projectList/index?id=${data.info.uuid}`)}>
                    {proStatus !== '0' ? '更多项目经验' : '修改项目经验'}
                    <View className='more-view'>
                      <Image src={`${IMGCDNURL}lpy/downward.png`} className="down" />
                    </View>
                  </View>
                  {data.fail_project !== 0 && <Text className='num'>{data.fail_project}</Text>}
                </View>
              </View>
            </View>
          </View>}
        {/* 职业技能  */}
        <View className='findingnamecardthree'>
          <View className='findingnamecardthreemobile'>
            <View className='findingnamemobile'>
              <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-skill.png`} />
            </View>
            <View className="findingnamemobileone">
              <Text>职业技能</Text>
            </View>
            {
              skilllength != 0 && skilllength < data.certificate_count &&
              <View className='cardthreeone' onClick={() => userRouteJump(`/pages/resume/addSkill/index?id=${data.info.uuid}`)}> 添加 </View>
            }
          </View>
        </View>
        {/*   没有信息 */}
        {skilllength == 0 &&
          <View className="cardcolore">
            <View className="findingnamecardtwo">
              <Text className="findingnamecardtwothree">添加职业技能，用实力证明您的能力</Text>
            <View className="findingnamecardeighttwo" onClick={() => handlePerfect(`/pages/resume/addSkill/index?id=${data.info.uuid}`)}>添加职业技能</View>
            </View>
          </View>
        }
        {/* 有职业技能 */}
        {skilllength != 0 &&
          <View className="cardcolore">
            <View className="cardeight">
              {skillbooksone && skillbooksone.map((item: any, i) => (
                <View className='cardeightzong' key={i + i}>
                  {item.check == 1 && data.content.show_tips == 1 &&
                    <Image className="checkfour" src={`${IMGCDNURL}lpy/audit.png`} />
                  }
                  {/* { item.check == 1 && data.content.show_tips == 1 &&  */}
                  <View className='cardeightzong'>
                    <Image src={item.audit} className='checkfour' />
                    {/* wx: if="{{ item.check == 2 }}" */}
                    {item.check == 2 && <View className="editor" onClick={() => userRouteJump(`/pages/resume/addSkill/index?type=${i}&id=${data.info.uuid}`)}>编辑</View>}
                    {item.check == 0 && <View className="editor" onClick={() => userRouteJump(`/pages/resume/addSkill/index?type=${i}&id=${data.info.uuid}`)}>待修改</View>}
                    {item.check == 0 && <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`} />}
                    {/* {item.check == 1 && <Image className="audit" src={`${IMGCDNURL}lpy/review.png`} />} */}
                    <View>
                      <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className="cardeightone" />
                    </View>
                    <View className="cardeightall">
                      <View className="cardeighttwo">
                        <Text className='cardeighttwo-title'>{item.name}</Text>
                      </View>
                      <View className="certificatetime">
                        <Text className='cardeighttwo-text'>{item.certificate_time}</Text>
                      </View>
                      <View className="cardeightfive">
                        {item.image && item.image.map((v, i) => (
                          <Image className='cardeightfive-image' src={v} key={i + i} />
                        ))}
                      </View>
                      {item.check == 0 && <View className='resson'>
                        未通过原因：{item.fail_case}
                      </View>}

                    </View>
                  </View>
                  {/* } */}
                </View>
              ))}
              <View className="cardeightsixall">
                <View className="cardeightsix">
                  {checkfourf != '0' &&
                    <View className="more" onClick={() => userRouteJump(`/pages/resume/skillList/index?id=${data.info.uuid}`)}>
                      更多技能证书
                  <View className='more-view'>
                        <Image src={`${IMGCDNURL}lpy/downward.png`} className="down" />
                      </View>
                    </View>
                  }
                  {checkfourf == '0' && <View className='more' onClick={() => userRouteJump(`/pages/resume/skillList/index?id=${data.info.uuid}`)}>
                    修改技能证书
                <View className='more-view'>
                      <Image src={`${IMGCDNURL}lpy/downward.png`} className="down" />
                    </View>
                    {data.fail_certificate > 0 && <Text className='num'>{data.fail_certificate}</Text>}
                  </View>}
                </View>
              </View>
            </View>
          </View>
        }
        {recData.length &&
          <CollectionRecruitList type={1} data={recData} />
        }
        {/* 底部 */}
        {showtopone &&
          <View className="cardnine">
            <Button className="cardnineone" onClick={() => userRouteJump(`/pages/resume/preview/index`)}>
              <Image className='cardnineone-image' src={`${IMGCDNURL}lpy/bottom-one.png`} /> 预览
          </Button>
            <Button className="cardnineone">
              <Image className='cardnineone-image' src={`${IMGCDNURL}lpy/bottom-two.png`} /> 分享
          </Button>
          </View>
        }
        {/* 提示 */}
        <AtModal isOpened={tips} className='AtModal'>
          <View className='content'>
            <View className='content-otext'>提示</View>
            <View className='content-text'>您的<Text className='popup'>{popup}</Text>未审核通过,请修改后再进行提交</View>
            <View className='buttontext' onClick={() => { setTips(false) }}>确定</View>
          </View>
        </AtModal>
        {/* 置顶 */}
        <AtModal isOpened={toppingModal} className='AtModal'>
          <View className='content'>
            <View><Image src={`${IMGCDNURL}lpy/resume-settop-daytips.png`} className='content-image' /></View>
            <View className='content-otext'>提示</View>
            <View className='content-toppding'>马上去置顶提升找活名片排名，让更多老板看到您的找活名片</View>
            {/* <View className='buttontext' onClick={() => { setTips(false) }}>确定</View> */}
            <View className='content-btn-box'>
              {/* 都通过的情况下，并且正在招人，并且未置顶，提示前往置顶，暂不提示15天内不再提示 */}
              <View className='content-btn-left' onClick={() => { setToppingModal(false) }}>稍后再说</View>
              <View className='content-btn-right' onClick={() => userRouteJump(`/pages/topping/index?rec=1`)}>去置顶</View>
            </View>
          </View>
        </AtModal>
      </View>
    </context.Provider>
  )
}
NewJob.config = {
  navigationBarTitleText: '找活名片',
} as Config
