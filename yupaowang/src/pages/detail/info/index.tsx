import Taro, { Config, useState, useEffect } from '@tarojs/taro'
import { View, Text, Image, Icon, Button, Textarea } from '@tarojs/components'
import { jobInfoAction, publishComplainAction, jobGetTelAction, recruitListCancelCollectionAction } from '../../../utils/request/index'
import WechatNotice from '../../../components/wechat'
import { IMGCDNURL } from '../../../config'
import { isVaildVal } from '../../../utils/v'
import Msg from '../../../utils/msg'
import './index.scss'

interface DataType {
  title: string,
  time: string,
  image: string,
  user_name: string,
  classifyName: [],
  detail: string,
  address: string,
  location: string,
  map_address_name: string,
  map_street_name: string,
  tel_str: string,
  show_ajax_btn:boolean,
  id:number,
  is_collect:number,
  view_images:[],
}
export default function DetailInfoPage() {
  const [data,setData] = useState<DataType>({
    title: '',
    time: '',
    image: '',
    user_name: '',
    classifyName: [],
    detail: '',
    address: '',
    location:'',
    map_address_name: '',
    map_street_name: '',
    tel_str : '',
    show_ajax_btn:false,
    id:0,
    is_collect:0,
    view_images:[],
  })
  // 投诉
  const [complaintModal, setComplaintModal] = useState<Boolean>(false)
  // textarea
  const [textarea, setTextarea] = useState<string>('')
  // 刷新一次
  const [refresh,setRefresh] = useState<boolean>(false)
  // 是否收藏
  const [isCollection, setIsCollection] = useState<number>(0)
  // 判读招聘类型
  const [resCode,setResCode] = useState<string>('')
  useEffect(()=>{
    const params={
      type:'job',
      // 先写死
      infoId:'13161252'
    }
    jobInfoAction(params).then(res=>{
      setData(res.result);
      setIsCollection(res.result.is_collect);
      // if(res.errcode === 'end'){
        setResCode(res.errcode)
      // }
    })
  }, [refresh])
  // 地图
  const handleMap = ()=>{
    let locArr = data.location.split(",");
    Taro.openLocation({
      latitude: parseFloat(locArr[1]),
      longitude: parseFloat(locArr[0]),
      name: data.map_address_name,
      address: data.map_street_name,
      scale: 18
    })
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  const handleTextarea = (e:any)=>{
    let val: string = e.detail.value;
    setTextarea(val);
  }
  // 提交投诉
  const handleSubmit = () => {
    if (!isVaildVal(textarea, 15, 500)) {
      Msg('输入内容不少于15个字且必须包含文字')
      return false
    }
    const params = {
      content: textarea,
      type: 'job',
      infoId: data.id
    };
    publishComplainAction(params).then(() => {
      Msg('提交成功')
      setComplaintModal(false);
    })
  }
  // 获取电话
  const jobGetTel = ()=>{
    const params={
      type:'job',
      infoId:data.id,
    }
    jobGetTelAction(params).then(res=>{
      if(res.errcode === 'ok'){
        setRefresh(true)
      }
    })
  }
  const footerComplaint = ()=>{
    if(resCode === 'end'){
      Taro.showModal({
        title: '温馨提示',
        content: '该招工信息已招到，暂时不能投诉',
        showCancel: false,
      })
    }else{
      if(data.show_ajax_btn){
        Msg('请查看完整的手机号码后再操作！')
      }else{
        setComplaintModal(true)
      }
    }
  }
  // 收藏
  const collection = ()=>{
    recruitListCancelCollectionAction(data.id.toString()).then(res=>{
      if (res.action === 'add'){
        setIsCollection(1)
      }else{
        setIsCollection(0)
      }
    })
  }
  const handleImage = (v:string)=>{
    Taro.previewImage({
      current: v,
      urls: [v]
    })
  }
  return(
    <View className='detailInfo'>
      <WechatNotice />
      <View className='detailInfo-head'>
        <View className='detailInfo-head-titleBox'>
          <View className='detailInfo-head-titleBox-title'>{data.title}</View>
          <View className='detailInfo-head-titleBox-time'>发布时间: {data.time}</View>
        </View>
        <View className='detailInfo-userContent'>
          <Image className='detailInfo-userContent-image' src={data.image}/>
          <View className='detailInfo-userContent-content'>
            <View className='detailInfo-userContent-content-list'>{data.user_name}</View>
            <View className='detailInfo-userContent-content-list'>{data.tel_str}</View>
          </View>
          {resCode === 'end' || resCode === 'ok' ? (resCode === 'end' ? <View className='detailInfo-userContent-buttonBox-'><Button className='detailInfo-userContent-button-end'>已招到</Button></View> :<View></View>) : (data.show_ajax_btn ? <View className='detailInfo-userContent-buttonBox'><Button className='detailInfo-userContent-button' onClick={() => jobGetTel()}>查看完整电话</Button></View> :
            <View className='detailInfo-userContent-buttonBox'>
              <View className='detailInfo-userContent-button-call' onClick={() => { Taro.makePhoneCall({ phoneNumber: data.tel_str }) }}>点击拨打</View>
              <View className='detailInfo-userContent-button-complaint' onClick={() => setComplaintModal(true)}>投诉</View>
            </View>)}
          {/* {ss
          } */}
        </View>
      </View>
      <View className='detailInfo-tips-box'>
        <View className='detailInfo-tips'>联系我时请说明是在“<Text className='detailInfo-tips-color'>鱼泡网</Text>”上看到的</View>
      </View>
      <View className='detailInfo-prompt-content'>
        <View className='detailInfo-prompt-content-title'>
          <Icon type='info' color='#F94046' size='15' className='detailInfo-prompt-content-title-icon'/> 
          <View className='detailInfo-prompt-content-title-tips'>鱼泡提示</View>
        </View>
        <View>
          {/* 工作前，确认好对方身份、签好合同，招工、找活中不要交任何费 用。工作中拍照、录视频留有证据！若双方发生经济纠纷，请立即 报警或前往劳动局投诉，鱼泡网可配合调查，但概不负责。如遇诈 骗信息，请<Text className='detailInfo-prompt-content-red'>立即举报</Text> */}

          <View onClick={() => userRouteJump('/subpackage/pages/anti-fraud/index')}><Text className='detailInfo-prompt-content-blued' >《防骗指南》</Text>：此信息由鱼泡网用户提供，但联系时仍需注意识信息真伪。</View>
          <View onClick={() => userRouteJump(`/subpackage/pages/notice/index?id=32`)}> <View>关注“鱼泡网”微信公众号接收新工作提醒  <Text className='detailInfo-prompt-content-blued' >如何关注</Text></View></View>
        </View>
      </View>
      <View className='detailInfo-project-content'>
        <View className='detailInfo-project-content-title'>项目描述:</View>
        <View className='detailInfo-project-content-classifyName-box'>
        {data.classifyName.map((v,i)=>(
          <View key={i + i} className='detailInfo-project-content-classifyName'>{v}</View>
        ))}
        </View>
        <View className='detailInfo-project-content-detail'>{data.detail}</View>
        {data.view_images.length>0 && 
          <View className='detailInfo-project-content-image-box'>
            {data.view_images.map((v,i)=>(
              <Image src={v} key={i + i} className='detailInfo-project-content-image' onClick={()=>handleImage(v)}/>
              ))}
          </View>
        }
        <View className='detailInfo-project-content-address'>项目地址: 
        <View className='detailInfo-project-content-address-color'>{data.address}</View>
          {data.location && <View className='detailInfo-project-content-map' onClick={handleMap}>查看地图</View>}
        </View>
      </View>
      <View className='detailInfo-Image-box'>
        <Image src={`${IMGCDNURL}download.png`} className='detailInfo-Image' onClick={() => userRouteJump('/subpackage/pages/download/index')}/>
      </View>
      {/* <View className='detailInfo-footer-content'>
        <View className='detailInfo-footer-content-box'>
          <View className='detailInfo-footer-content-box-list' onClick={collection}>
            <View><Image src={isCollection === 1 ? `${IMGCDNURL}job-collect-active.png` : `${IMGCDNURL}job-collect-normal.png`} className='detailInfo-footer-content-box-image'/></View>
            <View className='detailInfo-footer-content-box-text'>{isCollection === 0 ?'收藏':'已收藏'}</View>
          </View>
          <View className='detailInfo-footer-content-box-list' onClick={footerComplaint}>
            <View><Image src={`${IMGCDNURL}newjobinfo-complain.png`} className='detailInfo-footer-content-box-image'/></View>
            <View className='detailInfo-footer-content-box-text'>投诉</View>
          </View>
          <View className='detailInfo-footer-content-box-list'>
            <View><Image src={`${IMGCDNURL}newjobinfo-share.png`} className='detailInfo-footer-content-box-image'/></View>
            <View className='detailInfo-footer-content-box-text'>分享</View>
          </View>
          <View>
            {resCode === 'end' ? <Button className='detailInfo-footer-content-box-button'>已招到</Button> : (data.show_ajax_btn ?
              <Button className='detailInfo-footer-content-box-button' onClick={() => jobGetTel()}>查看完整电话</Button> :
              <Button className='detailInfo-footer-content-box-button' onClick={() => { Taro.makePhoneCall({ phoneNumber: data.tel_str }) }}>拨打电话</Button>)}
            {
            }
          </View>
        </View>
      </View> */}
      {/* 自己发布的找活 */}
      <View className='detailInfo-userfooter'>
        <View className='detailInfo-userfooter-examine'><Image className='detailInfo-userfooter-examine-image' src={`${IMGCDNURL}published-info.png`}/>提示:人工审核中，该信息仅自己可见。</View>
        <View></View>
        <View></View>
      </View>
      {complaintModal &&
        <View className='tabber-complaintModal'>
          <View className='tabber-complaintModal-content'>
          <View className='tabber-complaintModal-content-title'>投诉信息</View>
            <View className='tabber-complaintModal-content-tips'>请输入投诉内容</View>
            <View className='tabber-complaintModal-content-textareaBox'>
              <Textarea
                className='tabber-complaintModal-content-textarea'
                placeholder='请填写5~100字，必须含有汉字。（恶意投诉会被封号，请谨慎投诉！）'
                value={textarea}
                maxlength={100}
                onInput={(e) => handleTextarea(e)}
              />
            </View>
            <View className='tabber-complaintModal-footer'>
              <View className='tabber-complaintModal-footer-cancel' onClick={() => { setComplaintModal(false) }}>取消</View>
              <View className='tabber-complaintModal-footer-cancel' onClick={() => handleSubmit()}>确定</View>
            </View>
          </View>
        </View>
      }
    </View>
  )
}

DetailInfoPage.config = {
  navigationBarTitleText: '',
} as Config