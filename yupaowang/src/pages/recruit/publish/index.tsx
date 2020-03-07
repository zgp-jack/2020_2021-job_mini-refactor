import Taro, { useRouter, RouterInfo } from '@tarojs/taro'
import { View, Text, Form, Input, Textarea, Block } from '@tarojs/components'
import { ProfessionRecruitData } from '../../../components/profession/index.d'
import WordsTotal from '../../../components/wordstotal'
import Profession from '../../../components/profession'
import usePublishViewInfo from '../../../hooks/publish/recruit'
import { RecruitModelInfo } from '../index.d'
import UploadImgAction from '../../../utils/upload'
import ImageView from '../../../components/imageview'
import Msg from '../../../utils/msg'
import './index.scss'

export interface InitRecruitView {
  type: string,
  infoId: string
}

export default function PublishRecruit() {

  // 获取路由参数
  const router: RouterInfo = useRouter()
  const id:string = router.params.id || ''
  const type: string = 'job'
  const InitParams: InitRecruitView = { type: type,infoId: id }
  
  // 初始化当前信息
  const { model, setModel, showUpload, setShowUpload, showProfession, setShowProssion } = usePublishViewInfo(InitParams)

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
  const userEnterFrom = (e,key: string)=> {
    const value = e.detail.value
    const state: RecruitModelInfo = JSON.parse(JSON.stringify(model))
    state[key] = value
    setModel(state)
  }

  // 用户发布招工信息
  const userPublishRecruit = ()=> {
    console.log(model)
  }

  // 点击工种
  const userClickProfession = (i:number,k:number,id: string) => {
    if(!model) return
    let works: ProfessionRecruitData[] = JSON.parse(JSON.stringify(model.classifyTree))
    let check: boolean = works[i].children[k].is_check
    if(!check){
      let max = model.maxClassifyCount
      let num = model.classifies.length
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

  return (
    <Block>
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
                placeholder='请输入标题（3-30个字' 
                value={ model&&model.title }
                onInput={(e)=>userEnterFrom(e,'title')}
              />
            </View>
            <View className='publish-list-item' onClick={() => showProfessionAction()}>
              <Text className='pulish-list-title'>所属工种</Text>
              {
              model&&model.classifies.length ? 
              <View className='publish-list-input'>
                {model.classifyTree.map(item=>(
                  <Block>
                    {item.children.map(data=>(
                      <Block>
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
            <View className='publish-list-item'>
              <Text className='pulish-list-title'>详细地址</Text>
              <Input className='publish-list-input' type='text' disabled placeholder='请输入详细地址' />
            </View>
            <View className='publish-list-item'>
              <Text className='pulish-list-title'>联系人</Text>
              <Input 
                className='publish-list-input' 
                type='text' 
                placeholder='请输入联系人' 
                value={ model&&model.user_name } 
                onInput={(e) => userEnterFrom(e,'user_name')}
              />
            </View>
            <View className='publish-list-item'>
              <Text className='pulish-list-title'>联系电话</Text>
              <Input 
                className='publish-list-input' 
                type='text' 
                placeholder='请输入联系电话' 
                value={ model&&model.user_mobile }
                onInput={(e)=>userEnterFrom(e,'user_mobile')}
              />
            </View>
            <View className='publish-list-textarea'>
              <Text className='publish-textarea-title'>招工详情</Text>
              <Textarea 
                className='publish-textarea' 
                value={ model ? model.detail : '' } 
                placeholder='请输入招工详情'
                onInput={(e)=>userEnterFrom(e,'detail')}
              ></Textarea>
              <WordsTotal num={0} />
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
            {showUpload && model && <ImageView images={ model.view_images } max={ model.maxImageCount } userUploadImg={ userUploadImg } />}
          </View>
          <View className='publish-recruit-btn' onClick={()=>userPublishRecruit()} >确认发布</View>
        </Form>
      </View>
    </Block>
  )
}