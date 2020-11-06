import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, Text, Form, Input, Picker } from '@tarojs/components'
import useResumeAddInfo from '../../../hooks/resume_addinfo'
import AREAS, { ParentItems } from '../../../models/area'
import { ResumeMemberLabelsMaxNum } from '../../../config'
import { objDeepCopy } from '../../../utils/helper'
import { resumesIntroduceAction } from '../../../utils/request'
import { ResumeAddInfoLabelConfig } from '../../../utils/request/index.d' 
import classnames from 'classnames'
import './index.scss'
import useResume from '../../../hooks/publish/resume'
import Msg, { ShowActionModal } from '../../../utils/msg'

// 需求提交的数据类型
interface MemberInfoType {
  number_people: string,
  experience: string,
  hometown: string,
  prof_degree: string,
  type: string,
  tags: string[]
}

// 保存的多级城市数据类型
interface HomeTownPicker {
  id: string,
  pid: string,
  name: string
}

// labels数据类型 新增是否选择
interface ResumeLabelsType extends ResumeAddInfoLabelConfig{
  checked: boolean
}

export default function AddResumeMember() {

  // 获取找活信息
  const { introducesData } = useResume()
  // 获取配置项信息
  const { infoConfig } = useResumeAddInfo()
  // 默认提交数据
  const [postData, setPostData] = useState<MemberInfoType>({
    number_people: introducesData.number_people || '',
    experience: introducesData.experience || '',
    hometown: introducesData.hometown_id || '',
    prof_degree: introducesData.prof_degree || '',
    type: introducesData.type || '',
    tags: introducesData.tag_id.split(",") || []
  })
  // 充值labels数据
  const [resumeLabels, setResumeLabels] = useState<ResumeLabelsType[]>([])
  // 城市数据
  const [hometownPicker, setHometownPicker] = useState<HomeTownPicker[][]>([])
  const [hometownChildCity, setHometownChildCity] = useState<HomeTownPicker[][]>([])
  // 家乡名称
  const [hometown, setHometown] = useState<string>(introducesData.hometown || '')
  const [hometownIndex, setHometownIndex] = useState<number[]>([0,0])
  // 熟练度名称
  const [profDegree, setProfDegree] = useState<string>(introducesData.prof_degree_str || '')
  const [profDegreeIndex, setProfDegreeIndex] = useState<number>(0)
  // 人员构成名称
  const [memberType, setMemberType] = useState<string>(introducesData.type_str || '')
  const [memberTypeIndex, setMemberTypeIndex] = useState<number>(0)

  // 用户输入表单
  const userEnterFrom = (e: any, type: string) => {
    let val: string = e.detail.value
    let data: MemberInfoType = {...postData}
    data[type] = val
    setPostData(data)
  }

  // 确定选择当前城市
  const multiPickerChange = (e: any) => {
    let parentData: HomeTownPicker = hometownPicker[0][e.detail.value[0]]
    let childData: HomeTownPicker = hometownPicker[1][e.detail.value[1]]
    let ids: string = `${parentData.id},${childData.id}` 
    let title: string = childData.id == parentData.id ? parentData.name : `${parentData.name}-${childData.name}`
    setPostData({...postData, hometown: ids})
    setHometown(title)
  }

  // 默认处理城市数据
  const detailAreasDataAction = () => {
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

    // 根据id查找家乡的key
    if (postData.hometown) {
      let arr: string[] = postData.hometown.split(',')
      let i: number = parentArr.findIndex(item => item.id == arr[0])
      if (i > -1) {
        let pickerCity: HomeTownPicker[][] = []
        pickerCity[0] = parentArr
        pickerCity[1] = childArr[i]
        setHometownPicker(pickerCity)
        let key: number = childArr[i].findIndex(item => item.id == arr[1])
        setHometownIndex([i, key > -1 ? key : 0])
        return
      }

    }
    // 否则设置默认数据
    let htpicker: HomeTownPicker[][] = []
    htpicker[0] = parentArr
    htpicker[1] = childArr[0]
    setHometownPicker(htpicker)
  }

  // 默认处理标签信息
  useEffect(() => {
    if(infoConfig.isset){
      let labels = JSON.parse(JSON.stringify(infoConfig.label))
      for (let i = 0; i < labels.length; i++){
        let id: string = labels[i].id
        let flag = postData.tags.find(item => item == id)
          labels[i].checked = flag ? true : false
      }
      setResumeLabels(labels)
    }
  },[infoConfig,introducesData])

  useEffect(()=>{
    // 处理地区信息
    detailAreasDataAction()
  },[])

  useEffect(()=>{
    //初始化picker-key值
    initPickerKey()
  },[postData,infoConfig])

  // 初始化picker
  const initPickerKey = () => {
    // 根据id查找熟练度的key
    if(postData.prof_degree){
      let progIndex: number = infoConfig.prof_degree.findIndex(item => item.id == postData.prof_degree)
      if (progIndex > -1) setProfDegreeIndex(progIndex)
    }
    // 根据id查找人员构成的key
    if(postData.type){
      let memberIndex: number = infoConfig.type.findIndex(item => item.id == postData.type)
      if (memberIndex > -1) setMemberTypeIndex(memberIndex)
    }
  }

  // picker 发生改变
  const onPickerChange = (e: any, type: string) => {
    let index: number = parseInt(e.detail.value)
    let title: string = infoConfig[type][index].name
    let id: string = infoConfig[type][index].id
    switch(type){
      case 'prof_degree':
        setProfDegree(title)
        setPostData({...postData,prof_degree:id})
        break
      case 'type': 
        setMemberType(title)
        setPostData({ ...postData, type: id })
        break
      default:
        break
    }
  }

  // picker 切换行
  const onColumnChange = (e: any) => {
    let column: number = e.detail.column // 代表当前改变的是第几列
    let i: number = e.detail.value // 代表当前展示的是改列的第几个
    if (column == 0){
      let data: HomeTownPicker[] = [...hometownChildCity[i]]
      let redata: HomeTownPicker[][] = JSON.parse(JSON.stringify(hometownPicker))
      redata[1] = data
      setHometownPicker(redata)
      setHometownIndex([i,0])
    }else{
      let numArr: number[] = JSON.parse(JSON.stringify(hometownIndex))
      numArr[1] = i
      setHometownIndex(numArr)
    }
  }

  // 点击切换标签
  const userClickTag = (i: number) => {
    let arrs = resumeLabels.filter(item => item.checked)
    let labels = JSON.parse(JSON.stringify(resumeLabels))
    let id: string = labels[i].id
    if(resumeLabels[i].checked){
      // 如果之前是被选中的 那就取消选中并从提交数据中删除
      labels[i].checked = false
      let tags: string[] = JSON.parse(JSON.stringify(postData.tags))
      let index: number = tags.findIndex(item => item == id)
      tags.splice(index,i)
      setPostData({...postData,tags: tags})
    }else{
      if (arrs.length >= ResumeMemberLabelsMaxNum) {
        Msg(`最多选择${ResumeMemberLabelsMaxNum}个标签`)
        return
      }
      labels[i].checked = true
      setPostData({ ...postData, tags: [...postData.tags, id] })
    }
    setResumeLabels(labels)
  }

  // 提交数据
  const userSubmitMemberInfo = () => {
    if (!postData.experience){
      Msg('请输入您的工龄')
      return
    }
    if (!postData.hometown) {
      Msg('请选择您的家乡')
      return
    }
    if (!postData.prof_degree) {
      Msg('请选择熟练度')
      return
    }
    if (!postData.type) {
      Msg('请选择人员构成')
      return
    }
    if (postData.type != '1') {
      if (!postData.number_people) {
        Msg('请输入您的队伍人数')
        return
      }
      if (parseInt(postData.number_people) < 2 ) {
        Msg('队伍人数至少两个')
        return
      }
    }
    if (!postData.tags.length) {
      Msg('请选择个性标签')
      return
    }
    resumesIntroduceAction(postData).then(res => {
      if (res.errcode === 200){
        ShowActionModal({
          msg: res.errmsg,
          success: () => Taro.navigateBack()
        })
      }else{
        Msg(res.errmsg)
      }
    })
  }

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
                  type='number'
                  placeholder='请输入您的工龄'
                  value={postData.experience}
                  onInput={(e) => userEnterFrom(e, 'experience')}
                />
              </View>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>家乡</Text>
                <Picker
                  mode="multiSelector"
                  range={hometownPicker}
                  value={hometownIndex}
                  range-key="name"
                  onChange={(e) => multiPickerChange(e)}
                  onColumnChange={(e)=>onColumnChange(e)}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择家乡' value={hometown} />
                </Picker>
              </View>
              <View className='publish-list-item' >
                <Text className='pulish-list-title'>熟练度</Text>
                <Picker
                  mode="selector"
                  range={infoConfig.prof_degree}
                  value={profDegreeIndex}
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'prof_degree')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择熟练度' value={profDegree} />
                </Picker>
              </View>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>人员构成</Text>
                <Picker
                  mode="selector"
                  range={infoConfig.type}
                  value={memberTypeIndex}
                  range-key="name"
                  onChange={(e) => onPickerChange(e, 'type')}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择人员构成' value={memberType} onInput={(e) => userEnterFrom(e.detail.value, 'user_name')}
                />
                </Picker>
              </View>
              {postData.type && postData.type != '1' &&
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>队伍人数</Text>
                <Input
                  className='publish-list-input'
                  type='number'
                  placeholder='请输入队伍人数'
                  value={postData.number_people}
                  onInput={(e) => userEnterFrom(e, 'number_people')}
                />
              </View>
              }
            </View>

            <View className='resume-addinfo-body'>
              <View className='resume-member-tags-tips'>为自己贴个标签，让老板更懂你(可选3个)</View>
              <View className='resume-member-tags clearfix'>
                {resumeLabels.map((item, index) => (
                  <View className='resume-member-tag-item' key={item.id}>
                    <Text 
                      onClick={()=>userClickTag(index)}
                      className={classnames({
                        'resume-tag-text': true,
                        'resume-tag-text-active' : item.checked
                      })}
                    >{item.label_name}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View className='publish-recruit-btn' onClick={() => userSubmitMemberInfo() } >确认发布</View>
          </Form>
        </View>
      </View>
    </View>
  )
}

AddResumeMember.config = {
  navigationBarTitleText: '编辑人员信息',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config