import Taro, { useState, useEffect, Config, useContext, useDidShow } from '@tarojs/taro'
import { View, Form, Text, Picker, Input, Textarea, Button } from '@tarojs/components'
import { ProfessionRecruitData } from '../../../components/profession/index.d'
import { addResumeAction} from '../../../utils/request/index'
import Profession from '../../../components/profession'
import Msg, { SubPopup } from '../../../utils/msg'
import WordsTotal from '../../../components/wordstotal'
import { userAuthLoction, recSerAuthLoction } from '../../../utils/helper'
import { contextItem } from '../../../pages/map/resume'
// import { context } from '../../../pages/resume/newJobs';
// import { getPublicList } from '../../../actions/publicList';
import { ModelType, UserLastPublishRecruitArea  } from './index.d'
import { UserLocationPromiss, AREABEIJING, AREACHINA } from '../../../models/area'
import { UserLastPublishArea, UserLocationCity, UserListChooseCity } from '../../../config/store'
import useCode from '../../../hooks/code'
import { useSelector } from '@tarojs/redux'
import { isPhone, isVaildVal } from '../../../utils/v'
import { SubscribeToNews } from '../../../utils/subscribeToNews';
import './index.scss'

export default function BasicsPage() {
  // 获取存入的公用内容
  const useSelectorItem = useSelector<any,any>(state=>state)
  console.log(useSelectorItem,'dadasd')
  //选择地址传过来的内容
  const { publishArea, location, adcode } = useContext(contextItem);
  //公用数据，工种，民族
  // const publicList:any=[];
  // const { publicList } = useContext(context);
  // 验证码
  const { text, userGetCode } = useCode()
  // 当前显示城市
  const [areas, setArea] = useState<string>(AREABEIJING.name)
  // 选择详细地址信息
  const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
    title: '',
    adcode: '',
    location: '',
    info: ''
  })
  // 地区需要的值
  const [adcodes, setAdcodes] = useState<string>('')
  const sexList = ['男', '女'];
  // 民族（选择框使用的）
  const [nationCurrent, setNationCurrent] =useState<string[]>([])
  // 民族
  const [allNationCurrent,setAllNationCurrent]= useState<any[]>([])
  // 工种
  const [occupation, setoccupation] = useState<any>([])
  // 点击的工种
  const [clickOccupation, setClickOccupation] = useState<any[]>([])
  // 工种弹框
  const [showProfession, setShowProssion] = useState<boolean>(false)
  // 进来时的电话做验证码判断
  const [oldTel,setOldTel] = useState<string>('')
  // 详情字数
  const [num, setNum] = useState<number>(0)
  // 省
  const [province, setProvince] = useState<string>('')
  // 市
  const [city, setCity] = useState<string>('')
  //设置latitude
  const [lat,setLat] = useState<string>('')
  // 设置longitude
  const [lng,setLng] = useState<string>('')
  // const [occupationsId, setOccupationsId] = useState<string>('')
  const [formData, setFormData] = useState <ModelType>({
    name: '',
    sex: '',
    time: '',
    nation: '',
    work: [],
    workItem:[],
    are:'',
    phone: '',
    code:'',
    details: '',
    classifyTree: [],
    maxClassifyCount: 3,
    classifies: [],
    nationCurrentName:'',
  })
  useDidShow(() => {
    // 点击设置地区
    if (publishArea && location && adcode) {
      setLat(location ? location.split(",")[1] : '')
      setLng(location ? location.split(",")[0] : '')
      setAdcodes(adcode)
      setFormData({ ...formData, are: publishArea })
    }
  })
  
  // 获取数据
  useEffect(()=>{
    // console.log((getPublicList()),'xxxxs');
    console.log(useSelectorItem,'xxx111')
    const data = JSON.parse(JSON.stringify(useSelectorItem.Personnel));
    if (useSelectorItem.Personnel){
      console.log(useSelectorItem)
      // 民族
      const nameList = data.nation.length && data.nation.map(v=>v.mz_name);
      setNationCurrent(nameList);
      setAllNationCurrent(data.nation);
      // 工种
      setoccupation(data.occupation)
    }
    // 设置城市
    let userLoctionCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
    if (userLoctionCity) {
      setArea(userLoctionCity.city)
    } else {
      userAuthLoction().then(res => {
        setArea(res.city)
      }).then(() => {
        setArea(AREABEIJING.name)
      })
    }
    // 设置地址
    let userLastPublishArea: UserLastPublishRecruitArea = Taro.getStorageSync(UserLastPublishArea)
    if (userLastPublishArea) {
      setAreaInfo(userLastPublishArea)
    }
    // if (area){
    //   setArea(area)
    // }
    // if (basicsCity){
    //   console.log(basicsCity,'basicsCitybasicsCitybasicsCity')
    //   setFormData({ ...formData, are: basicsCity,});
    // }
    // 获取缓存信息
    const useInfo = Taro.getStorageSync('introinfo');
    if (useInfo){
      let cache:any={
        // 姓名
        name: useInfo.username,
        // 电话
        phone: useInfo.tel,
        // 时间
        time: useInfo.birthday,
        // 性别
        sex: sexList[parseInt(useInfo.gender)-1],
        // 民族
        nationCurrentName: useInfo.nation,
        // 自我介绍
        details: useInfo.introduce,
        // 所属工种
        workItem: useInfo.occupations ? useInfo.occupations:[],
        // 所在地区s
        are: useInfo.address,
        // 自我介绍
      };
      // console.log(useInfo.occupation,'xxx')
      const arr = JSON.parse(JSON.stringify(useSelectorItem.Personnel.occupation));
      console.log(arr,'xxx')
      let clckArr, arrList;
      if (useInfo.occupations_id){
        clckArr = useInfo.occupations_id.split(",");
        arrList = arr.map((v)=>{
          v.children.map((val)=>{
            clckArr.map((item)=>{
              if (val.id === item){
                val.is_check = true;
              }
              return item;
            })
            return val;
          })
          return v;
        })
      }
      setoccupation(arrList)
      // setOccupationsId(useInfo.occupations_id);
      setClickOccupation(clckArr)
      setLat(useInfo.location ? useInfo.location.split(",")[1]:'')
      setLng(useInfo.location ? useInfo.location.split(",")[0] : '')
      setProvince(useInfo.province ? useInfo.province:'');
      setCity(useInfo.city ? useInfo.city:'')
      setOldTel(useInfo.tel ? useInfo.tel:'');
      setFormData(cache);
      setAdcodes(useInfo.ad_code ? useInfo.ad_code:'')
      setNum(useInfo.introduce?useInfo.introduce.length:0)
    }
    // const params = {
    //   type:'job',
    //   infoId:''
    // }
    // // 获取工种
    // getPublishRecruitView(params).then(res=>{
    //   console.log(res,'xxxx')
    //   setModel(res);
    // });
    // // 获取民族
    // getUserAuthInfo().then(res=>{
    //   const nameList = res.authData.nation.map(v=>v.mz_name);
    //   setNationCurrent(nameList);
    //   setAllNationCurrent(res.authData.nation);
    // })
  },[])
  // 验证码
  const [isCode, setIsCode] = useState<boolean>(false);
  // 用户填写表单
  const userEnterFrom = (e: any, key: string) => {
    let value;
    if (key === 'sex'){
      value = sexList[e.detail.value]
    } else if (key === 'nationCurrentName'){
      value = nationCurrent[e.detail.value]
    }else{
      value = e.detail.value
    }
    // 判断手机号不同出现验证码
    if (key === 'phone'){
      if(oldTel){
        if (e !== oldTel || e === ''){
          setIsCode(true)
        }else{
          setIsCode(false)
        }
      }else{
        setIsCode(true)
      }
    }
    const state: ModelType = JSON.parse(JSON.stringify(formData))
    state[key] = value;
    setFormData(state);
    // 如果是detail, 那么需要统计字数
    if (key === 'details') {
      setNum(value.length)
    }
  }
  const Modal = (content:string)=>{
    Taro.showModal({
      title: '温馨提示',
      content,
      showCancel: false,
    })
  }
  const handleSubmit = ()=>{
    let nation;
    for(let i=0;i<allNationCurrent.length;i++){
      if (allNationCurrent[i].mz_name === formData.nationCurrentName){
        nation = allNationCurrent[i].mz_id;
      }
    }
    if (!isVaildVal(formData.name,2,5)){
      Modal('请填写真实姓名，2-5字，必须含有汉字')
      return
    }
    if (!formData.sex){
      Msg('请选择性别');
      return
    }
    if (!formData.time){
      Msg('请选择出生日期')
      return
    }
    if (!nation){
      Msg('请选择名族')
      return
    }
    if (!clickOccupation) {
      Modal('请选择您的工种')
      return
    }
    if (!formData.are) {
      Msg('请选择地区')
      return
    }
    if (!formData.phone) {
      Modal('请选择您的工种')
      return
    }
    if (isCode){
      if (!formData.code){
        Modal('请正确填写验证码')
        return
      }
    }
    if (!isVaildVal(formData.details, 15, 500)){
      Modal('请填写真实自我介绍，15-500字，必须含有汉字');
      return
    }
    let params = {
      code: formData.code,
      username: formData.name,
      tel: formData.phone,
      gender: String(sexList.indexOf(formData.sex)+1),
      nation: String(nation),
      birthday: formData.time,
      occupations: clickOccupation,
      province,
      city,
      introduce: formData.details,
      lat: String(lat),
      lng: String(lng),
      address: formData.are,
      adcode: adcodes,
    }
    addResumeAction(params).then(res=>{
      if(res.errcode == '200' ){
        SubscribeToNews("resume",()=>{
          SubPopup({
            tips: res.errmsg, 
            callback: ()=>{
              Taro.navigateBack({
                delta: 1
              })
            }
          })
        })
      }else{
        SubPopup({ tips: res.errmsg})
      }
    })
  }
  const closeProfession = () => {
    setShowProssion(false)
  }
  // 点击工种
  const userClickProfession = (i: number, k: number, id: string, name:string) => {
    console.log(i,k,id,name);
    console.log(clickOccupation,'clickOccupation')
    if (!occupation) return
    let works: ProfessionRecruitData[] = JSON.parse(JSON.stringify(occupation))
    let check: boolean = works[i].children[k].is_check
    console.log(works);
    if (!check) {
      let max: number = 3
      let num: number = clickOccupation?clickOccupation.length:0;
      if (num >= max) {
        Msg('工种最多可以选择' + max + '个')
        return
      }
    }
    works[i].children[k].is_check = !check
    let classifyArr = JSON.parse(JSON.stringify(clickOccupation ? clickOccupation:[]))
    let newArr: string[] = (check) ? classifyArr.filter(item => item !== id) : [...classifyArr, id]
    let newNameArr: string[] = (check) ? formData.workItem.filter(item => item !== name) : [...formData.workItem, name]
    setFormData({ ...formData, workItem: newNameArr})
    setoccupation(works)
    console.log(newArr,'xxxx')
    setClickOccupation(newArr)
  }
  // 用户点击发送短信
  const userSendCode = () => {
    let tel: string = formData.phone;
    let flag: boolean = isPhone(tel)
    if (flag) userGetCode(tel)
    else Msg('请先输入正确的手机号')
  }
   // 选择地址
  const userChooseArea = ()=> {
    if (!areas) return
    let url = `/pages/map/resume/index?areaItem=${areas}`
    Taro.navigateTo({
      url: url
    })
  }
  // 获取当前位置
  const handleLocation = (e)=>{
    e.stopPropagation();
    Taro.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {//非初始化进入该页面,且未授权   
          Taro.showModal({
            title: '是否授权当前位置',
            content: '需要获取您的地理位置，请确认授权，否则将不能为你自动推荐位置',
            success: function (res) {
              if (res.cancel) {
              } else if (res.confirm) {
                //village_LBS(that);
                Taro.openSetting({
                  success: function (data) {
                    if (data.authSetting["scope.userLocation"] == true) {
                      Taro.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 2000
                      })

                      //再次授权，调用getLocationt的API
                      getLocation();
                    } else {
                      Taro.showToast({
                        title: '授权失败',
                        icon: 'success',
                        duration: 2000
                      })
                    }
                  }
                })
              }
            }
          })
        }else{
          getLocation();
        }
      }
    })
  }
  const getLocation = ()=>{
    recSerAuthLoction().then(gpsLocation => {
      resetLocationSearch(gpsLocation)
    }).catch(() => {
      // 拒绝授权默认全国
      Taro.setStorageSync(UserListChooseCity, AREACHINA)
      // setLists([])
      // setSearchData({ ...searchData, page: 1, area_id: AREACHINA.id })
    })
  }
  const resetLocationSearch = (data)=>{
    setFormData({ ...formData, are:data[0].name})
    setLat(data[0].latitude);
    setLng(data[0].longitude)
    setAdcodes(data[0].regeocodeData.addressComponent.adcode)
  }
  console.log(occupation,'xxx')
  return (
    <View>
      {showProfession &&
        <Profession
          closeProfession={closeProfession}
          data={occupation}
          onClickItem={(i, k, id,name) => userClickProfession(i, k, id, name)}
          num={3}
        />}
      <View className='header'>注: 资料越完善，找活越容易</View>
      <Form className='formBox'>
        <View className='publish-recruit-card'>
          <View className='publish-list-item'>
            <Text className='pulish-list-title'>姓名</Text>
            :<Input
              className='publish-list-input'
              type='text'
              placeholder='请输入你的名字'
              value={formData && formData.name}
              onInput={(e) => userEnterFrom(e, 'name')}
            />
          </View>
        </View>
        <View className='publish-recruit-card'>
          <Picker
            className='publish-list-input'
            mode='selector'
            onChange={(e) => userEnterFrom(e, 'sex')}
            value={0}
            range={sexList}
          >
            <View className='publish-list-item-sex'>
              <Text className='pulish-list-title'>性别</Text>
              :<Input
                className='publish-list-input'
                type='text'
                disabled
                placeholder='请选择性别'
                value={formData && formData.sex}
              />
            </View>
          </Picker>
        </View>
        <View className='publish-recruit-card'>
          <Picker
            mode='date'
            onChange={(e) => userEnterFrom(e,'time')}
            value={''}
          >
            <View className='publish-list-item'>
              <Text className='pulish-list-title'>出生日期</Text>
              :<Input
                className='publish-list-input'
                type='text'
                disabled
                placeholder='请选择出生日期'
                value={ formData && formData.time }
              />
            </View>
          </Picker>
        </View>
        <View className='publish-recruit-card'>
          <Picker
            mode='selector' 
            value={0} 
            range={nationCurrent} 
            onChange={(e) => userEnterFrom(e, 'nationCurrentName')}
          >
            <View className='publish-list-item'>
              <Text className='pulish-list-title'>民族</Text>
              :<Input
                className='publish-list-input'
                type='text'
                disabled
                placeholder='请选择民族'
                value={formData && formData.nationCurrentName}
              />
            </View>
          </Picker>
        </View>
        <View className='publish-recruit-card' onClick={() => { setShowProssion(true)}}>
          <View className='publish-list-item'>
            <Text className='pulish-list-title'>所属工种</Text>
            :
            <Input
              className='publish-list-input'
              type='text'
              disabled
              placeholder='请选择工种'
              value={formData && formData.workItem.toString()}
            />
          </View>
        </View>
        <View className='publish-recruit-card'>
          <View className='publish-list-item' onClick={() => userChooseArea()}>
            <Text className='pulish-list-title'>所在地区</Text>
            :
            <View className='publish-list-input-area'>
            <Input
              className='publish-list-input-left'
              type='text'
              disabled
              placeholder='请选择地区'
              value={formData && formData.are}
            />
              <Text className='publish-list-input-right' onClick={handleLocation}>获取定位</Text>
            </View>
          </View>
        </View>
        <View className='publish-recruit-card'>
          <View className={isCode ? 'publish-list-item-isCode' :'publish-list-item-phone'}>
            <Text className='pulish-list-title'>手机号码</Text>
            :<Input
              className='publish-list-input'
              type='text'
              placeholder='请输入手机号码'
              maxLength={11}
              value={formData && formData.phone}
              onInput={(e) => userEnterFrom(e, 'phone')}
            />
          </View>
          {isCode && 
            <View className='publish-list-item-code'>
              <Text className='pulish-list-title'>验证码</Text>
              :<Input
                className='publish-list-input'
                type='text'
                placeholder='请输入验证码'
                onInput={(e) => userEnterFrom(e,'code')}
                value={formData && formData.code}
              />
              <View className='publish-code-btn' onClick={() => userSendCode()}>{text}</View>
            </View>
          }
        </View>
        <View className='publish-recruit-card'>
          <View className='publish-list-ditals'>
            <View>自我介绍:</View>
              <Textarea
                className='textarea'
                placeholder='请简要介绍你所从事的行业以及工作经验...'
                value={formData && formData.details}
                onInput={(e) => userEnterFrom(e, 'details')}
                maxlength={500}
              />
          </View>
          <View>
          <WordsTotal num={num} />
          </View>
        </View>
      </Form>
      <View className='footer'>
        <Button className='footer-btn' onClick={handleSubmit}>保存资料</Button>
      </View>
    </View>
  )
}

BasicsPage.config = {
  navigationBarTitleText: '基础信息',
} as Config