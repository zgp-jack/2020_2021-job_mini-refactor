import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Button } from '@tarojs/components'
import WordsTotal from '../../../components/wordstotal'
import useResumeAddInfo from '../../../hooks/resume_addinfo'
import ImageView from '../../../components/imageview'
import './index.scss'

export default function AddResumeInfo() {

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
                <Text className='pulish-list-title'>职业技能</Text>
                <Input
                  className='publish-list-input'
                  type='text'
                  placeholder='请填写职业技能名称'
                  value=''
                  onInput={(e) => userEnterFrom(e, 'title')}
                />
              </View>
              
              <View className='publish-list-item' >
                <Text className='pulish-list-title'>领证时间</Text>
                <Picker
                  mode="date"
                  value=''
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'b')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value='' />
                </Picker>
              </View>
              
            </View>
            <View className='resume-add-imgsview'>
              <ImageView images={[]} max={6} />
            </View>
          </Form>
        </View>
      </View>
      <View className='resume-add-skill-footer'>
        <View className='resume-add-skill-btn'>保存 继续添加</View>
        <View className='resume-add-skill-btn'> 确认保存</View>
      </View>
    </View>
  )
}