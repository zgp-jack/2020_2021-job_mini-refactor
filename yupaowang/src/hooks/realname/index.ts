import Taro, { useState, useEffect } from '@tarojs/taro'
import { UserAuthInfoData, UserAuthInfoMemberExtData } from '../../utils/request/index.d'
import { PostUserAuthInfo } from '../index.d'
import { getUserAuthInfo, postUserAuthInfo } from '../../utils/request'
import { useSelector } from '@tarojs/redux'
import Msg, { ShowActionModal } from '../../utils/msg'
import { CameraAndAlbum } from '../../utils/upload'
import { getIdcardAuthInfo } from '../../utils/api'
import { IMGCDNURL } from '../../config'
import { getLongAreaAdname } from '../../models/area'

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
        let initData: UserAuthInfoData = data.authData
        setInitModel(initData)
        let nationId: string = initData.memberExt.nation_id || ''
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
  }

  const userUploadIdcard = (type: number = 2)=> {
    //type = 1 证明 type = 2 手持  
    let url: string = type == 1 ? getIdcardAuthInfo : ''
    if(!initModel) return
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
      }else{
        Msg(data.errmsg)
      }
    })
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