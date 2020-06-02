import Taro, { useState, useEffect, Config, RouterInfo, useRouter } from '@tarojs/taro'
import { View, Form, Text, Picker, Input, Textarea, Button } from '@tarojs/components'
import { ProfessionRecruitData } from '../../../components/profession/index.d'
import { addResumeAction, getPublishRecruitView, getUserAuthInfo, checkAdcodeAction} from '../../../utils/request/index'
import Profession from '../../../components/profession'
import useRealname from '../../../hooks/realname'
import usePublishViewInfo from '../../../hooks/publish/recruit'
import Msg from '../../../utils/msg'
import WordsTotal from '../../../components/wordstotal'
import { MAPKEY } from '../../../config'
import { userAuthLoction } from '../../../utils/helper'
import useCode from '../../../hooks/code'
import { isPhone } from '../../../utils/v'
import './index.scss'

interface ModelType {
  name:string,
  sex:string,
  time:string,
  nation:string,
  work:[],
  workItem:string,
  are:string,
  phone:string,
  details:string,
  classifyTree:[],
  maxClassifyCount:number,
  classifies:string[],
  code:string,
  nationCurrentName:string,
}
// 初始化获取信息类型
export interface InitRecruitView {
  type: string,
  infoId: string
}

export default function BasicsPage() {
  // 验证码
  const { text, userGetCode } = useCode()
  const sexList = ['男', '女'];
  const [nationCurrent, setNationCurrent] =useState<string[]>([])
  const [allNationCurrent,setAllNationCurrent]= useState<any[]>([])
  const [model, setModel] =useState<any>()
  const [showProfession, setShowProssion] = useState<boolean>(false)
  // 进来时的电话做验证码判断
  const [oldTel,setOldTel] = useState<string>('')
  const [num, setNum] = useState<number>(0)
  const [formData, setFormData] = useState <ModelType>({
    name: '',
    sex: '',
    time: '',
    nation: '',
    work: [],
    workItem:'',
    are: '',
    phone: '',
    code:'',
    details: '',
    classifyTree: [],
    maxClassifyCount: 0,
    classifies: [],
    nationCurrentName:'',
  })
  // 获取数据
  useEffect(()=>{
    // 获取缓存信息
    const useInfo = Taro.getStorageSync('introinfo');
    if (useInfo){
      console.log(useInfo,'xxx');
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
        details:useInfo.introduce
      };
      setOldTel(useInfo.tel);
      setFormData(cache);
      setNum(useInfo.introduce.length)
    }
    const params = {
      type:'job',
      infoId:''
    }
    // 获取工种
    getPublishRecruitView(params).then(res=>{
      setModel(res);
    });
    // 获取民族
    getUserAuthInfo().then(res=>{
      const nameList = res.authData.nation.map(v=>v.mz_name);
      setNationCurrent(nameList);
      setAllNationCurrent(res.authData.nation);
    })
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
  const handleSubmit = ()=>{
    let nation;
    for(let i=0;i<allNationCurrent.length;i++){
      if (allNationCurrent[i].mz_name === formData.nationCurrentName){
        nation = allNationCurrent[i].mz_id;
      }
    }
    let params = {
      code: formData.code,
      username: formData.name,
      tel: formData.phone,
      gender: String(sexList.indexOf(formData.sex)),
      nation: String(nation),
      birthday: formData.time,
      occupations: formData.workItem,
      // province: String(this.data.provinceid),
      // city: String(this.data.wardenryid),
      // introduce: this.data.otextareavalue,
      // lat: this.data.latitude,
      // lng: this.data.longitude,
      // address: this.data.regionone,
      // adcode: this.data.oadcode,
    }
    console.log(params);
    // addResumeAction(params).then(res=>{
    //   console.log(res);

    // })
  }
  const closeProfession = () => {
    setShowProssion(false)
  }
  console.log(model,'model')
  // 点击工种
  const userClickProfession = (i: number, k: number, id: string) => {
    console.log(i,'i');
    console.log(k,'k');
    console.log(id,'id');
    if (!model) return
    let works: ProfessionRecruitData[] = JSON.parse(JSON.stringify(model.classifyTree))
    let check: boolean = works[i].children[k].is_check
    console.log(works,'works')
    console.log(check,'check')
    if (!check) {
      let max: number = model.maxClassifyCount
      let num: number = model.classifies.length
      if (num >= max) {
        Msg('工种最多可以选择' + max + '个')
        return
      }
    }
    works[i].children[k].is_check = !check
    let classifyArr = JSON.parse(JSON.stringify(model.classifies))
    let newArr: string[] = (check) ? classifyArr.filter(item => item !== id) : [...classifyArr, id]
    console.log(works,'works');
    console.log(newArr,'newArr');
    // setModel({ ...model, classifyTree: works, classifies: newArr })
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
    if(!model) return
    let url = '/pages/map/resume/index'
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
    // userAuthLoction().then(res=>{
    //   console.log(res,'resssssssss');
    // })
    // let myAmapFun = new amapFile.AMapWX({
    //   key: MAPKEY,
    // }); //key注册高德地图开发者
    // myAmapFun.getRegeo({

    // })
  }
  return (
    <View>
      {showProfession &&
        <Profession
          closeProfession={closeProfession}
          data={model && model.classifyTree}
          onClickItem={(i, k, id) => userClickProfession(i, k, id)}
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
            :<Input
              className='publish-list-input'
              type='text'
              disabled
              placeholder='请选择工种'
              value={formData && formData.workItem}
            />
          </View>
        </View>
        <View className='publish-recruit-card'>
          <View className='publish-list-item' onClick={() => userChooseArea()}>
            <Text className='pulish-list-title'>所在地区</Text>
            :<Input
              className='publish-list-input'
              type='text'
              disabled
              placeholder='请选择地区'
              value={formData && formData.are}
            />
            <Text className='pulish-list-location' onClick={handleLocation}>获取定位</Text>
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
                // className=''
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