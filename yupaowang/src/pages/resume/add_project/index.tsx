import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Button } from '@tarojs/components'
import WordsTotal from '../../../components/wordstotal'
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
                <Text className='pulish-list-title'>项目名称</Text>
                <Input
                  className='publish-list-input'
                  type='text'
                  placeholder='请填写项目名称'
                  value=''
                  onInput={(e) => userEnterFrom(e, 'title')}
                />
              </View>

              <View className='publish-list-item' >
                <Text className='pulish-list-title'>开始时间</Text>
                <Picker
                  mode="date"
                  value=''
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'b')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value='' />
                </Picker>
              </View>

              <View className='publish-list-item' >
                <Text className='pulish-list-title'>结束时间</Text>
                <Picker
                  mode="date"
                  value=''
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'b')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value='' />
                </Picker>
              </View>
              <View className='publish-list-item' >
                <Text className='pulish-list-title'>所在地区</Text>
                <Picker
                  mode="date"
                  value=''
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'b')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value='' />
                </Picker>
              </View>
              <View className='publish-list-textarea' >
                <Text className='publish-textarea-title'>项目描述</Text>
                <Textarea
                  className='publish-textarea'
                  value=''
                  placeholder='主要描述项目中的工作情况'
                  onInput={(e) => userEnterFrom(e, 'detail')}
                ></Textarea>
                <WordsTotal num={0} />
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