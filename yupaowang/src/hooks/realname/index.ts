import Taro, { useState, useEffect, useDidShow} from '@tarojs/taro'
import { UserAuthInfoData, UserAuthInfoMemberExtData } from '../../utils/request/index.d'
import { PostUserAuthInfo } from '../index.d'
import { getUserAuthInfo, postUserAuthInfo } from '../../utils/request'
import { useSelector } from '@tarojs/redux'
import Msg, { ShowActionModal, SubPopup } from '../../utils/msg'
import { CameraAndAlbum } from '../../utils/upload'
import UploadImgAction from '../../utils/upload'
import { getIdcardAuthInfo } from '../../utils/api'
import { IMGCDNURL } from '../../config'
import { getLongAreaAdname } from '../../models/area'
import { SubscribeToNews } from '../../utils/subscribeToNews';

interface SexTypeArr {
  id: string,
  name: string
}

const cardInfoFailImg: string = IMGCDNURL + 'lpy/auth/upload-fail-tips.png'
// 声明性别选项与下标
const sexArray: SexTypeArr[] = [{ id: '1', name: '男' }, { id: '2', name: '女' }]

export default function useRealname(){
  // 性别下标
  const [sexCurrent, setSexCurrent] = useState<number>(0)
  // 性别名称
  const [sexName, setSexName] = useState<string>('')
  // 民族下标
  const [nationCurrent, setNationCurrent] = useState<number>(0)
  // 初始化返回模型
  const [initModel, setInitModel] = useState<UserAuthInfoData>()
  // 保存数据提交模型
  const [model, setModel] = useState<PostUserAuthInfo>()
  // 获取用户是否登录
  const login: boolean = useSelector<any, boolean>(state => state.User['login'])
  // 是否显示表单
  const [showForm, setShowForm] = useState<boolean>(false)
  // 展示电话号码选项
  const [checkDegree, setCheckDegree] = useState<boolean>(false)
  // 声明父组件传值地区名字
  const [area, setArea] = useState<string>('')
  useEffect(()=>{
    if(!login) return
    getUserAuthInfo().then(data=>{
      if(data.errcode == 'ok'){
        if (data.authData.member && data.authData.member.is_check === '0') {
          Taro.showModal({
            title: '审核失败',
            content: data.authData.memberExt.idcard_check_failure_reason,
            showCancel: false,
            success: function (res) { }
          })
        }
        let initData: UserAuthInfoData = data.authData
        console.log(initData.member,'initData.member')
        setInitModel(initData)
        let nationId: string|number = initData.memberExt.nation_id || ''
        let nationName: string = ''
        let nationCurrent: number = 0
        if(nationId){
          nationCurrent = initData.nation.findIndex(item => item.mz_id == nationId)
          nationName = initData.nation[nationCurrent].mz_name
          setNationCurrent(nationCurrent)
        }
        let modelData: PostUserAuthInfo = {
          username: initData.member ? initData.member.username : '',
          age: initData.memberExt.age || '',
          nation_id: nationId,
          nationality: nationName,
          idCard: initData.memberExt.id_card || '',
          idCardImg: initData.memberExt.id_card_img || '',
          handImg: initData.memberExt.hand_img || '',
          tel: initData.member ? initData.member.tel : '',
          code: '',
          address: initData.memberExt.address || '',
          birthday: initData.memberExt.birthday || '',
          gender: initData.memberExt.sex || ''
        }
        // 设置地图显示的名称
        let area: string = getLongAreaAdname(modelData.address)
        setArea(area)
        // 是否展示电话号
        if (initData.member && initData.member.check_degree == '2') setCheckDegree(true)
        // 性别下标
        if(initData.memberExt.sex !== ''){
          for(let i: number = 0; i < sexArray.length; i++){
            if(sexArray[i].id == initData.memberExt.sex){
              setSexName(sexArray[i].name)
              setSexCurrent(i)
              break
            }
          }
        }
        setModel(modelData)
        if (initData.member&&initData.member.check_degree == '2') setShowForm(true)
      }else{
        ShowActionModal({
          msg: data.errmsg,
          success: ()=> {
            Taro.navigateBack()
          }
        })
      }
    })
  }, [login])

  const userPostAuthInfo = ()=> {
    console.log(model)
    const item = JSON.parse(JSON.stringify(model))
    const modelItem = JSON.parse(JSON.stringify(initModel))
    console.log(sexCurrent,'sexCurrent');
    console.log(modelItem.nation[nationCurrent].mz_name,'nationCurrentnationCurrent');
    console.log(nationCurrent,'nationCurrent')
    // 判断大于18小于65
    let age;
    if (item.age<18 || item.age>65){
      const newData = new Date().getFullYear();
      let birth = modelItem.memberExt.birthday.substring(0, 4)
      age = newData - birth
      console.log(age,'12312312321')
    }else{
      age = item.age;
    }
    console.log(age)
    let params = {
      username: item.username,
      age:age,
      nation_id: nationCurrent+1,
      nationality: modelItem.nation[nationCurrent].mz_name,
      idCard: item.idCard,
      idCardImg: item.idCardImg,
      handImg: item.handImg,
      tel: item.tel,
      code: item.code,
      address: item.address,
      birthday: modelItem.memberExt.birthday,
      gender: sexCurrent+1
    }
    console.log(params)
    // return;
    postUserAuthInfo(params).then(res=>{
      console.log(res);
      SubscribeToNews('auth', () => {
        SubPopup({
          tips: res.errmsg,
          callback: () => {
            Taro.navigateBack({
              delta: 1
            })
          }
        })
      })
    })
  }
  const userUploadIdcard = (type: number = 2)=> {
    const modelObj = JSON.parse(JSON.stringify(model));
    //type = 1 证明 type = 2 手持  
    let url: string = type == 1 ? getIdcardAuthInfo : ''
    if(!initModel) return
    if(type === 1){
    CameraAndAlbum(url).then(data => {
      if(data.errcode == 'ok'){
        let memberExt: UserAuthInfoMemberExtData = JSON.parse(JSON.stringify(initModel.memberExt))
        if(type == 1){
          memberExt.id_card_img = data.url
          memberExt.id_card_img_path = data.httpurl
          setInitModel({ ...initModel, memberExt: memberExt })
        }else{
          memberExt.hand_img = data.url
          memberExt.hand_img_path = data.httpurl
          Msg(data.errmsg)
          return
        }
        if(data.card_info){
          setShowForm(true)
          let cardData = data.card_info
          if(data.card_info.success){
            memberExt.nation_id = cardData.nation_id || ''
            memberExt.birthday = cardData.birth || ''
            memberExt.address = cardData.address || ''
            memberExt.sex = cardData.sex || ''
            //memberExt.
            memberExt.id_card = cardData.num || '',
            memberExt.user_name = cardData.name || ''
          }else{
            Msg(data.card_info.tips_message)
            memberExt.id_card_img_path = cardInfoFailImg
            setInitModel({...initModel, memberExt: memberExt})
          }
        }
        // 生日
        let birthall;
        if (memberExt.birthday) {
          let birth = memberExt.birthday.substring(0, 4)
          let birthtwo = memberExt.birthday.substring(4, 6)
          let birththree = memberExt.birthday.substring(6, 8)
          if (memberExt.birthday != "") {
            birthall = birth + "-" + birthtwo + "-" + birththree;
          } else {
            birthall = ""
          }
        }
        // 性别
        let sexIndex;
        sexArray.map((v,i)=>{
          // let sexItem;
          if (memberExt.sex === v.name){
            // sexItem = v;
            sexIndex = i;
          }
        })
        setSexCurrent(sexIndex);
        setSexName(memberExt.sex)
        const dataItem = {
          username: memberExt.user_name ? memberExt.user_name : '',
          age: memberExt.age || '',
          nation_id: memberExt.nationId,
          nationality: memberExt.nationality,
          idCard: memberExt.id_card || '',
          idCardImg: memberExt.id_card_img || '',
          handImg: memberExt.hand_img || '',
          tel: modelObj.tel || '',
          code: '',
          address: memberExt.address,
          birthday: birthall || '',
          gender: sexIndex && sexIndex != -1 ? sexIndex : "",
        }
        memberExt.birthday = birthall;
        setInitModel({ ...initModel, memberExt: memberExt })
        setModel(dataItem)
        setInitModel({ ...initModel, memberExt: memberExt })
      }else{
        Msg(data.errmsg)
      }
    })
    }else{
      let memberExt: UserAuthInfoMemberExtData = JSON.parse(JSON.stringify(initModel.memberExt))
      // memberExt.hand_img = 
      UploadImgAction().then(res => {
        let imageItem = {
          url: res.url,
          httpurl: res.httpurl
        }
        console.log(imageItem);
        memberExt.hand_img = imageItem.url
        memberExt.hand_img_path = imageItem.httpurl
        // if (i === -1) {
        //   setImage({ ...image, item: [...image.item, imageItem] })
        // } else {
        //   image.item[i] = imageItem
        //   setImage({ ...image })
        // }
        const item = JSON.parse(JSON.stringify(model))
        item.handImg = imageItem.url;
        setModel(item)
      })
      setInitModel({ ...initModel, memberExt: memberExt })
    }
  }

  return {
    initModel,
    model,
    setModel,
    login,
    userPostAuthInfo,
    userUploadIdcard,
    sexArray,
    setSexCurrent,
    sexCurrent,
    showForm,
    sexName,
    setSexName,
    nationCurrent,
    setNationCurrent,
    setInitModel,
    checkDegree,
    area,
    setArea
  }
}