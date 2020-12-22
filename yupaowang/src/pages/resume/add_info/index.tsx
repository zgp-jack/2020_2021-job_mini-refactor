import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Block } from '@tarojs/components'
import useResumeAddInfo from '../../../hooks/resume_addinfo'
import { useDispatch, useSelector } from '@tarojs/redux'
import { resInfoObj } from '../../../utils/request/index.d';
import { ProfessionRecruitData } from '../../../components/profession/index.d'
import { NationsType, OccupationType } from './index.d';
import { addResumeAction, checkAdcodeAction, } from '../../../utils/request/index'; 
import { UserLastPublishRecruitArea } from '../../../pages/recruit/index.d'
import Profession from '../../../components/profession'
import { TEXTAREAMAXLENGTH, USEGAODEMAPAPI,SERIES, QQSERIES } from '../../../config'
import useCode from '../../../hooks/code'
import { getCityAreaPicker, getAreaCurrentArr, SimpleChildItems, getCityInfoById, AREABEIJING} from '../../../models/area'
import Msg,{ ShowActionModal } from '../../../utils/msg';
import { isChinese, isPhone, allChinese } from '../../../utils/v';
import { getLocation } from '../../../utils/helper';
import { location } from './data';
import { UserListChooseCity  } from '../../../config/store';
import { LocationDataTypeAsGaode } from './index.d';
import { setAreaInfo, setArea } from '../../../actions/recruit'//获取发布招工信息action
import './index.scss'

let first = false;
export default function AddResumeInfo(){
  // 获取dispatch分发action
  const dispatch = useDispatch()
  // 获取基础信息的redux
  const infoData = useSelector<any, resInfoObj>(state => state.resumeData.info);
  // 获取hooks数据
  const { infoConfig, genderCurrent, startDatePicker, endDatePicker } = useResumeAddInfo();
  // 发送验证码
  const { text, userGetCode } = useCode()
  // 输入数据
  const [inputVal, setInputVal] = useState<resInfoObj>({...infoData})
  // 性别
  const [sex,setSex] = useState<string>('');
  // 生日
  const [time, setTime] = useState<string>(infoData.birthday);
  // 验证码
  const [ code ,setCode ] = useState<string>('');
  // 民族
  const [nations, setNations] = useState <NationsType[]>([])
  // 民族输入框
  const [nationsName, setNationsName] = useState<string>('');
  // 选择工种
  const [showProssion,setShowProssion] =useState<boolean>(false);
  // 工种
  const [classifyTree, setClassifyTree] = useState<ProfessionRecruitData[]>([...infoConfig.occupation]||[]);
  // 工种长度
  const [maxClassifyCount, setMaxClassifyCount] = useState<number>(3);
  // 已选择工种
  const [classifies, setClassifies] = useState<string[]>([]);
  //位置
  const [locationData, setLocationData] = useState<LocationDataTypeAsGaode>(location)
  // 当前小程序如果不支持高德定位  那么我将会保存省市id，生成picker
  const [areaProvincePicker, setAreaProvincePicker] = useState<SimpleChildItems[]>([])
  const [areaIndex, setAreaIndex] = useState<number[]>([0,0])
  const [areaCityPicker, setAreaCityPicker] = useState <SimpleChildItems[][]>([])
  const [areaPickerData, setAreaPickerData] = useState<SimpleChildItems[][]>([])
  // --结束 请不要随意在该段中间加入任务非高德定位无关的状态值

  //获取redux中发布招工区域详细数据
  const areaInfo: UserLastPublishRecruitArea = useSelector<any, UserLastPublishRecruitArea>(state => state.RecruitAction.areaInfo)
  // 不是第一次存areaInfo
  // const [first, setFirst] = useState<boolean>(false);
  // 设置选择地址的省
  const [provinceAdress, setProvinceAdress] = useState<string>('');
  const [provinceAdressName, setProvinceAdressName] = useState<string>('');
  useEffect(() => {
    let {province, cities} = getCityAreaPicker()
    setAreaProvincePicker(province)
    setAreaCityPicker(cities)
    if (inputVal && inputVal.province_and_city){
      let ids = inputVal.province_and_city.split(',')
      let { pi, ci } = getAreaCurrentArr(ids[0], ids[1])
      setAreaPickerData([province, cities[pi]])
      setAreaIndex([pi,ci])
    }else{
      setAreaPickerData([province, cities[0]])
    }
  }, [inputVal])

  useEffect(()=>{
    // 性别
    if(infoData.gender){
      let item = infoConfig.gender.find(item => item.id == infoData.gender)
      if(item) setSex(item.name)
    }
    // 民族
    let nations: NationsType[] = [...infoConfig.nation];
    if(nations.length){
      for (let i = 0; i < nations.length; i++) {
        nations[i].id = nations[i].mz_id;
        nations[i].name = nations[i].mz_name;
        let nation_id: number = parseInt(infoData.nation_id)
        if (nation_id){
          setNationsName(nations[nation_id - 1 ].mz_name);
        }
      }
    }
    // 选择地址时省份设置
    if (infoData.province_and_city){
      const areaProvince = infoData.province_and_city.split(',')[1];
      const provinceAdress = getCityInfoById(areaProvince);
      setProvinceAdress(provinceAdress.name);
      setProvinceAdressName(provinceAdress.ad_name)
    }else{
      // 没有就获取缓存授权地址
      const areaProvince = Taro.getStorageSync(UserListChooseCity);
      // 并且不等于全国
      if (areaProvince && areaProvince.id !='1'){
        const provinceAdress = areaProvince;
        setProvinceAdress(provinceAdress.name);
        setProvinceAdressName(provinceAdress.ad_name);
      }else{
        // 没有地址和没有设置默认北京
        setProvinceAdress(AREABEIJING.name);
        setProvinceAdressName(AREABEIJING.ad_name);
      }
      // 没有就默认北京
    }
    let classifiesArr = infoData.occupations_id&&infoData.occupations_id.split(',')||[];
    const data = [...infoConfig.occupation] ||[];
    if (data && data.length){
      for (let i = 0; i < data.length;i++){
        for (let j = 0; j < data[i].children.length;j++){
          if (classifiesArr.length){
            for (let z = 0; z < classifiesArr.length;z++){
              if (data[i].children[j].id == classifiesArr[z]){
                data[i].children[j].is_check = true;
              }
            }
          }
        }
      }
    }
    // 判断所在地区
    if(infoData){
      setLocationData({ province: infoData.province, city: infoData.city, citycode: '', oadcode: '', regionone: infoData.title, longitude: infoData.location && infoData.location.split(',')[0].toString(), latitude: infoData.location && infoData.location.split(',')[1].toString(), address: infoData.address, adcode: infoData.ad_code, wardenryid: ''})
    }
    // 将数据保存到redux中的areaInfo中
    first = true
    // setFirst(true);
    let location:string='';
    if(infoData.location){
      location = location;
    }else{
      location = infoData.province +','+infoData.city
    }
    dispatch(setAreaInfo({ ...areaInfo, title: infoData.address || '', location : infoData.location }));
    // 工种
    setNations(nations);
    setClassifyTree(data)
    setClassifies(classifiesArr)
  }, [infoConfig])
  
  useEffect(() => {
    if(first) return;
    //设置所属地区
    const area = { ...areaInfo };
    // 设置省份(切换省份后)
    if (area.city){
      const provinceAdress = getCityInfoById(area.city);
      setProvinceAdress(provinceAdress.ad_name);
      setProvinceAdressName(provinceAdress.name);
    }
    setLocationData({
      ...location, adcode: area.adcode, address: area.title, longitude: area.location && area.location.split(',')[0], latitude: area.location&& area.location.split(',')[1], city: area.city || '', province: area.provice || ''
    })
  }, [areaInfo])
  // 用户输入表单
  const userEnterFrom = (e:any, type: string) => {
    inputVal[type] = e.detail.value;
    setInputVal({...inputVal})
  }
  // picker 发生改变
  const onPickerChange = (e:any, type: string) => {
    if (type == 'gender'){
      inputVal[type] = (+e.detail.value + 1).toString();
      const sexTitle = e.detail.value == 0 ? '男':'女';
      setSex(sexTitle)
    } else if (type == 'nation'){
      inputVal['nation_id'] = (+e.detail.value + 1).toString();
      let name:string='';
      for (let i = 0; i < nations.length;i++){
        name = nations[e.detail.value].mz_name
      }
      setNationsName(name);
      inputVal[type] = name;
    }else{
      setTime(e.detail.value);
      inputVal[type] = e.detail.value;
    }
    setInputVal({...inputVal})
  }
  // 提交
  const handelSubmit =()=>{
    //小于60大于18
    if (inputVal.birthday && SERIES == QQSERIES) {
      const startTime:number = new Date(startDatePicker).getTime() ||0;
      const oldTime:number = new Date(endDatePicker).getTime() ||0;
      const newTime:number = new Date(inputVal.birthday).getTime() ||0;
      if (newTime > oldTime || newTime < startTime){
        ShowActionModal({ msg: '请选择年龄不小于18岁' })
        return
      }
    }
    if (!inputVal.username || inputVal.username.length < 2 || inputVal.username.length > 5 || !allChinese(inputVal.username)){
      ShowActionModal({ msg: '请输入2~5字纯中文姓名'})
      return
    }
    if (!isPhone(inputVal.tel)){
      ShowActionModal({ msg: '请正确输入手机号码' })
      return
    }
    if (infoData.tel != inputVal.tel){
      if (!inputVal.code){
        ShowActionModal({ msg: '请正确填写验证码' })
        return
      }
    }
    if (!inputVal.introduce|| !isChinese(inputVal.introduce) || inputVal.introduce.length < 15 || inputVal.introduce.length > 500 ){
      ShowActionModal({ msg: '请填写真实自我介绍，15-500字，必须含有汉字' })
      return
    }
    
    let params = {
      code: inputVal.code ? inputVal.code:'',
      username: inputVal.username,
      tel: inputVal.tel,
      gender: inputVal.gender,
      nation: inputVal.nation_id,
      birthday: inputVal.birthday,
      occupations: classifies.toString(),
      province: locationData.province,
      city: locationData.city,
      introduce: inputVal.introduce,
      lat: locationData.latitude,
      lng: locationData.longitude,
      address:locationData.address,
      adcode: locationData.adcode,
      mini_type: locationData.mini_type || 0
    };
    addResumeAction(params).then(res=>{
      if (res.errcode == 200){
        ShowActionModal({
          msg: res.errmsg,
          success: () => {
            Taro.navigateBack({ delta: 1 })
          }
        })
      }else{
        ShowActionModal({ msg: res.errmsg});
      }
    })
    .catch(() => {
      Msg('网络错误，发送失败')
    })
  }
  const closeProfession = () => {
    setShowProssion(false)
  }
  const userClickProfession = (i:number,k:number,id:string)=>{
    let works: ProfessionRecruitData[] = JSON.parse(JSON.stringify(classifyTree))
    let check: boolean = works[i].children[k].is_check
    if (!check) {
      let max: number = maxClassifyCount
      let num: number = classifies.length
      if (num >= max) {
        Msg('工种最多可以选择' + max + '个')
        return
      }
    }
    works[i].children[k].is_check = !check
    let classifyArr = JSON.parse(JSON.stringify(classifies));
    let newArr: string[] = (check) ? classifyArr.filter(item => item !== id) : [...classifyArr, id];
    setClassifyTree(works);
    setClassifies(newArr);
  }
  // 获取定位
  const handleGps =()=>{
    // setFirst(false);
    first = false
    Taro.getSetting({
      success:(res)=>{
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {//非初始化进入该页面,且未授权   
          Taro.showModal({
            title: '是否授权当前位置',
            content: '需要获取您的地理位置，请确认授权，否则将不能为你自动推荐位置',
            success:(res)=>{
              if(res.confirm){
                Taro.openSetting({
                  success:(data)=>{
                    if (data.authSetting["scope.userLocation"] == true) {
                      Msg('授权成功')
                      getLocation().then(res=> {
                        setLocationData(res);
                        const provinceAdress = getCityInfoById(res.city);
                        setProvinceAdress(provinceAdress.name);
                        setProvinceAdressName(provinceAdress.ad_name)
                      })
                    }else{
                      Msg('授权失败')
                    }
                  }
                })
              }
            }
          })
        }else{
          getLocation().then(res=>{
            if (res) {
              const provinceAdress = getCityInfoById(res.city);
              setProvinceAdress(provinceAdress.name);
              setProvinceAdressName(provinceAdress.ad_name);
              setLocationData(res);
            }
          })
        }
      }
    })
  }
  // 定位获取
  
  // 选择地址
  const userChooseArea = () => {
    // setFirst(false);
    first = false
    let url = `/pages/map/resume/index?provinceAdress=${provinceAdress}&provinceAdressName=${provinceAdressName}`
    Taro.navigateTo({
      url: url
    })
  }

  // 用户确定地址picker
  const userChangePickerArea = (e) => {
    let pid: string = areaProvincePicker[e.detail.value[0]].id
    let cid: string = areaPickerData[1][e.detail.value[1]].id
    let name: string = pid === cid ? areaProvincePicker[e.detail.value[0]].name : `${areaProvincePicker[e.detail.value[0]].name}-${areaPickerData[1][e.detail.value[1]].name}`
    let mydata = JSON.parse(JSON.stringify(locationData))
    mydata.address = name;
    mydata.province = pid
    mydata.city = cid
    mydata.latitude = ''
    mydata.longitude = ''
    mydata.adcode = ''
    mydata.mini_type = 1
    setLocationData({ ...mydata})
  }
  // 用户更改了地址picker
  const userChangeColumn = (e) => {
    let column: number = e.detail.column
    let value: number = e.detail.value
    if (column === 0) {
      let data = JSON.parse(JSON.stringify(areaPickerData))
      data[1] = areaCityPicker[value]
      setAreaPickerData(data)
      setAreaIndex([value, 0])
    } else {
      setAreaIndex([areaIndex[0], value])
    }
  }


  return (
    <View className='resume-addinfo-container'>
      {showProssion && 
      <Profession
        closeProfession={closeProfession}
        data={classifyTree}
        onClickItem={(i, k, id) => userClickProfession(i, k, id)}
        num={3}
      />
      }
      <View className='resume-addinfo-header'>注：资料越完善，找活越容易</View>
      <View className='resume-addinfo-form'>
        <View className='publish-recruit-container'>
          <Form>
            <View className='resume-addinfo-body'>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>姓名</Text>
                  <Input
                    className='publish-list-input'
                    type='text'
                    placeholder='请输入2~5个纯中文姓名'
                    value={inputVal.username}
                    onInput={(e) => userEnterFrom(e, 'username')}
                  />
                </View>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>性别</Text>
                  <Picker
                    mode="selector"
                    range={ infoConfig.gender||[] }
                    value={inputVal.gender?(Number(inputVal.gender)-1):0}
                    range-key="name"
                    onChange={(e) => onPickerChange(e, 'gender')}
                  >
                <Input className='publish-list-input' type='text' disabled placeholder='请选择性别' value={sex} />
                </Picker>
                </View>
                <View className='publish-list-item' >
                  <Text className='pulish-list-title'>出生年月</Text>
                  <Picker
                    mode="date"
                    value={inputVal.birthday}
                    start={startDatePicker}
                    end={endDatePicker}
                    onChange={(e) => onPickerChange(e,'birthday')}
                  >
                    <Input className='publish-list-input' type='text' disabled placeholder='请选择出生年月' value={inputVal.birthday} />
                  </Picker>
                </View>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>民族</Text>
                <Picker
                  mode="selector"
                  // value={infoConfig.nation}
                  value={inputVal.nation_id?(Number(inputVal.nation_id)-1):0}
                  range={nations||[]}
                  range-key='name'
                  onChange={(e) => onPickerChange(e, 'nation')}
                >
                  <Input
                    className='publish-list-input'
                    type='text'
                    disabled
                    placeholder='请选择民族'
                    value={nationsName}
                  />
                </Picker>
                </View>
              <View className='publish-list-item' onClick={() => setShowProssion(true)}>
                <Text className='pulish-list-title'>所属工种</Text>
                {classifies && classifies.length ?
                  <View className='publish-list-input publish-list-text'>
                      {classifyTree.map(item => (
                        <Block key={item.id}>
                          {item.children.map(data => (
                            <Block key={data.id}>
                              {data.is_check && <Text className='publish-input-list' >{data.name}</Text>}
                            </Block>
                          ))}
                        </Block>
                      ))}
                    </View>
                    :
                    <Input className='publish-list-input' disabled type='text' placeholder='请选择所属工种' />
                }
                </View>
              {USEGAODEMAPAPI ? 
              <View className='publish-list-item adressInput' onClick={()=>userChooseArea()}>
                <Text className='pulish-list-title-address'>所在地区</Text>
                <View className='flex'>
                  {locationData && locationData.adcode ? 
                    <Text className='flexContent'>{locationData && locationData.address}</Text>:
                    <Input placeholder='请选你所在地址' className='flexContent-input' disabled/>
                  }
                  <Text className='flexTitle' onClick={(e)=>{e.stopPropagation(),handleGps()}}>获取定位</Text>
                </View>
              </View>
              :
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>所在地区</Text>
                  <Picker 
                    mode='multiSelector'
                    value={areaIndex}
                    range={areaPickerData}
                    rangeKey='name'
                    onChange={(e) => userChangePickerArea(e)}
                    onColumnChange={(e) => userChangeColumn(e)}
                  >
                    <Input placeholder='请选你所在地址' className='publish-list-input' disabled value={locationData && locationData.address || ''}/>
                  </Picker>
              </View>
              }
            </View>
            <View className='resume-addinfo-body'>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>手机号</Text>
                  <Input
                    className='publish-list-input'
                    type='number'
                    placeholder='请输入您的手机号'
                    value={inputVal.tel}
                    onInput={(e) => userEnterFrom(e, 'tel')}
                  />
                </View>
                {infoData.tel != inputVal.tel && 
                <View className='publish-list-item publish-list-item-code'>
                  <Text className='pulish-list-title'>验证码</Text>
                  <Input
                    className='publish-list-input'
                    type='text'
                    placeholder='请输入验证码'
                    value=''
                    onInput={(e) => userEnterFrom(e, 'code')}
                  />
                  <View className='publish-code-btn' onClick={() => userGetCode(inputVal.tel)}>{text}</View>
                </View>
                }
            </View>  

            <View className='resume-addinfo-body'>
              <View className='publish-list-textarea'>
                  <Text className='publish-textarea-title'>自我介绍</Text>
                  {!showProssion &&
                  <Textarea
                    className='publish-textarea'
                    value={inputVal.introduce}
                    placeholder='请简要介绍您所从事的行业以及工作经验...'
                    onInput={(e) => userEnterFrom(e, 'introduce')}
                    maxlength={500}
                  ></Textarea>}
                  <View className='words-total-box '>{inputVal && inputVal.introduce && inputVal.introduce.length || 0}<Text>/{TEXTAREAMAXLENGTH}</Text></View>
                </View>
              </View>
              <View className='publish-recruit-btn' onClick={handelSubmit} >确认发布</View>
            </Form>
          </View>
        </View>
      </View>
  )
}

AddResumeInfo.config = {
  navigationBarTitleText: '基础信息',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config