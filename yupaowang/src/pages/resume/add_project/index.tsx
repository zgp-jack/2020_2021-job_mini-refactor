import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Button } from '@tarojs/components'
import WordsTotal from '../../../components/wordstotal'
import ImageView from '../../../components/imageview';
import AddProject from '../../../hooks/publish/add_project';
import { CertificateImgMaxNum } from '../../../config'
import UploadImgAction from '../../../utils/upload'
import { RecruitImageModel } from '../../recruit/index.d'
import './index.scss'

export default function AddResumeInfo() {
  // 引入数据
  const { project,setProject } = AddProject();
  console.error(project,'11111');
  // 用户输入表单
  const userEnterFrom = (e: any, type: string) => {
    console.log(e, type)
    project[type] = e.detail.value;
    setProject({...project});
  }

  // picker 发生改变
  const onPickerChange = (e: any, type: string) => { 
    project[type] = e.detail.value;
    setProject({...project});
  }

  // picker 切换行
  const onColumnChange = (e) => { }

  // 用户删除图片
  const useDelImg = (i: number) => {
    // let imgs: RecruitImageModel[] = { ...project.image };
    // imgs.splice(i, 1)
    // setProject({ ...project, image: imgs})
  }

  // 用户上传图片
  const userUploadImg = (i: number) => {
    UploadImgAction().then(res => {
      let imageItem: RecruitImageModel = {
        url: res.url,
        httpurl: res.httpurl
      }
      //  if (i === -1) { // -1 代表上传 其他代表当前图片下标
      //   setSkillBookInfo({ ...skillBookInfo, imgs: [...skillBookInfo.imgs, imageItem] })
      // } else {
      //   skillBookInfo.imgs[i] = imageItem
      //   setSkillBookInfo({ ...skillBookInfo })
      // }
    })
  }
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
                  value={project.project_name}
                  onInput={(e) => userEnterFrom(e, 'project_name')}
                />
              </View>

              <View className='publish-list-item' >
                <Text className='pulish-list-title'>开始时间</Text>
                <Picker
                  mode="date"
                  value={project.start_time}
                  // range-key="name"
                  onChange={(e) => onPickerChange(e, 'start_time')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value={project.start_time} />
                </Picker>
              </View>

              <View className='publish-list-item' >
                <Text className='pulish-list-title'>结束时间</Text>
                <Picker
                  mode="date"
                  value={project.completion_time}
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'completion_time')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value={project.completion_time} />
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
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value={project.province_name + project.city_name} />
                </Picker>
              </View>
              <View className='publish-list-textarea' >
                <Text className='publish-textarea-title'>项目描述</Text>
                <Textarea
                  className='publish-textarea'
                  value={project.detail}
                  placeholder='主要描述项目中的工作情况'
                  onInput={(e) => userEnterFrom(e, 'detail')}
                ></Textarea>
                <WordsTotal num={0} />
              </View>
            </View>
            <View className='resume-add-imgsview'>
              <ImageView 
                images={[]} 
                max={CertificateImgMaxNum} 
                userDelImg={(i) => useDelImg(i)}
                userUploadImg={(i) => userUploadImg(i)}
                />
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