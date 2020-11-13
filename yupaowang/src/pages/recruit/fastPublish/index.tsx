import Taro, { useRouter, RouterInfo, Config } from '@tarojs/taro'
import { View, Text, Form, Input, Textarea, Block } from '@tarojs/components'
import { ProfessionRecruitData } from '../../../components/profession/index.d'
import WordsTotal from '../../../components/wordstotal'
import Profession from '../../../components/profession'
import useCode from '../../../hooks/code'
import fastPublishInit from '../../../hooks/publish/fastPublish'
import { RecruitModelInfo, UserLastPublishRecruitArea,FastPublishInit } from '../index.d'
import UploadImgAction from '../../../utils/upload'
import ImageView from '../../../components/imageview'
import Msg from '../../../utils/msg'
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
  const { model, setModel, showUpload, setShowUpload, showProfession, setShowProssion, userPublishRecruitAction, num, setNum, phone } = fastPublishInit(InitParams)

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
  const userEnterFrom = (e: any,key: string)=> {
    console.log(phone)
    const value: string = e.detail.value
    const state: FastPublishInit = JSON.parse(JSON.stringify(model))
    // debugger
    state[key] = value
    setModel(state)
    // 如果是detail, 那么需要统计字数
    if(key === 'detail'){
      setNum(value.length)
    }
    console.log(value)
  }

  // 选择地址
  const userChooseArea = ()=> {
    if(!model) return
    let url = '/pages/map/recruit/index'
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
      let max: number = model.typeTextArr.maxClassifyCount
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
          <View className='publish-list-textarea'>
            <Text className='input-title'>招工详情:</Text>
            <Textarea
              className='textarea-publish'
              value={model && model.detail || ''}
              placeholder={model && model.placeholder}
              onInput={(e) => userEnterFrom(e, 'detail')}
            ></Textarea>
            <WordsTotal num={num} />
          </View>

          <View className='publish-list-item' onClick={() => userChooseArea()}>
            <Text className='pulish-list-title input-title'>招工城市:</Text>
            <Input className='publish-list-input' type='text' disabled placeholder='请选择招工城市' value={areaInfo && areaInfo.title} />
          </View>

          <View className='publish-list-item work-type' onClick={() => showProfessionAction()}>
            <Text className='pulish-list-title input-title'>所需工种</Text>
            {
              model && model.classifies.length ?
              <View className='publish-list-input item-work-type'>
                  {model.classifyTree.map(item => (
                    <Block key={item.id}>
                      {item.children.map(data => (
                        <Block key={data.id}>
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
          
          <View className="phone-code">
            <View className='publish-list-item'>
              <Text className='pulish-list-title input-title'>联系电话:</Text>
              <Input
                className='publish-list-input'
                type='text'
                placeholder='请输入联系电话'
                value={model && model.memberInfo.tel}
                onInput={(e) => userEnterFrom(e, 'user_mobile')}
              />
            </View>
          {model && (phone !== model.user_mobile || model.user_mobile == '') &&
              <View className='publish-list-item publish-list-item-code'>
                <Text className='pulish-list-title input-title'>验证码</Text>
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
          </View>
          <Form>
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
              max={model.typeTextArr.maxImageCount} 
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
  navigationBarTitleText: '急速发布',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config