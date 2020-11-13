import Taro, { useEffect, useState, Config } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import { userChangeAvatar, userUpdateName } from '../../../utils/request'
import UploadImgAction from '../../../utils/upload'
import { useSelector } from '@tarojs/redux'
import { UserMemberInfo } from '../../../reducers/member'
import Msg from '../../../utils/msg'
import './index.scss'

export default function UserInfoIndex(){

  const memberInfo = useSelector< any, UserMemberInfo>(store => store['member'])

  // 用户改头像
  const [headerImg, setHeaderImg] = useState<string>(memberInfo.avatar)
  // 是否展示修改名字模态框
  const [showModal, setShowModal] = useState<boolean>(false)
  // 用户名字
  const [name, setName] = useState<string>(memberInfo.username)
  // 用户新名字
  const [newName, setNewName] = useState<string>(memberInfo.username)
  // 用户所有信息
  const [phone, setPhone] = useState<string>(memberInfo.phone)

  useEffect(() => {
    setPhone(memberInfo.phone)
  }, [memberInfo])

  // 用户输入新名字
  const userEnterName = (e: any)=> {
    let { value = '' } = e.detail
    setNewName(value)
  }
  // 用户修改头像
  const userUploadAvatar = ()=> {
    UploadImgAction().then(res=>{
      if(res.errcode == 'ok'){
        userChangeAvatar(res.url).then(data=>{
          Msg(data.errmsg)
          if(data.errcode == 'ok'){
            setHeaderImg(res.httpurl)
          }
        })
      }else{
        Msg(res.errmsg)
      }
    }).catch(()=>{
      Msg('网络错误，上传失败')
    })
    
  }

  // 用户前往修改手机
  const userJumpPhonePage = ()=> {
    Taro.navigateTo({
      url: `/pages/userinfo/phone/index`
    })
  }

  // 用户修改新名字
  const userSubmitName = ()=> {
    if(newName === name){
      setShowModal(false) 
      return
    }
    userUpdateName(newName).then(res=>{
      Msg(res.errmsg)
      if(res.errcode == 'ok'){
        setName(newName)
        setShowModal(false)
      }
    }).catch(()=>{
      Msg('网络错误，修改失败')
    })
  }

  // 用户修改姓名
  const useEditName = () => {
    if (!memberInfo.username) return
    setShowModal(true)
  }

  //修改密码
  const onSetPassword = ()=> {
    const url = "/pages/userinfo/updatePass/index";
    Taro.navigateTo({
      url
    })
  }

  return (
    <View>
      <View className='user-updatainfo-container'>
        <View className='user-updatainfo-item clearfix' onClick={() => userUploadAvatar()}>
          <View className='user-updatainfo-left'>头像</View>
          <Image className='user-updatainfo-right user-updatainfo-avatar' src={ headerImg } />
        </View>
        <View className='user-updatainfo-item clearfix' onClick={()=>useEditName()}>
          <View className='user-updatainfo-left'>姓名</View>
          <View className='user-updatainfo-right'>{ name }</View>
        </View>
        <View className='user-updatainfo-item clearfix' onClick={onSetPassword}>
          <View className='user-updatainfo-left'>修改密码</View>
          <View className='user-updatainfo-right'></View>
        </View>
        <View className='user-updatainfo-item clearfix' onClick={()=>userJumpPhonePage()}>
          <View className='user-updatainfo-left'>手机号</View>
          <View className='user-updatainfo-right'>{ phone }</View>
        </View>
      </View>
      {showModal &&
      <View className='yupao-common-enterbox'>
        <View className='yupao-common-enter'>
          <Text className='yupao-enter-title'>修改姓名</Text>
          <Text className='yupao-enter-tips'>请输入您的姓名</Text>
          <View className='yupao-enter-body'>
            <Input className='yupao-enter-wrap yupao-enter-input' value={ newName } placeholder='请输入您的姓名' onInput={(e)=>userEnterName(e)} />
          </View>
          <View className='yupao-enter-footer clearfix'>
            <Text onClick={()=>setShowModal(false)}>取消</Text>
            <Text onClick={()=>userSubmitName()}>确定</Text>
          </View>
        </View>
      </View>
      }
    </View>
  )
}


UserInfoIndex.config = {
  navigationBarTitleText: '修改资料'
} as Config