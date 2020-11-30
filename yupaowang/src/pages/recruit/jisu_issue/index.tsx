import Taro, { useRouter, RouterInfo, Config, useState } from '@tarojs/taro'
import { View, Text, Form, Input, Textarea, Block, Switch } from '@tarojs/components'
import WordsTotal from '../../../components/wordstotal'
import useCode from '../../../hooks/code'
import fastPublishInit from '../../../hooks/publish/jiSuIssue'
import { UserLastPublishRecruitArea, FastPublishInit, MateDataType } from '../index.d'
import UploadImgAction from '../../../utils/upload'
import ImageView from '../../../components/imageview'
import Auth from '../../../components/auth'
import './index.scss'
import { useSelector } from '@tarojs/redux'
import ClassifyPicker, { RulesClassfies } from '../../../components/classfiy_picker/index'
import CityPicker from '../../../components/city_picker'
import { RecruitWorkInfo } from '../../../pages/recruit/index.d'
import { PublishConfigData } from '../../../pages/recruit/index.d'
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
  const InitParams: InitRecruitView = { type: type, infoId: id }
  // 获取redux中发布招工区域详细数据
  const areaInfo: UserLastPublishRecruitArea = useSelector<any, UserLastPublishRecruitArea>(state => state.MyAreaInfo)
  // 获取redux中工种数据
  const publishData: PublishConfigData = useSelector<any, PublishConfigData>(state => state.publishData)
  const mateData = publishData.mateData
  const noMateData = publishData.noMateData
  const maxClassifyCount = publishData.maxClassifyCount
  const maxImageCount = publishData.maxImageCount
  const classifyTree = publishData.classifyTree
  const placeholder = publishData.placeholder

  // 初始化当前信息
  const { model, setModel, showUpload, setShowUpload, showProfession, setShowProssion, userPublishRecruitAction, num, setNum, phone, classMateArr, setclassMateArr } = fastPublishInit(InitParams)

  // 使用自定义验证码hook
  const { text, userGetCode } = useCode()
  // const [classMateArr, setclassMateArr] = useState<RulesClassfies[]>([])
  // 切换图片上传显示隐藏
  const changeShowUpload = () => {
    setShowUpload(!showUpload)
  }
  // 显示工种选择组件
  const showProfessionAction = () => {
    setShowProssion(true)
  }
  // 关闭工种选择组件
  const closeProfession = () => {
    setShowProssion(false)
  }
  // 用户填写表单
  const userEnterFrom = (e: any, key: string) => {
    const value: string = e.detail.value
    const state: RecruitWorkInfo = JSON.parse(JSON.stringify(model))
    // debugger
    state[key] = value
    setModel(state)
    // 如果是detail, 那么需要统计字数
    if (key === 'detail') {
      setNum(value.length)
    }
  }
  // 选择地址
  const userChooseArea = () => {
    if (!model) return
    let url = '/pages/map/recruit/index'
    Taro.navigateTo({
      url: url
    })
  }
  // 用户上传图片
  const userUploadImg = (i: number = -1) => {
    UploadImgAction().then(res => {
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (model) {
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
    if (!model) return
    let bakModel = JSON.parse(JSON.stringify(model))
    bakModel.view_images.splice(i, 1)
    setModel(bakModel)
  }
  let _classMateArr: RulesClassfies[] = []
  // 根据招工详情匹配
  const detailMatch = (e: any) => {
    if (!model) return
    const detail: string = e.detail.value
    if (detail.length < 2) return
    let _model = (model as RecruitWorkInfo)
    //匹配到的数据
    let mateArr: MateDataType[] = [];
    const state: RecruitWorkInfo = JSON.parse(JSON.stringify(model))
    //如果已经有选择的工种就不进行匹配
    if (state.classifies.length < 1) {
      //循环匹配
      for (let i = 0; i < mateData.length; i++) {
        if (detail.indexOf(mateData[i].keywords) != -1) {
          //最多可选工种数量
          if (_classMateArr.length === maxClassifyCount) return
          // debugger
          _classMateArr.push({
            id: mateData[i].occupation_id,
            name: mateData[i].name
          })
        }
      }
      //循环删除不需要匹配的
      for (let i = 0; i < noMateData.length; i++) {
        for (let n = 0; n < _classMateArr.length; n++) {
          if (noMateData[i].keywords === _classMateArr[n].name) {
            _classMateArr.splice(n, 1)
          }
        }
      }
      //去重
      var result: RulesClassfies[] = []
      var obj = {};
      for (var i = 0; i < _classMateArr.length; i++) {
        if (!obj[_classMateArr[i].id]) {
          result.push(_classMateArr[i]);
          obj[_classMateArr[i].id] = true;
        }
      }
      _classMateArr = result
      let classarr = mateArr.map(i => { return i.occupation_id })
      state['classifies'] = classarr
      //改变model中的classifyTree
      for (let i = 0; i < classifyTree.length; i++) {
        if (classifyTree[i].children) {
          for (let n = 0; n < classifyTree[i].children.length; n++) {
            for (let o = 0; o < mateArr.length; o++) {
              if (classifyTree[i].children[n].id === mateArr[o].occupation_id) {
                classifyTree[i].children[n].is_check = true
              }
            }
          }
        }
      }
    }
    //匹配手机号
    let enterMobile: string = _model.user_mobile
    //如果有手机号就不进行匹配
    if (!enterMobile) {
      let p = /1[3-9]\d{9}/g;
      let phone = detail.match(p);
      if (phone) {
        state.user_mobile = phone[0]
      }
    }
    //保存匹配到的工种
    setclassMateArr(_classMateArr)
    setModel(state)
  }

  //工种选择 确定
  const selectClass = (data: RulesClassfies[]) => {
    setclassMateArr(data)
    setShowProssion(false)
  }

  const pickerDom = ()=>{
  <Input className='publish-list-input' type='text' disabled placeholder='请选择招工城市'/>
  return
}

  return (
    <Block>
      <Auth />
      {showProfession &&
        <ClassifyPicker
          hiddenPickerModel={closeProfession}
          selectClassfy={selectClass}
          classifies={classifyTree}
          maxClassifyCount={maxClassifyCount}
          choceClassfies={classMateArr}
        />}
      <View className='publish-recruit-container'>
        <View className='publish-list-textarea'>
          <Text className='input-title'>招工详情:</Text>
          <Textarea
            className='textarea-publish'
            value={model && model.detail || ''}
            placeholder={placeholder}
            onInput={(e) => userEnterFrom(e, 'detail')}
            onBlur={(e) => detailMatch(e)}
          ></Textarea>
          <WordsTotal num={num} />
        </View>

    {/* <View className='publish-list-item' onClick={() => userChooseArea()}> */}
        <View className='publish-list-item'>
          <Text className='pulish-list-title input-title'>招工城市:</Text>
          <CityPicker></CityPicker>
          {/* <Input className='publish-list-input' type='text' disabled placeholder='请选择招工城市' value={areaInfo && areaInfo.title} /> */}
        </View>

        <View className='publish-list-item work-type' onClick={() => showProfessionAction()}>
          <Text className='pulish-list-title input-title'>所需工种</Text>
          {
            classMateArr.length > 0 ?
              <View className='publish-list-input item-work-type'>
                {classMateArr.map(item => (
                  <Block key={item.id}>
                    <Text className='publish-input-list' >{item.name} </Text>
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
              value={model && model.user_mobile}
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
            <View className='publish-upload-header' onClick={() => changeShowUpload()}>
              <View className='publish-upload-title'>
                <View className='publish-upload-red'>
                  <Text>上传图片:</Text>
                  <Switch checked={showUpload} color='#13ce66'></Switch>
                </View>
              </View>
              {showUpload && model &&
                <View className='publish-upload-tips'>可上传工地现场照片、工程图纸、承包合同等</View>
              }
            </View>
            {showUpload && model &&
              <ImageView
                images={model.view_images}
                max={maxImageCount}
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