import Taro, { useRouter, RouterInfo, Config, useEffect, useState } from '@tarojs/taro'
import { View, Text, Form, Input, Textarea, Block, Picker } from '@tarojs/components'
import { ProfessionRecruitData } from '../../../components/profession/index.d'
import Profession from '../../../components/profession'
import useCode from '../../../hooks/code'
import { TEXTAREAMAXLENGTH,USEGAODEMAPAPI } from '../../../config'
import usePublishViewInfo from '../../../hooks/publish/recruit'
import { RecruitModelInfo, UserLastPublishRecruitArea } from '../index.d'
import UploadImgAction from '../../../utils/upload'
import ImageView from '../../../components/imageview'
import Msg, { ShowActionModal } from '../../../utils/msg'
import classnames from 'classnames'
import Auth from '../../../components/auth'
import './index.scss'
import { useSelector } from '@tarojs/redux'

// 初始化获取信息类型
export interface InitRecruitView {
  type: string,
  infoId: string
}


export default function PublishRecruit() {
  // 获取路由参数
  const router: RouterInfo = useRouter()
  const id: string = router.params.id || ''
  const type: string = 'job'
  const InitParams: InitRecruitView = { type: type,infoId: id }
  //获取redux中发布招工区域详细数据
  const areaInfo:UserLastPublishRecruitArea = useSelector<any,UserLastPublishRecruitArea>(state=>state.MyAreaInfo)
  
  // 初始化当前信息
  const { model, setModel, showUpload, setShowUpload, showProfession, setShowProssion, userPublishRecruitAction, num, setNum, phone, areaIndex, areaPickerData, areaCityPicker, areaProvincePicker, setAreaPickerData, setAreaIndex, areaPickerName, setAreaPickerName } = usePublishViewInfo(InitParams)

  // 使用自定义验证码hook
  const { text, userGetCode } = useCode()

  // 切换图片上传显示隐藏
  const changeShowUpload = ()=> {
    setShowUpload(!showUpload)
  }

  const showProfessionAction = ()=> {
    setShowProssion(true)
  }

  const closeProfession = ()=> {
    setShowProssion(false)
  }

  // 用户填写表单
  const userEnterFrom = (e: any,type: string)=> {
    const value: string = e.detail.value
    const state: RecruitModelInfo = JSON.parse(JSON.stringify(model))
    state[type] = value
    setModel({ ...state})
  }

  // 选择地址
  const userChooseArea = ()=> {
    if(!model) return
    let url = `/pages/map/recruit/index?id=${id}`
    Taro.navigateTo({
      url: url
    })
  }

  // 点击工种
  const userClickProfession = (i:number,k:number,id: string) => {
    if(!model) return
    let works: ProfessionRecruitData[] = JSON.parse(JSON.stringify(model.classifyTree))
    let check: boolean = works[i].children[k].is_check
    if(!check){
      let max: number = model.maxClassifyCount
      let num: number = model.classifies.length
      if(num >= max){
        Msg('工种最多可以选择'+ max + '个')
        return
      }
    }
    works[i].children[k].is_check = !check
    let classifyArr = JSON.parse(JSON.stringify(model.classifies))
    let newArr: string[] = (check) ? classifyArr.filter(item => item !== id) : [...classifyArr, id]
    setModel({ ...model, classifyTree: works, classifies: newArr })
  }

  // 用户上传图片
  const userUploadImg = (i:number = -1)=> {
    UploadImgAction().then(res=>{
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      if(model){
        if (i === -1) {
          setModel({ ...model, view_images: [...model.view_images, imageItem] })
        } else {
          model.view_images[i] = imageItem
          setModel({ ...model })
        }
      }
    })
  }

  // 用户删除图片
  const userDelImg = (i: number) => {
    if(!model) return
    let bakModel = JSON.parse(JSON.stringify(model))
    bakModel.view_images.splice(i,1)
    setModel(bakModel)
  }

  // 用户确定地址picker
  const userChangePickerArea = (e: any) => {
    let pid: string = areaProvincePicker[e.detail.value[0]].id
    let cid: string = areaPickerData[1][e.detail.value[1]].id
    if(model) setModel({...model,province_id: +pid, city_id: +cid})
    let name: string = pid === cid ? areaProvincePicker[e.detail.value[0]].name : `${areaProvincePicker[e.detail.value[0]].name}-${areaPickerData[1][e.detail.value[1]].name}`
    setAreaPickerName(name)
  }

  // 用户更改了地址picker
  const userChangeColumn = (e: any) => {
    let column: number = e.detail.column
    let value: number = e.detail.value
    if(column === 0){
      let data = JSON.parse(JSON.stringify(areaPickerData))
      data[1] = areaCityPicker[value]
      setAreaPickerData(data)
      setAreaIndex([value,0])
    }else{
      setAreaIndex([areaIndex[0],value])
    }
  }

  return (
      <Block>
        <Auth />
        {showProfession && 
        <Profession 
          closeProfession={ closeProfession } 
          data={ model&&model.classifyTree } 
          onClickItem={(i,k,id) => userClickProfession(i,k,id)}
          num={3} 
        />}
        <View className='publish-recruit-container'>
          <Form>
            <View className='publish-recruit-card'>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>标题</Text>
                <Input 
                  className='publish-list-input' 
                  type='text' 
                  placeholder='请输入标题（3-30个字）' 
                  value={ model.title }
                  onInput={(e)=>userEnterFrom(e,'title')}
                />
              </View>
              <View className='publish-list-item' onClick={() => showProfessionAction()}>
                <Text className='pulish-list-title'>所属工种</Text>
                {
                model&&model.classifies.length ? 
                <View className='publish-list-input publish-list-text'>
                  {model.classifyTree.map(item=>(
                    <Block key={ item.id }>
                      {item.children.map(data=>(
                        <Block key={ data.id }>
                          {data.is_check && <Text className='publish-input-list' >{data.name}</Text>}
                        </Block>
                      ))}
                    </Block>
                  ))}
                </View>
                :
                <Input className='publish-list-input' disabled type='text' placeholder='请选择所属工种' />
                }
              </View>
              {USEGAODEMAPAPI ?
              <View className='publish-list-item' onClick={()=>userChooseArea()}>
                <Text className='pulish-list-title'>详细地址</Text>
                <Input className='publish-list-input' type='text' disabled placeholder='请输入详细地址' value={ areaInfo&&areaInfo.title } />
              </View>
              :
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>招工地址</Text>
                <Picker 
                  mode='multiSelector' 
                  value={areaIndex} 
                  range={areaPickerData} 
                  rangeKey='name'
                  onChange={(e)=>userChangePickerArea(e)}
                  onColumnChange={(e) => userChangeColumn(e)}
                >
                  <Input className='publish-list-input' type='text' disabled placeholder='请选择招工地址' value={areaPickerName} />
                </Picker>
              </View>
              }
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>联系人</Text>
                <Input 
                  className='publish-list-input' 
                  type='text' 
                  placeholder='请输入联系人' 
                  value={ model.user_name } 
                  onInput={(e) => userEnterFrom(e,'user_name')}
                />
              </View>
              <View className='publish-list-item'>
                <Text className='pulish-list-title'>联系电话</Text>
                <Input 
                  className='publish-list-input' 
                  type='text' 
                  placeholder='请输入联系电话' 
                  value={ model.user_mobile }
                  onInput={(e)=>userEnterFrom(e,'user_mobile')}
                />
              </View>
              {model && (phone !== model.user_mobile || model.user_mobile == '') &&
                <View className='publish-list-item publish-list-item-code'>
                  <Text className='pulish-list-title'>验证码</Text>
                  <Input
                    className='publish-list-input'
                    type='text'
                    placeholder='请输入验证码'
                    value={model.code}
                    onInput={(e) => userEnterFrom(e, 'code')}
                  />
                  <View className='publish-code-btn' onClick={() => userGetCode(model.user_mobile)}>{text}</View>
                </View>
              }
              <View className='publish-list-textarea'>
              <Text className='publish-textarea-title'>招工详情</Text>
                {!showProfession && 
                <Textarea 
                  className={classnames({
                    'publish-textarea': true,
                    'hide': showProfession
                  })} 
                  value={model.detail}
                  placeholder='请输入招工详情'
                  onInput={(e) => { userEnterFrom(e, 'detail');setNum(e.detail.value.length);return false}}
                ></Textarea>}
                <View className='words-total-box '>{num}<Text>/{TEXTAREAMAXLENGTH}</Text></View>
              </View>
            </View>
            <View className='publish-recruit-card'>
              <View className='publish-upload-header' onClick={()=>changeShowUpload()}>
                <View className='publish-upload-title'>
                  <View className='publish-upload-red'>
                    <Text>上传图片</Text>
                    <View className='publish-upload-wbg'>
                      <Text className='publish-upload-ibg'></Text>
                    </View>
                  </View>
                  <Text className='publish-upload-smtips'>(可以不上传)</Text>
                </View>
                <View className='publish-upload-tips'>可上传工地现场照片、工程图纸、承包合同等</View>
              </View>
              {showUpload && model && 
                <ImageView 
                  images={model.view_images} 
                  max={model.maxImageCount} 
                  userUploadImg={userUploadImg} 
                  userDelImg={userDelImg} 
                />
              }
            </View>
            <View className='publish-recruit-btn' onClick={() => userPublishRecruitAction()} >确认发布</View>
          </Form>
        </View>
      </Block>
  )
}

PublishRecruit.config = {
  navigationBarTitleText: '发布招工',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config