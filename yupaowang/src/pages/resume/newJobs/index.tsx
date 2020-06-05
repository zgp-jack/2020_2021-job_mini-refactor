import Taro, { Config, useState, useDidShow, createContext } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { AtModal} from "taro-ui"
import { resumeListAction, jobRecommendListAction, resumesGetDataAction, resumesEditEndAction, resumesChangeTopStatusAction, resumesEditImgAction } from '../../../utils/request/index'
import Msg from '../../../utils/msg'
import UploadImgAction from '../../../utils/upload'
import { IMGCDNURL } from '../../../config'
import { ResumeTopStr, resumesGetData, resumeListDataTopStatus } from '../../../utils/request/index.d'
import CollectionRecruitList  from '../../../components/recommendList'
import { UserInfo } from '../../../config/store'
import { AREABEIJING } from '../../../models/area'
import './index.scss'

export interface ImageDataType {
  item: ImageItem[]
}
export interface ImageItem {
  url: string,
  httpurl: string
}
interface introducesType {
  experience: string,
  type_str: string,
  hometown: string,
  prof_degree_str: string,
  number_people: string,
  tags: introducesTags[],
}
interface DataType {
  info:{
    progress:string,
    view_num:string,
    sort_flag:string,
    username:string,
    nation:string,
    occupations:[],
    tel:string,
    address:string,
    introduce:string,
    note:string,
    is_end:string,
    check:string,
    uuid:string,
  },
  resume_top:{
    is_top:number,
    has_top: number,
    top_provinces_str: ResumeTopStr[],
    start_time_str:number,
    end_time_str:number,
    top_tips_string:string,
    is_show_tips:number
  },
  content:{
    show_tips:number,
    check_tips_string:string,
  },
  introduces: introducesType
  certificate_count:number,
  fail_certificate:number,
  fail_project:number,
  popup_text:string[],
  top_status: resumeListDataTopStatus[]
}
interface introducesTags {
  label_name:string,
}
// interface CertificatesObj {
//   check:string
// }
// 最后发布地区
export interface UserLastPublishRecruitArea {
  location: string,
  adcode: string,
  title: string,
  info: string
}

interface Injected {
  area: string, // 城市名称
  userInfo:any, // 个人信息
  publicList: resumesGetData,//公用值
  skillData:any,//修改技能证书
  projectData:any, //修改项目经验 
  // basicsCity:string,//选择区域
  setArea: (city: string) => void, //设置城市名称
  setAreaInfo?: (item: UserLastPublishRecruitArea) => void, // 用户点击的小地址信息
  setPublishArea?: (val: string) => void //设置最后一次点击 城市的名字
}
interface User {
  userId: number,
  tokenTime: number,
  token: string,
  uuid: string,
  login: boolean
}
export const context = createContext<Injected>({} as Injected)

export default function NewJob() {
  let userInfoObj: User = Taro.getStorageSync(UserInfo)
  const [data,setData] = useState<DataType>({
    info:{
      progress:'0',
      view_num:'0',
      sort_flag:'',
      username:'',
      nation:'',
      tel:'',
      address:'',
      introduce:'',
      note:'',
      is_end:'',
      check:'',
      uuid:'',
      occupations:[],
    },
    resume_top:{
      is_top: 0,
      has_top: 0,
      top_provinces_str:[],
      start_time_str:0,
      end_time_str:0,
      top_tips_string:'',
      is_show_tips:0,
    },
    content:{
      show_tips:0,
      check_tips_string:''
    },
    introduces:{
      experience:'',
      type_str:'未填写',
      hometown: '未填写',
      prof_degree_str:'未填写',
      number_people:'未填写',
      tags:[],
    },
    fail_certificate:0,
    certificate_count:0,
    fail_project:0,
    popup_text:[],
    top_status:[],
  })
  const [showcomplete, setShowcomplete ] = useState<boolean>(true)
  const [showtopone, setShowtopone] = useState<boolean>(false)
  const [passre, setPassre] = useState<boolean>(true)
  const [nopassre, setNopassre] = useState<boolean>(true)
  const [showpassre, setShowpassre] = useState<boolean>(false)
  const [index ,setIndex ] = useState<number>(0)
  const [selectdata, setSelectdata] = useState<string[]>([])
  const [showtop, setShowtop] =useState<boolean>(false)
  const [checkone, setCheckone] = useState<boolean>(false)
  const [headerimg, setHeaderimg] = useState<string>('')
  const [authenticationimg, setAuthenticationimg] = useState<string>('')
  const [certificate_show, setCertificate_show] = useState<number>(0)
  const [sex,setSex] = useState<string>('未填写')
  const [age,setAge] = useState<string>('')
  const [checkonef, setCheckonef] = useState<string>('4568')
  const [showskill, setShowskill] = useState<boolean>(true)
  const [occupations, setOccupations] = useState<string[]> ([])
  const [checkstatus, setCheckstatus] =useState<boolean>(true)
  const [intro, setIntro ] = useState<boolean>(true);
  const [introne, serIntrone] = useState<boolean>(false)
  // 显示没有数据完善人员信息
  const [selfintro, setselfintro] =useState<boolean>(true)
  // 个人资料审核
  const [ressonone, setRessonone] = useState<boolean>(false)
  const [showdetail, setShowdetail] = useState<boolean>(true)
  const [checktwo, setChecktwo] = useState<boolean>(false)
  const [selfintrone, setSelfintrone] = useState<boolean>(false)
  const [projectlength, setProjectlength] = useState<number>(0)
  const [project_count, setProject_count] = useState<number>(0)
  const [project,setProject] = useState<any>([])
  const [skilllength, setSkilllength] = useState<number>(0)
  const [checkfourf, setCheckfourf] = useState<string>('0')
  // 传递修改技能证书
  const [skillData, setSkillData] = useState<any[]>()
  // 传递修改项目经验
  const [projectData, setProjectData] = useState<any[]>()
  // 技能证书
  const [skillbooksone, setSkillbooksone] = useState<any>([])
  // 推荐的列表
  const [recData,setRecData] = useState<any>([])
  const [area, setArea] = useState<string>(AREABEIJING.name)
  // 工作状态
  const [isOpened, setIsOpened] = useState<boolean>(false)
  // 工作状态列表
  const [statusList, setStatusList] = useState<any>()
  const [publicList, setPublicList] = useState<resumesGetData>({
    gender: [],
    label: [],
    nation: [],
    occupation:[],
    prof_degree:[],
    type:[]
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
  const [basicsCity, setBasicsCity] = useState<string>('')
  // 修改还是更多项目经验
  const [proStatus, setProStatus] = useState<string>('0');
  // 提示内容
  const [popup, setPopup] = useState<string>('')
  // 提示弹窗
  const [tips,setTips] = useState<boolean>(false);
  // 置顶提示
  const [toppingModal, setToppingModal] = useState<boolean>(false)
  // 置顶的当前索引
  const [indextop, setIndextop] = useState<number>(0)
  useDidShow(()=>{
    resumeListAction().then(res=>{
      console.log(res);
      if(res.errcode == "200"){
        Taro.setStorageSync("introinfo", res.data.info)
        setData({ info: res.data.info, resume_top: res.data.resume_top, content: res.data.content, introduces: res.data.introduces, certificate_count: res.data.certificate_count, fail_certificate: res.data.fail_certificate, fail_project: res.data.fail_project, popup_text: res.data.popup_text, top_status: res.data.top_status })
        const list = res.data.status.map(v=>v.name);
        // 置顶当前索引
        if(res.data.resume_top.is_top == 1){
          setIndextop(0)
        } else if (res.data.resume_top.is_top == 0){
          setIndextop(1)
        }
        // 设置我的工作状态
        if(res.data.info.is_end === '2'){
          setIndex(1);
        }
        // 设置城市
        setArea(res.data.info.city);
        //状态列表
        setStatusList(res.data.status);
        setUserInfo(res.data.introduces)
        setSelectdata(list)
        if (res.data.info.uuid && res.data.info.is_introduces != '0' && res.data.project.length != 0 && res.data.certificates.length != 0 ){
          setShowcomplete(false)
        }else{
          setShowcomplete(true)
        }
        if(res.data.info.uuid){
          setShowtopone(true)
        }else{
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
        res.data.certificates.map((v)=>{
          if (v.check === '1'){
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
        // 设置提示弹窗
        if (skillType === '0' || projectType === '0' || res.data.info.check === '0' || res.data.introduces.check === '0'){
          setTips(true)
        }
        // 人员信息
        if (res.data.is_introduces == '1'){
          setselfintro(false)
          setSelfintrone(true)
        } else if (res.data.is_introduces == '0') {
          setselfintro(true)
          setSelfintrone(true)
        }
        if (res.data.info.check == "0") {
          setPassre(false)
          setRessonone(false)
        }
        if (res.data.info.check == "1"){
          setNopassre(false)
          setRessonone(false)
        }
        if (res.data.info.check == '1'){
          setCheckone(true)
          setChecktwo(true)
        }else{
          setCheckone(false)
          setChecktwo(false)
        }
        if (res.data.certificates.length === 0){
          setSkilllength(0)
        }else{
          setSkilllength( res.data.certificates.length >= 1 ? res.data.certificates.length : 0)
        }
        if (showdetail){
          if (res.data.info.check == "0") {
            setRessonone(true);
          }
          setShowdetail(false);
        }
        if (res.data.project.length === 0){
          setProjectlength(0)
          setProject([])
          setSkillbooksone([])
        }else{
          setSkillbooksone([res.data.certificates[0]])
          if (res.data.project){
            if (new Date(res.data.project[0].completion_time).getTime() / 86400000 < new Date().getTime() / 86400000){
              setProjectlength(res.data.project.length >= 1 ? res.data.project.length : 0)
              const item = res.data.project[0];
              item.completiontime = 'zhijing';
              setProject([item])
            }else {
              const item = res.data.project[0];
              item.completiontime = 'zhijin';
              setProjectlength(res.data.project.length >= 1 ? res.data.project.length : 0)
              setProject([item])
            }
          }
        }
        // 修改技能证书
        setSkillData(res.data.certificates)
        // 修改项目经验
        setProjectData(res.data.project)
        setProject_count(res.data.project_count)
        setIntro(false)
        serIntrone(true)
        setHeaderimg(res.data.info.headerimg)
        setShowskill(false)
        setCheckonef(res.data.info.check)
        setAuthenticationimg(res.data.info.authentication)
        setCertificate_show(res.data.info.certificate_show)
        setSex(res.data.info.gender == "1" ? "男" : "女")
        const date = new Date();
        const dateo = date.getTime()
        const dateone = new Date(dateo);
        if (res.data.info.birthday){
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
      }else{
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
        })
        return
      }
    });
    // 给子页面提供公用数据
    resumesGetDataAction().then(res=>{
      console.log(res,'公用数据')
      setPublicList(res);
    })
  })
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  const handleTopping = ()=>{
    if (showtop){
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
    } else if (data.resume_top.is_show_tips === 1){
      Taro.showModal({
        title: '温馨提示',
        content: data.resume_top.top_tips_string,
        showCancel: false,
      })
      return
    }else{
      // 置顶
      Taro.navigateTo({
        url: `/pages/topping/index?rec=1`,
      })
    }
  }
  console.log(area,'area23123')
  // 需要传递的值
  const value:Injected = {
    area: area,
    setArea: (city: string) => setArea(city),
    setAreaInfo: (item: UserLastPublishRecruitArea) => setAreaInfo(item),
    setPublishArea: (val: string) => {
      console.log(val,'val')
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
    // 所在区域
    // basicsCity: basicsCity,
  }
  //设置工作状态
  const handleStatus = ()=>{
    if (data.info.check === '2'){
      console.log(1111);
      const sheetList = statusList.map(v=>v.name)
      const sheetListId = statusList.map(v => v.id);
      Taro.showActionSheet({
        itemList: sheetList,
        success(res:any) {
          if (index == res.tapIndex) {
            return
          }
          setIndex(res.tapIndex);
          const type = sheetListId[res.tapIndex];
          const params = {
            type,
            resume_uuid:userInfoObj.uuid
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
        }
      })
    } else if (data.info.check === '1'){
      Taro.showModal({
        title: '温馨提示',
        content: "审核中请耐心等待",
        showCancel: false,
      })
      return
    } else if (data.info.check === '0'){
      Taro.showModal({
        title: '温馨提示',
        content: "审核未通过，请修改信息",
        showCancel: false,
      })
      return
    }
  }
  // 设置置顶状态
  const handleToppStatus = ()=>{
    let nowtime = new Date().getTime();
    let endtime = data.resume_top.end_time_str;
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
    const sheetListId = data.top_status.map(v => v.id);
    //获取当前是否可以置顶
    let contentom = data.resume_top.top_tips_string
    Taro.showActionSheet({
      itemList: sheetList,
      success(res:any) {
        // 当前值一样就不发动请求
        if (indextop == res.tapIndex) {
          return
        }
        if(indextop == 1 && data.resume_top.is_show_tips == 1){
          Taro.showModal({
            title: '温馨提示',
            content: contentom,
            showCancel: false,
          })
          return
        }
        setIndextop(res.tapIndex);
        let params={
          uuid: data.info.uuid,
        };
        resumesChangeTopStatusAction(params).then(res=>{
          if(res.errcode === 'ok'){
            
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
  const handelEditTopp = ()=>{
    let nowtime = new Date().getTime();
    let endtime = data.resume_top.end_time_str;
    let contentom = data.resume_top.top_tips_string
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
  }
  // 修改头像
  const userUploadAvatar = () => {
    if (data.info.check == '1'){
      Taro.showModal({
        title: '温馨提示',
        content: '信息审核中，请稍后再试',
        showCancel: false,
      })
      return
    }
    UploadImgAction().then(res => {
      if (res.errcode == 'ok') {
        let params ={
          image: res.url
        }
        resumesEditImgAction(params).then(data=>{
          if(data.errcode === '200'){
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
  return (
    <context.Provider value={value}>
    <View className='newJob'>
      {showtop && <View className='heard'>请完善以下信息</View>}
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
        {showcomplete?
        <View className="isline">
          <Button className="isline-shareliveone">名片越完善 找活越容易,马上去完善>></Button>
          <Text className="isline-sontwoview">浏览次数</Text>
        </View>:
        <View>
          <Button className="isline-shareliveone">分享找活名片,可提升名片排名度</Button>
          <Text className="isline-sontwoview">浏览次数</Text>
        </View>
        }
        <View className='ranking'>
          <View>
            <Image className='ranking-img' src={`${IMGCDNURL}lpy/biaptu.png`}/>
            <Text>我的排名点：{ data.info.sort_flag }</Text>
          </View>
          <View className='ranking-go' onClick={() => userRouteJump(`/subpackage/pages/ranking/index`)} >马上去提升排名>></View>
        </View>
        <View className={data.resume_top.is_top === 2 || data.resume_top.has_top == 0 ? 'ranking' :'ranking-last'}>
          <View>
            <Image className='ranking-img' src={`${IMGCDNURL}lpy/personaltop.png`} />
            <Text>我的置顶:
            {data.resume_top.is_top === 2 && <Text>置顶已过期</Text>}
            {data.resume_top.has_top == 0 && <Text>未置顶</Text>}
            </Text>
          </View>
          {data.resume_top.has_top == 0 || data.resume_top.is_top == 2 && 
            <View className='ranking-go' onClick={handleTopping}>马上去置顶>></View>
          }
          {
            data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
            <View>
              <View className='topselect_box' >
                <View className='select' onClick={handleToppStatus}>
                  {/*  wx: if="{{ has_top == 0 || resume_top.is_top == 0}}" */}
                  {data.resume_top.has_top == 0 || data.resume_top.is_top == 0 &&
                    <Text className="select_text">未置顶</Text>
                  }
                  {/* wx: if="{{ resume_top.is_top == 1 }}" */}
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
        {data.resume_top.has_top !=0 && data.resume_top.is_top !=2 &&
        <View className="toptime" >
          <View className='toptime-view'>
            <Text>置顶地区</Text>
            {/* wx: for="{{ resume_top.top_provinces_str }}" wx:key="{{ index }}" */}
            {data.resume_top.top_provinces_str && data.resume_top.top_provinces_str.map((v,i)=>(
              <Text className='proviceop' key={i+i}>{v.name}</Text>
            ))}
          </View>
        </View>
        }
        {data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
          <View className="toptime">
            <View className='toptime-view'>
              <Text>置顶时间：</Text>
              <Text>{data.resume_top.start_time_str } ~ { data.resume_top.end_time_str }</Text>
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
              <Image className='cardonesonone-image' src={`${IMGCDNURL}lpy/workdetail.png`}/>
            </View>
            <Text className='cardonesonone-text'>我的工作状态：</Text>
          </View>
          {showpassre && 
            <View className='select_box'>
            {/* passre&& nopassre */}
            {passre && nopassre && 
                <View className='select' 
                  // onClick={()=>setIsOpened(true)}
                onClick={handleStatus}
                  >
                {/* <AtActionSheet 
                  onCancel={()=>handleSheetItem()} 
                  isOpened={isOpened} 
                  onClose={()=>handleSheetItem()} 
                  cancelText='取消'
                  >
                  {statusList && statusList.map(v=>(
                    <AtActionSheetItem onClick={()=>handleStatus(v)}>{v.name}</AtActionSheetItem>
                  ))}
                </AtActionSheet> */}
                {/* <Picker
                  mode='selector'
                  onChange={(e) => { handelPicker(e.detail.value) }}
                  value={working}
                  range={['a','b','c']}
                >
                </Picker>> */}
              {/* <text class='select_text' wx: if="{{ index == 0}}">{{ selectData[index].name }}</text>
              <text class='select_text' wx: if="{{ index== 1}}">{{ selectData[index].name }}</text>
              <image class='select_img' src='{{subscripted}}' wx: if="{{ checkstatus }}"></image> */}
              {index == 0 && <Text className='select_text'>{selectdata[index]}</Text>}
              {index == 1 && <Text className='select_text'>{selectdata[index]}</Text>}
              {/* wx: if="{{ checkstatus }}" */}
              {checkstatus && 
              <Image className='select-img' src={`${IMGCDNURL}select.png`} />
              }
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
        <View className="cardcolore">
          {/* wx: if="{{ showtopone }}" */}
          {showtopone &&
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
                  <Text onClick={() => userRouteJump('/subpackage/pages/basics/index')}>编辑</Text>
                    </View>
                  }
                  {checkonef == '0' &&
                    <View className="cardtwosontwo">
                      <Text>待修改</Text>
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
                                    <View key={i + i}>{v}</View>
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
            </View>}
        </View>
        {ressonone && 
          <View className="cardcoloreno">
            <View className="nopass">
              <Text className='nopass-text'>个人资料审核失败原因：</Text> {data.info.note}
            </View>
          </View>
        }
        </View>
      {/*   没有信息 */}
      {showtop && 
      <View className="cardcolore">
        <View className="findingnamecardtwo">
      <Text className="findingnamecardtwothree">您还没有完善基础信息</Text>
        <View className="findingnamecardtwofour">去完善</View>
      </View>
      </View>
      }
        {/* 人员信息 */}
      {selfintrone  && 
      <View className='findingnamecardthree'>
        <View className='findingnamecardthreemobile'>
          <View className='findingnamemobile'>
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-description.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>人员信息</Text>
          </View>
          {!checktwo && checkonef != '0' && 
              <View className="cardthreeone" onClick={() => userRouteJump('/subpackage/pages/personInfo/index') }>编辑</View>
          }
          {!checktwo && checkonef == '0' &&
            <View className="cardthreeone" >待修改</View>
          }
        </View>
      </View>
      }
      {/* 有信息 */}
      {selfintrone && 
      <View className='cardcolore'>
          <View className='cardtwoif'>
          {/*  wx: if="{{ checktwo&& show_tips == 1}}" */}
          {checktwo && data.content.show_tips == 1 && 
          <Image className="checktwo" src={`${IMGCDNURL}lpy/audit.png`}/>
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
              {data.introduces.number_people !=='1' && 
              <View className="cardotext">
                <Text className="oworkotext">队伍人数</Text>
                <Text className="workotextone">{data.introduces.number_people}</Text>
              </View>
              }
              <View className="cardotext">
                <Text className="oworkotext">标签</Text>
                <View className="alllabletu">
                    {data.introduces.tags && data.introduces.tags.map((v,i)=>(
                      <Text className='labletu' key={i+i}>{v.label_name}</Text>
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
          <View className="findingnamecardtwofour">去完善</View>
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
            <View className="cardthreeone" onClick={() => userRouteJump(`/subpackage/pages/addProject/index`)}>
              添加
            </View>}
        </View>
      </View>
      {/*   没有信息 */}
      {projectlength == 0 && 
      <View className="cardcolore">
        <View className="findingnamecardtwo">
          <Text className="findingnamecardtwothree">添加项目经验，可提升老板对您的信任程度</Text>
          <View className="findingnamecardeighttwo">添加项目经验</View>
        </View>
      </View>
      }
      <View className='cardcolore'>
        {/* wx: if="{{ projectlength != 0}}" */}
        {projectlength != 0 && 
          <View className="cardsix">
          {project && project.map((item:any)=>(
              <View className='cardsixzong' key={item.id}>
                {/* wx: if="{{ item.check == 1 && show_tips == 1 }}" */}
                {item.check == 1 && data.content.show_tips == 1 && 
                  <Image className="checkthree" src={`${IMGCDNURL}lpy/audit.png`}/>
                }
                {/* wx: if="{{ item.check == 2 }}" */}
                {/* bindtap="editor" data-uid="{{ item }}" */}
                {item.check == 2 && 
                <View className="editor" onClick={() => userRouteJump(`/subpackage/pages/addProject/index?type=0`)}>编辑</View>
                }
                {item.check == 0 &&
                  <View className="editor">待修改</View>
                }
                {/* wx: if="{{ item.check == 0 }}" */}
                {item.check == 0 &&
                <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`}/>
                }
                {/* item.check == 1&&show_tips == 0 */}
                {item.check == 1 && data.content.show_tips == 0 &&
                  <Image className="audit" src={`${IMGCDNURL}lpy/review.png`} />
                }
                <View>
                  <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className="cardsixone"/>
                </View>
                <View className="cardsixall">
                  <View className="cardsixtwo">
                    <Text>{ item.project_name }</Text>
                  </View>
                  <View className="cardsixthreeborder">
                    <View className="cardsixthree">
                      <Text className='cardsixthree-text'>{ item.start_time }-{ item.completiontime == "zhijin" ? "至今" : item.completion_time }</Text>
                    {/*  wx: if="{{ item.city_name }}" */}
                    {item.city_name && 
                      <Text className='cardsixthree-text'>{ item.province_name }-{ item.city_name }</Text>
                    }
                    {/* wx: if="{{!item.city_name}}" */}
                    <Text className='cardsixthree-text'>{item.province_name}</Text>
                    </View> 
                  </View>
                  <View className="cardsixfour">
                    <Text className='cardsixthree-text'>{ item.detail }</Text>
                  </View>
                  <View className="cardsixfive">
                    {/* wx: for="{{ item.image }}" */}
                  {item.image && item.image.map((v,i)=>(
                      <Image className='cardsixfive-image' src={v} key={i+i}/>
                    ))}
                    {/* <Image  data-url="{{ item }}" catchtap="previewImage" wx:key="{{ index }}" src="{{ item }}" data-index="{{ pindex }}"/> */}
                  </View>
                  {item.check == 0 && 
                    <View className='resson'>
                      未通过原因：{ item.fail_case }
                    </View>
                  }
                </View>
              </View>
            ))}
          <View className="cardsixsixall">
            <View className="cardsixsix">
                <View className="more" onClick={() => userRouteJump(`/pages/resume/projectList/index`)}>
                  {proStatus == '0' ? '更多项目经验':'修改项目经验'}
                <View className='more-view'>
                  <Image src={`${IMGCDNURL}lpy/downward.png`} className="down"/>
                </View>
              </View>
                {proStatus !== '0' && <Text className='num'>{data.fail_project}</Text>}
            </View>
          </View>
          </View>}
      </View>
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
            skilllength !=0 && skilllength < data.certificate_count &&
            <View className='cardthreeone' onClick={() => userRouteJump(`/subpackage/pages/addSkill/index`)}> 添加 </View>
          }
        </View>
      </View>
      {/*   没有信息 */}
        {skilllength == 0 && 
        <View className="cardcolore">
          <View className="findingnamecardtwo">
            <Text className="findingnamecardtwothree">添加职业技能，用实力证明您的能力</Text>
            <View className="findingnamecardeighttwo">添加职业技能</View>
          </View>
        </View>
        }
      {/* 有职业技能 */}
      <View className="cardcolore">
        {skilllength != 0 && 
          <View className="cardeight">
          {skillbooksone && skillbooksone.map((item:any,i)=>(
            <View className='cardeightzong' key={i+i}>
              {item.check == 1 && data.content.show_tips == 1 && 
                <Image className="checkfour" src={`${IMGCDNURL}lpy/audit.png`}/>
              }
            {/* { item.check == 1 && data.content.show_tips == 1 &&  */}
              <View className='cardeightzong'>
                <Image src={item.audit} className='checkfour'/>
                {/* wx: if="{{ item.check == 2 }}" */}
                {item.check == 2 && <View className="editor" onClick={() => userRouteJump(`/subpackage/pages/addSkill/index?type=${i}`)}>编辑</View> }
                {item.check == 0 && <View className="editor" onClick={() => userRouteJump(`/subpackage/pages/addSkill/index?type=${i}`)}>待修改</View>}
                {item.check == 0 && <Image className="audit" src={`${IMGCDNURL}lpy/notthrough.png`}/> }
                {/* {item.check == 1 && <Image className="audit" src={`${IMGCDNURL}lpy/review.png`} />} */}
                <View>
                  <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className="cardeightone"/>
                </View>
                <View className="cardeightall">
                  <View className="cardeighttwo">
                    <Text className='cardeighttwo-title'>{ item.name }</Text>
                  </View>
                  <View className="certificatetime">
                    <Text className='cardeighttwo-text'>{ item.certificate_time }</Text>
                  </View>
                  <View className="cardeightfive">
                    {item.image && item.image.map((v,i)=>(
                      <Image className='cardeightfive-image' src={v} key={i+i}/>
                    ))}
                  </View>
                  {item.check == 0 && <View className='resson'>
                    未通过原因：{ item.fail_case }
                  </View>}

                </View>
            </View>
            {/* } */}
            </View>
          ))}
          <View className="cardeightsixall">
            <View className="cardeightsix">
              {checkfourf != '0' && 
                  <View className="more" onClick={() => userRouteJump(`/pages/resume/skillList/index`)}>
                  更多技能证书
                  <View className='more-view'>
                  <Image src={`${IMGCDNURL}lpy/downward.png`} className="down"/>
                  </View>
                </View>
              }
              {checkfourf == '0' && <View className='more'>
                修改技能证书
                <View className='more-view'>
                  <Image src={`${IMGCDNURL}lpy/downward.png`} className="down"/>
                </View>
                  <Text className='num'>{data.fail_certificate}</Text>
              </View>}
            </View>
          </View>
          </View>
        }
      </View>
      <CollectionRecruitList type={1} data={recData}/>
      {/* 底部 */}
      {showtopone && !isOpened &&
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
          <View className='buttontext' onClick={()=>{setTips(false)}}>确定</View>
        </View>
      </AtModal>
      {/* 置顶 */}
        <AtModal isOpened={toppingModal} className='AtModal'>
        <View className='content'>
          <View><Image src={`${IMGCDNURL}lpy/resume-settop-daytips.png`} className='content-image'/></View>
          <View className='content-otext'>提示</View>
            <View className='content-toppding'>马上去置顶提升找活名片排名，让更多老板看到您的找活名片</View>
          {/* <View className='buttontext' onClick={() => { setTips(false) }}>确定</View> */}
            <View className='content-btn-box'>
              <View className='content-btn-left' onClick={() => { setToppingModal(false)}}>稍后再说</View>
              {/* ======= */}
              <View className='content-btn-right' onClick={()=>{console.log(1111)}}>去置顶</View>
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