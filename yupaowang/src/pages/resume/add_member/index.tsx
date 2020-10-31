import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Button } from '@tarojs/components'
import WordsTotal from '../../../components/wordstotal'
import useResumeAddInfo from '../../../hooks/resume_addinfo'
import useCode from '../../../hooks/code'
import './index.scss'

export default function AddResumeInfo() {

  // 获取配置项信息
  const { infoConfig } = useResumeAddInfo()

  // 用户输入表单
  const userEnterFrom = (e: any, type: string) => {
    console.log(e, type)
  }

  // picker 发生改变
  const onPickerChange = (e: any, type: string) => { }

  // picker 切换行
  const onColumnChange = (e) => { }

  return (
    <View className='resume-addinfo-container'>
      <View className='resume-addinfo-form'>
        <View className='publish-recruit-container'>
          <Form>
            <View className='resume-addinfo-body'>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>工龄</Text>
                <Input
                  className='publish-list-input'
                  type='text'
                  placeholder='请输入您的工龄'
                  value=''
                  onInput={(e) => userEnterFrom(e, 'title')}
                />
              </View>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>家乡</Text>
                {/* <Picker
                  mode="selector"
                  range={infoConfig.gender}
                  value={genderCurrent}
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'a')}
                > */}
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择家乡' value='' />
                {/* </Picker> */}
              </View>
              <View className='publish-list-item' >
                <Text className='pulish-list-title'>熟练度</Text>
                <Picker
                  mode="selector"
                  range={infoConfig.prof_degree}
                  value={1}
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'b')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择熟练度' value='' />
                </Picker>
              </View>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>人员构成</Text>
                <Picker
                  mode="selector"
                  range={infoConfig.type}
                  value={1}
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'b')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择人员构成' value='' onInput={(e) => userEnterFrom(e, 'user_name')}
                />
                </Picker>
              </View>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>队伍人数</Text>
                <Input
                  className='publish-list-input'
                  type='number'
                  placeholder='请输入队伍人数'
                  value=''
                  onInput={(e) => userEnterFrom(e, 'user_mobile')}
                />
              </View>
            </View>

            <View className='resume-addinfo-body'>
              <View className='resume-member-tags-tips'>为自己贴个标签，让老板更懂你(可选3个)</View>
              <View className='resume-member-tags clearfix'>
                {infoConfig.label.map(item => (
                  <View className='resume-member-tag-item' key={item.id}><Text className='resume-tag-text'>{item.label_name}</Text></View>
                ))}
              </View>
            </View>

            <View className='publish-recruit-btn' onClick={() => { }} >确认发布</View>
          </Form>
        </View>
      </View>
    </View>
  )
}