import Taro, { useState, useEffect, useRouter } from '@tarojs/taro'
import { View, Text, Form, Textarea, Input, Picker, Button } from '@tarojs/components'
import WordsTotal from '../../../components/wordstotal'
import ImageView from '../../../components/imageview';
import AddProject from '../../../hooks/publish/add_project';
import { ProjectImgMaxNum } from '../../../config'
import UploadImgAction from '../../../utils/upload'
import { RecruitImageModel, } from '../../recruit/index.d'
import AREAS, { ParentItems } from '../../../models/area'
import { resProjectArr } from '../../../utils/request/index.d';
import { useSelector, useDispatch } from '@tarojs/redux'
import { objDeepCopy } from '../../../utils/helper'
import { useResumeType } from '../../../pages/resume/publish/index.d';
import './index.scss'

interface ProjectInfoType{
  project_name:string,
  start_time:string,
  completion_time:string,
  city_name:string,
  province_name:string,
  detail:string,
  imgs: RecruitImageModel[]
}
// 保存的多级城市数据类型
interface HomeTownPicker {
  id: string,
  pid: string,
  name: string
}
export default function AddResumeInfo() {
  // 获取路由参数 
  const { id = '' } = useRouter().params
  // 将找活中项目经验相关的数据取出
  const resumeData: useResumeType = useSelector<any, useResumeType>(item => item.resumeData);
  // 保留一份默认数据， 方便我们继续添加的时候使用
  const defaultProjectData: ProjectInfoType = {
    project_name: '',
    start_time: '',
    completion_time: '',
    city_name: '',
    province_name:'',
    detail: '',
    imgs: []
  }
  // 城市数据
  const [hometownPicker, setHometownPicker] = useState<HomeTownPicker[][]>([])
  const [hometownChildCity, setHometownChildCity] = useState<HomeTownPicker[][]>([])
  const [hometownIndex, setHometownIndex] = useState<number[]>([0, 0])
  // 技能证书的数据
  let projectInfoData: ProjectInfoType = { ...defaultProjectData }
  useEffect(()=>{
    detailAreasDataAction()
  },[])
  const detailAreasDataAction = ()=>{
    let areas: ParentItems[] = objDeepCopy(AREAS)
    areas.splice(0, 1) // 切掉第一项 全国数据
    let parentArr: HomeTownPicker[] = []
    let childArr: HomeTownPicker[][] = []
    for (let i = 0; i < areas.length; i++) {
      let item = areas[i]
      let data: HomeTownPicker = {
        id: item.id,
        pid: item.pid,
        name: item.name
      }
      parentArr.push(data)
      if (item.has_children) {
        let itemArr = item.children.map(({ id, pid, name }) => ({ id, pid, name }))
        childArr.push(itemArr)
      } else {
        childArr.push([data])
      }
    }
    // 设置初始化数据
    setHometownChildCity(childArr)
    // 将省份先保存起来
    let htpicker: HomeTownPicker[][] = []
    htpicker[0] = parentArr
    htpicker[1] = childArr[0]
    setHometownPicker(htpicker)
  }
  if(id){
    let data = resumeData.projectData.find(item =>item.id == id);
    if (data) {
      // 由于接口的图片数据是分开的，所以需要自己重组
      let imgs: RecruitImageModel[] = []
      for (let i = 0; i < data.image.length; i++) {
        imgs.push({ url: data.images[i], httpurl: data.image[i] })
      }
      projectInfoData = { project_name: data.project_name, start_time: data.start_time, imgs: imgs,
        completion_time: data.completion_time, city_name: data.city_name, detail: data.detail, province_name: data.province_name
      }
      let areas: ParentItems[] = objDeepCopy(AREAS)
      console.error(data,'data')
      // const provinceItem = areas.filter(item => item.id == data && data.province);

      setHometownIndex([+data.province,+data.city]);
    }
  }
  // 项目信息
  const [projectInfo, setProjectInfo] = useState<ProjectInfoType>(projectInfoData)
  // 用户删除图片
  const useDelImg = (i: number) => {
    let imgs: RecruitImageModel[] = [ ...projectInfo.imgs]
    console.error(imgs,'image');
    console.error(i,'iii');
    imgs.splice(i, 1)
    setProjectInfo({ ...projectInfo, imgs: imgs })
  }

  // 用户上传图片
  const userUploadImg = (i: number) => {
    UploadImgAction().then(res => {
      let imageItem: RecruitImageModel = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (i === -1) { // -1 代表上传 其他代表当前图片下标
        setProjectInfo({ ...projectInfo, imgs: [...projectInfo.imgs, imageItem] })
      } else {
        projectInfo.imgs[i] = imageItem
        setProjectInfo({ ...projectInfo })
      }
    })
  }
   // 用户输入表单
  const userEnterFrom = (e: any, type: string) => {
    console.log(e, type)
    projectInfo[type] = e.detail.value;
    setProjectInfo({ ...projectInfo});
  }
  // 确定选择当前城市
  const multiPickerChange = (e: any) => {
    let parentData: HomeTownPicker = hometownPicker[0][e.detail.value[0]]
    let childData: HomeTownPicker = hometownPicker[1][e.detail.value[1]]
    let ids: string = `${parentData.id},${childData.id}`
    let title: string = childData.id == parentData.id ? parentData.name : `${parentData.name}-${childData.name}`
    console.error(ids,'ids');
    console.error(title,'title');
    // setPostData({ ...postData, hometown: ids })
    // setHometown(title)
  }
  // picker 切换行
  const onColumnChange = (e: any) => {
    let column: number = e.detail.column // 代表当前改变的是第几列
    let i: number = e.detail.value // 代表当前展示的是改列的第几个
    if (column == 0) {
      let data: HomeTownPicker[] = [...hometownChildCity[i]]
      let redata: HomeTownPicker[][] = JSON.parse(JSON.stringify(hometownPicker))
      redata[1] = data
      setHometownPicker(redata)
      setHometownIndex([i, 0])
    } else {
      let numArr: number[] = JSON.parse(JSON.stringify(hometownIndex))
      numArr[1] = i
      setHometownIndex(numArr)
    }
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
                  value={projectInfo.project_name}
                  onInput={(e) => userEnterFrom(e, 'project_name')}
                />
              </View>
              <View className='publish-list-item' >
                <Text className='pulish-list-title'>开始时间</Text>
                <Picker
                  mode="date"
                  value={projectInfo.start_time}
                  range-key="name"
                  onChange={(e) => userEnterFrom(e, 'start_time')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value={projectInfo.start_time} />
                </Picker>
              </View>
              <View className='publish-list-item' >
                <Text className='pulish-list-title'>结束时间</Text>
                <Picker
                  mode="date"
                  value={projectInfo.completion_time}
                  range-key="name"
                  onChange={(e) => userEnterFrom(e, 'completion_time')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value={projectInfo.completion_time} />
                </Picker>
              </View>
              <View className='publish-list-item' >
                <Text className='pulish-list-title'>所在地区</Text>
                <Picker
                  mode="multiSelector"
                  value={hometownIndex}
                  range-key="name"
                  range={hometownPicker}
                  onChange={(e) => multiPickerChange(e)}
                  onColumnChange={(e) => onColumnChange(e)}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择领证时间' value={projectInfo.province_name + projectInfo.city_name} />
                </Picker>
              </View>
              <View className='publish-list-textarea' >
                <Text className='publish-textarea-title'>项目描述</Text>
                <Textarea
                  className='publish-textarea'
                  value={projectInfo.detail}
                  placeholder='主要描述项目中的工作情况'
                  onInput={(e) => userEnterFrom(e, 'detail')}
                ></Textarea>
                <WordsTotal num={projectInfo.detail.length} />
              </View>
            </View>
            <View className='resume-add-imgsview'>
              <ImageView 
                images={projectInfo.imgs} 
                max={ProjectImgMaxNum} 
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