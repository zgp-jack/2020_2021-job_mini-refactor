import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Button } from '@tarojs/components'
import WordsTotal from '../../../components/wordstotal'
import useResumeAddInfo from '../../../hooks/resume_addinfo'
import useCode from '../../../hooks/code'
import './index.scss'

export default function AddResumeInfo(){

  // 获取hooks数据
  const { infoConfig, genderCurrent, startDatePicker } = useResumeAddInfo()
  // 发送验证码
  const { text, userGetCode } = useCode()
  // 用户输入表单
  const userEnterFrom = (e:any, type: string) => {
    console.log(e, type)
  }

  // picker 发生改变
  const onPickerChange = (e:any, type: string) => {}

  // picker 切换行
  const onColumnChange = (e) => {}

  return (
    <View className='resume-addinfo-container'>
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
                    value=''
                    onInput={(e) => userEnterFrom(e, 'title')}
                  />
                </View>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>性别</Text>
                  <Picker
                    mode="selector"
                    range={ infoConfig.gender }
                    value={ genderCurrent }
                    range-key="name"
                    onChange={(e) => onPickerChange(e, 'a')}
                  >
                <Input className='publish-list-input' type='text' disabled placeholder='请选择性别' value='' />
                </Picker>
                </View>
                <View className='publish-list-item' >
                  <Text className='pulish-list-title'>出生年月</Text>
                  <Picker
                    mode="date"
                    value=''
                    range-key="name"
                    start={startDatePicker}
                    onChange={(e) => onPickerChange(e,'b')}
                  >
                    <Input className='publish-list-input' type='text' disabled placeholder='请选择出生年月' value='' />
                  </Picker>
                </View>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>民族</Text>
                  <Input
                    className='publish-list-input'
                    type='text'
                    placeholder='请选择民族'
                    value=''
                    onInput={(e) => userEnterFrom(e, 'user_name')}
                  />
                </View>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>所属工种</Text>
                  <Input
                    className='publish-list-input'
                    type='number'
                    placeholder='请选择所属工种'
                    value=''
                    onInput={(e) => userEnterFrom(e, 'user_mobile')}
                  />
                </View>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>所在地区</Text>
                <Input
                  className='publish-list-input'
                  type='text'
                  placeholder='请选择所在地区'
                  value=''
                  onInput={(e) => userEnterFrom(e, 'user_mobile')}
                />
              </View>
            </View>

            <View className='resume-addinfo-body'>
                <View className='publish-list-item'>
                  <Text className='pulish-list-title'>手机号</Text>
                  <Input
                    className='publish-list-input'
                    type='number'
                    placeholder='请输入您的手机号'
                    value=''
                    onInput={(e) => userEnterFrom(e, 'user_mobile')}
                  />
                </View>
                <View className='publish-list-item publish-list-item-code'>
                  <Text className='pulish-list-title'>验证码</Text>
                  <Input
                    className='publish-list-input'
                    type='text'
                    placeholder='请输入验证码'
                    value=''
                    onInput={(e) => userEnterFrom(e, 'code')}
                  />
                  <View className='publish-code-btn' onClick={() => userGetCode('')}>{text}</View>
                </View>
            </View>  

            <View className='resume-addinfo-body'>
              <View className='publish-list-textarea'>
                  <Text className='publish-textarea-title'>自我介绍</Text>
                  <Textarea
                    className='publish-textarea'
                    value=''
                    placeholder='请简要介绍您所从事的行业以及工作经验...'
                    onInput={(e) => userEnterFrom(e, 'detail')}
                  ></Textarea>
                  <WordsTotal num={0} />
                </View>
              </View>
              <View className='publish-recruit-btn' onClick={() => {}} >确认发布</View>
            </Form>
          </View>
        </View>
      </View>
  )
}