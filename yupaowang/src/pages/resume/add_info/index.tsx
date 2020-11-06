import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Block } from '@tarojs/components'
import useResumeAddInfo from '../../../hooks/resume_addinfo'
import { useDispatch, useSelector } from '@tarojs/redux'
import { resInfoObj } from '../../../utils/request/index.d';
import { ProfessionRecruitData } from '../../../components/profession/index.d'
import { NationsType, OccupationType } from './index.d';
import { addResumeAction, checkAdcodeAction } from '../../../utils/request/index'; 
import Profession from '../../../components/profession'
import WordsTotal from '../../../components/wordstotal'
import useCode from '../../../hooks/code'
import Msg,{ ShowActionModal } from '../../../utils/msg';
import { isChinese, isPhone } from '../../../utils/v';
import { MAPKEY } from '../../../config/index';
import AMapWX from '../../../utils/source/amap-wx'
import { recSerAuthLoction, getLocation } from '../../../utils/helper';
import './index.scss'

export default function AddResumeInfo(){
  // 获取基础信息的redux
  const infoData = useSelector<any, resInfoObj>(state => state.resumeData.info);
  // 获取hooks数据
  const { infoConfig, genderCurrent, startDatePicker } = useResumeAddInfo()
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
  const [classifyTree, setClassifyTree] = useState<ProfessionRecruitData[]>([]);
  // 工种长度
  const [maxClassifyCount, setMaxClassifyCount] = useState<number>(3);
  // 已选择工种
  const [classifies, setClassifies] = useState<string[]>([]);
  useEffect(()=>{
    // 性别
    if(infoData.gender){
      let item = infoConfig.gender.find(item => item.id == infoData.gender)
      if(item) setSex(item.name)
    }
    // 民族
    let nations: NationsType[] = [...infoConfig.nation];
    for (let i = 0; i < nations.length; i++) {
      nations[i].id = nations[i].mz_id;
      nations[i].name = nations[i].mz_name;
      if (infoData.nation_id){
        setNationsName(nations[+infoData.nation_id-1].mz_name);
      }
    }
    let classifiesArr = infoData.occupations_id.split(',');
    const data = [...infoConfig.occupation];
    if (data){
      for (let i = 0; i < data.length;i++){
        for (let j = 0; j < data[i].children.length;j++){
          for (let z = 0; z < classifiesArr.length;z++){
            if (data[i].children[j].id == classifiesArr[z]){
              data[i].children[j].is_check = true;
            }
          }
        }
      }
    }
    // 工种
    setNations(nations);
    setClassifyTree(data)
    setClassifies(classifiesArr)
  }, [infoConfig])
  // 用户输入表单
  const userEnterFrom = (e:any, type: string) => {
    console.log(e, type)
    inputVal[type] = e.detail.value;
    setInputVal(inputVal)
  }

  // picker 发生改变
  const onPickerChange = (e:any, type: string) => {
    console.error(e,'111')
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
      console.error(name,'111')
      setNationsName(name);
      inputVal[type] = name;
    }else{
      setTime(e.detail.value);
      inputVal[type] = e.detail.value;
    }
    setInputVal(inputVal)
  }

  // picker 切换行
  const onColumnChange = (e) => {
    console.error(e,'eeee')
  }
  // 提交
  const handelSubmit =()=>{
    console.error(1);
    console.error(inputVal.username,'inputVal.username')
    if (!inputVal.username || inputVal.username.length < 2 || inputVal.username.length > 5 || !isChinese(inputVal.username)){
      ShowActionModal({msg: '请填写真实姓名，2-5字，必须含有汉字'})
      return
    }
    if (!isPhone(inputVal.tel)){
      ShowActionModal({ msg: '请正确输入手机号码' })
      return
    }
    if (infoData.tel != inputVal.tel){
      if(!code){
        ShowActionModal({ msg: '请正确填写验证码' })
        return
      }
    }
    console.error(inputVal.introduce)
    if (!inputVal.introduce|| !isChinese(inputVal.introduce) || inputVal.introduce.length < 15 || inputVal.introduce.length > 500 ){
      ShowActionModal({ msg: '请填写真实自我介绍，15-500字，必须含有汉字' })
      return
    }
    let params = {
      code,
      username: inputVal.username,
      tel: inputVal.tel,
      gender: inputVal.gender,
      nation: inputVal.nation,
      birthday: inputVal.birthday,
      occupations: [],
      province: '',
      city: '',
      introduce: inputVal.introduce,
      lat: '',
      lng: '',
      address:'',
      adcode: '',
    };
    addResumeAction(params).then(res=>{
      if(res.errcode == 'ok'){
        Taro.navigateBack({delta:1})
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
    console.error(i,k,id,'111')
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
    console.error(works,'works');
    console.error(newArr,'newArr')
  }
  // 获取定位
  const handleGps = ()=>{
    Taro.getSetting({
      success:(res)=>{
        console.error(res);
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
                      getLocation();
                    }else{
                      Msg('授权失败')
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
  // 定位获取
  
  // 选择地址
  const userChooseArea = () => {
    let url = '/pages/map/recruit/index'
    Taro.navigateTo({
      url: url
    })
  }
  console.error(classifyTree,'classifyTree');
  console.error(infoData.tel,'1111');
  console.error(inputVal.tel,'222')
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
                    placeholder='请输入您的名字'
                    value={inputVal.username}
                    onInput={(e) => userEnterFrom(e, 'username')}
                  />
                </View>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>性别</Text>
                  <Picker
                    mode="selector"
                    range={ infoConfig.gender }
                    value={+inputVal.gender-1}
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
                    // start={startDatePicker}
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
                  value={+inputVal.nation_id-1}
                  range={nations}
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
                {
                  classifies.length ?
                    <View className='publish-list-input'>
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
              <View className='publish-list-item' onClick={()=>userChooseArea()}>
                <Text className='pulish-list-title'>所在地区</Text>
                <View className='flex'>
                  <Text className='flexContent'>{inputVal.address}</Text>
                  <Text className='flexTitle' onClick={(e)=>{e.stopPropagation(),handleGps()}}>获取定位</Text>
                </View>
              </View>
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
                  <Textarea
                    className='publish-textarea'
                    value={inputVal.introduce}
                    placeholder='请简要介绍您所从事的行业以及工作经验...'
                    onInput={(e) => userEnterFrom(e, 'introduce')}
                  ></Textarea>
                  <WordsTotal num={0} />
                </View>
              </View>
              <View className='publish-recruit-btn' onClick={handelSubmit} >确认发布</View>
            </Form>
          </View>
        </View>
      </View>
  )
}