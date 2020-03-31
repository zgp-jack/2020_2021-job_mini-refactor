import Taro, { useState } from '@tarojs/taro'
import { View, Text, Input, Image, Button, Picker } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import useRealname from '../../hooks/realname'
import './index.scss'

export default function RealName(){

  const { userUploadIdcard, sexArray, sexCurrent, setSexCurrent, setSexName, sexName } = useRealname()
  
  // 初始化生日选择时间
  const date = new Date()
  const year: number = date.getFullYear()
  const month: number = date.getMonth() + 1
  const day: number = date.getDate()
  const startDate: string = (year - 60) + '-' + month + '-' + day
  const endDate: string = (year - 18) + '-' + month + '-' + day

  // 用户滑动性别picker
  const userChangeSex = (e: any)=> {
    let current: number = parseInt(e.detail.value);
    let id: string = sexArray[current].id
    setSexCurrent(current)
    setSexName(sexArray[current].name)
  }

  // 用户上传身份证照片
  const userUploadIdcardImg = ()=> {
    userUploadIdcard(1)
  }

  // 用户选择生日
  const userChangeBirthday = (e: any)=> {
    let { value } = e.detail;
    console.log(value)
  }


  return (
    <View className='realname-container'>
      <View className='realname-cardimgbox'>
        <View className='realname-card-title'>请拍摄并上传你的身份证照片</View>
        <View className='realname-card-imgs clearfix'>
          <View className='realname-card-item' onClick={() => userUploadIdcardImg()}>
            <View className='realname-card-img'>
              <Image className='realname-card-upimg' src={ IMGCDNURL + 'lpy/auth/idcard-l.png' } />
            </View>
            <View className='realname-card-title'>身份证正面照</View>
          </View>
          <View className='realname-card-item' onClick={() => userUploadIdcardImg()}>
            <View className='realname-card-img'>
              <Image className='realname-card-upimg' src={ IMGCDNURL + 'lpy/auth/idcard-z.png'} />
            </View>
            <View className='realname-card-title'>手持身份证照</View>
          </View>
        </View>
      </View>
      <View className='realname-card-remark'>
        <View className='realname-remark-title'>拍摄身份证要求</View>
        <View className='realname-remark-tips'>大陆公民持有的本人有效二代身份证;</View>
        <View className='realname-remark-tips'>拍摄时确保身份证<Text className='realname-remark-text'>边框完整，字体清晰，亮度均匀;</Text></View>
        <View className='realname-remark-imglist'>
          <View className='realname-remark-imgitem'>
            <Image className='realname-remark-item-img' src={ IMGCDNURL + 'lpy/auth/idcard-yes.png' } />
            <Text className='realname-remark-item-text'>标准</Text>
          </View>
          <View className='realname-remark-imgitem'>
            <Image className='realname-remark-item-img' src={IMGCDNURL + 'lpy/auth/idcard-bkqs.png'} />
            <Text className='realname-remark-item-text'>边框缺失</Text>
          </View>
          <View className='realname-remark-imgitem'>
            <Image className='realname-remark-item-img' src={IMGCDNURL + 'lpy/auth/idcard-qs.png'} />
            <Text className='realname-remark-item-text'>照片模糊</Text>
          </View>
          <View className='realname-remark-imgitem'>
            <Image className='realname-remark-item-img' src={IMGCDNURL + 'lpy/auth/idcard-sg.png'} />
            <Text className='realname-remark-item-text'>闪光强烈</Text>
          </View>
        </View>
      </View>
      <View className='realname-card-form'>
        <View className='publish-list-item'>
          <Text className='pulish-list-title'>姓名</Text>
          <Input
            className='publish-list-input'
            type='text'
            placeholder='请输入姓名'
            value=''
          />
        </View>
        <View className='publish-list-item'>
          <Text className='pulish-list-title'>性别</Text>
          <Picker onChange={(e) => userChangeSex(e)} value={ sexCurrent } rangeKey='name' mode='selector' range={ sexArray }>
            <Input
              className='publish-list-input'
              type='text'
              disabled
              placeholder='请选择性别'
              value={ sexName }
            />
          </Picker>
        </View>
        <View className='publish-list-item'>
          <Text className='pulish-list-title'>出生日期</Text>
          <Picker mode='date' value='2001-01-12' onChange={(e)=>userChangeBirthday(e)} start={ startDate } end={ endDate }>
            <Input
              className='publish-list-input'
              type='text'
              disabled
              placeholder='请选择出生日期'
              value=''
            />
          </Picker>
        </View>
        <View className='publish-list-item'>
          <Text className='pulish-list-title'>民族</Text>
          <Input
            className='publish-list-input'
            type='text'
            disabled
            placeholder='请选择民族'
            value=''
          />
        </View>
        <View className='publish-list-item'>
          <Text className='pulish-list-title'>身份证号</Text>
          <Input
            className='publish-list-input'
            type='text'
            placeholder='请输入身份证号码'
            value=''
          />
        </View>
        <View className='publish-list-item'>
          <Text className='pulish-list-title'>详细地址</Text>
          <Input
            className='publish-list-input'
            type='text'
            disabled
            placeholder='请选择详细地址'
            value=''
          />
        </View>
      </View>
      <View className='realname-card-form'>
        <View className='publish-list-item'>
          <Text className='pulish-list-title'>电话号码</Text>
          <Input
            className='publish-list-input'
            type='text'
            placeholder='请输入电话号码'
            value=''
          />
        </View>
        <View className='publish-list-item publish-list-item-code'>
          <Text className='pulish-list-title'>验证码</Text>
          <Input
            className='publish-list-input'
            type='text'
            placeholder='请输入验证码'
            value=''
          />
          <View className='publish-code-btn' >获取验证码</View>
        </View>
      </View>
      <Button className='userauth-btn'>身份认证</Button>
    </View>
  )
}