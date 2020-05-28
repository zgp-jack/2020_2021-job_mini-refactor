import Taro, { Config, useState, useEffect, useRouter, useDidShow } from '@tarojs/taro'
import { View, Text, Image, Block, Textarea } from '@tarojs/components'
import { resumeDetailAction, recommendListAction, resumesGetTelAcrion, resumeSupportAction, resumeCollectAction, publishComplainAction } from '../../../utils/request/index'
import { IMGCDNURL } from '../../../config'
import Msg from '../../../utils/msg'
import { resumeDetailCertificates, resumeDetailProject, resumeDetailOperation, recommendListDataList } from '../../../utils/request/index.d'
import './index.scss'
import { isVaildVal } from '../../../utils/v'

interface DataType {
  certificates: resumeDetailCertificates[],
  info:resumeDetailInfo,
  project: resumeDetailProject[],
  operation: resumeDetailOperation,
}
interface resumeDetailInfo{
  introduce:string,
  headerimg:string,
  nation:string,
  username:string,
  tel:string,
  hometown:string,
  occupations:[],
  experience:string,
  prof_degree_str:string,
  type_str:string,
  number_people:string,
  address:string,
  authentication:string,
  is_read:number,
  is_end:string,
  certificate_show:number,
  tags: resumeDetailInfoTages[],
}
interface resumeDetailInfoTages{
  id:number,
  label_name:string,
}
interface ListType{
  item: recommendListDataList[],
}
export default function ResumeDetail() {
  const [data, setDate] = useState<DataType>({
    certificates:[],
    info:{
      introduce:'',
      headerimg:'',
      nation: '',
      username: '',
      tel: '',
      hometown: '',
      occupations: [],
      experience: '',
      prof_degree_str: '',
      type_str: '',
      number_people: '',
      address: '',
      authentication:'',
      is_read:0,
      is_end:'',
      certificate_show:0,
      tags: [],
    },
    operation:{
      is_collect: 0,
      is_zan: 0,
      status: 0,
    },
    project:[],
  })
  // 相关推荐
  const [list,setList ] = useState<ListType>({
    item:[]
  })
  const [examine, setExamine] = useState<boolean>(true)
  // 查看电话
  const [onoff, seOnoff] = useState<boolean>(false);
  // 手机号码
  const [phone,setPhone ] = useState<string>('')
  // 弹框
  const [shownewtips, setShownewtips] = useState<boolean>(false)
  const [collect, setCollect ] = useState<number>(0)
  const [praise, setPraise] = useState<number>(0)
  // 投诉
  const [complaintModal, setComplaintModal ] = useState<boolean>(false)
  const [textarea, setTextarea] = useState<string>('')
  useEffect(()=>{
    const params = {
      location:'',
      // 先写死
      resume_uuid: 1590498258556959,
    }
    resumeDetailAction(params).then(res=>{
      console.log(res);
      if(res.errcode === 'ok'){
        setDate({ certificates: res.certificates,info:res.info,operation:res.operation,project:res.project})
        setPhone(res.info.tel);
        setExamine(false)
        setPraise(res.operation.is_zan)
        setCollect(res.operation.is_collect)
      }
    })
    const listParams = {
      page: 1,
      type: 1,
      // 写死
      area_id:322,
      // 写死
      occupations: '2, 17, 25',
    }
    recommendListAction(listParams).then(res=>{
      console.log(res);
      setList({item:res.data.list})
    })
  },[])
  // 查看电话
  const handlePhone =()=>{
    const params = {
      // 写死
      resume_uuid:1590498258556959
    }
    resumesGetTelAcrion(params).then(res=>{
      console.log(res);
      if(res.errcode === 'ok'){
        seOnoff(true)
        setPhone(res.tel)
        setShownewtips(false);
      } else if (res.errcode == "7405") {
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          success: function (res) {
            if (res.confirm) {
              Taro.navigateTo({
                url: '/pages/getintegral/index',
              })
            } else if (res.cancel) {
              Taro.navigateBack()
            }
          }
        })
      }else{
        Msg(res.errmsg);
      }
    })
  }
  // 拨打电话
  const handleTellPhone = ()=>{
    console.log(321321);
    Taro.makePhoneCall({
      phoneNumber: phone,
    })
  }
  // 赞
  const resumeSupport = ()=>{
    let params = {
      resume_uuid:1590498258556959
    }
    resumeSupportAction(params).then(res=>{
      console.log(res)
      if(res.errcode === 'ok'){
        Msg(res.errmsg)
        setPraise(res.show);
      }else{
        Msg(res.errmsg)
      }
    })
  }
  // 收藏
  const resumeCollect = ()=>{
    let params = {
      resume_uuid: 1590498258556959
    }
    resumeCollectAction(params).then(res=>{
      if (res.errcode === 'ok') {
        Msg(res.errmsg)
        setCollect(res.show);
      } else {
        Msg(res.errmsg)
      }
    })
  }
  // 多行输入
  const handleTextarea = (e: any) => {
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
      infoId: 1590498258556959
    };
    publishComplainAction(params).then(() => {
      Msg('提交成功')
      setComplaintModal(false);
    })
  }
  console.log(phone,'xxxx')
  return(
    <View className='resumeDetail'>
      {/* 顶部 */}
      <View className='resumeDetail-cardcolore'>
        {data.operation.status === 0 && <View className='resumeDetail-header'>注:老板对找活者满意，可以直接与他联系以及点赞或转发</View> }
        {data.operation.status === 1 && <View className='resumeDetail-header'>注:分享名片 让您的名片排名更靠前</View>}
      </View>
      {/* 基础信息 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image'  src={`${IMGCDNURL}newresume-catimg.png`}/>
            <Text className='resumeDetail-findingnamecardthreemobile-text'>基础信息</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-basics'>
        <View className='resumeDetail-basics-heard'>
          <Image className='resumeDetail-basics-heard-img' src={data.info.headerimg}/>
          <View>
            <View>
              {data.info.username}
              {data.info.authentication === '2' && <Image className='resumeDetail-basics-img' src={`${IMGCDNURL}new-list-realname-icon.png`}/>}
              {data.info.certificate_show === 1 && <Image className='resumeDetail-basics-img' src={`${IMGCDNURL}new-list-jnzs-icon.png`} />}
            </View>
            <View>女 30岁 {data.info.nation}</View>
          </View>
        </View>
        <View className='lineone'>
          <View className='linezo'>
          <View className='cardotext-position'>
          <View className='cardotext'>
              <Text className='oworkotext'>手机</Text>
              <Text className='workotextone'>{phone}</Text>
            {examine || !onoff && data.info.is_read === 1 && data.info.is_end !='2' && data.operation.status === 0  &&
                <Text className='clioktel' onClick={handlePhone}>查看完整电话</Text>
          }
            {!examine && onoff || data.info.is_read == 0 && data.info.is_end != '2' && !examine && data.operation.status == 0 && 
              <Text className='cliok'>
              <Text className='resumeDetail-basics-list-tel' onClick={()=>{console.log(31321312)}}>点击拨打</Text>
              <Text className='resumeDetail-basics-list-report' onClick={() => { setComplaintModal(true)}}>举报</Text>
            </Text>
            }
          </View>
          </View>
            <View className='cardotext-position'>
            {data.info.hometown && 
              <View className='cardotext'>
              <Text className='oworkotext'>我的家乡</Text>
              <Text className='workotextone'>{data.info.hometown}</Text>
              </View>
            }
            </View>
            <View className='cardotext-position'>
            {data.info.occupations.length && 
              <View className='cworkotype'>
              <Text className='ocworkotype'>工种</Text>
              <View className='ocworkotypeoo'>
                <View className='ocworkotyp'>
                {data.info.occupations.map((v,i)=>(
                  <View className='ocworkotyptu' key={i+i}>{v}</View>
                ))}
                </View>
              </View>
            </View>
            }
            </View>
            <View className='cardotext-position'>
            {data.info.experience && 
              <View className='cardotext'>
              <Text className='oworkotext'>工龄</Text>:
              <Text className='workotextone'>{data.info.experience}</Text>
            </View>
            }
            </View>
            <View className='cardotext-position'>
            {data.info.prof_degree_str && 
              <View className='cardotext'>
              <Text className='oworkotext'>熟练</Text>:
              <Text className='workotextone'>{data.info.prof_degree_str}</Text>
            </View>
            }
            </View>
            <View className='cardotext-position'>
            {data.info.type_str && 
              <View className='cardotext'>
              <Text className='oworkotext'>人员构成</Text>:
              <Text className='workotextone'>{data.info.type_str}</Text>
            </View>
            }
            </View>
            <View className='cardotext-position'>
          {data.info.number_people && 
              <View className='cardotext'>
              <Text className='oworkotext'>队伍人数</Text>:
              <Text className='workotextone'>{data.info.number_people}</Text>
            </View>
          }
          </View>
            <View className='cardotext-position'>
          {data.info.address &&
            <View className='cardotext'>
              <Text className='oworkotext'>所在地区</Text>:
            <Text className='workotextone'>{data.info.address}</Text>
          </View>
          }
          </View>
          <View className='cardotext-position'>
          {data.info.tags.length && 
            <View className='cardotext'>
            <Text className='oworkotext'>标签</Text>:
            <Text className='workotextone'>
            {data.info.tags.map(v=>(
              <Text className='resumeDetail-basics-list-right-labelName' key={v.id}>{v.label_name}</Text>
            ))}
            </Text>
          </View>
          }
          </View>
        </View>
        </View>
      </View>
      {/* 自我介绍 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text className='resumeDetail-findingnamecardthreemobile-text'>自我介绍</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-introduce'>
        {data.info.introduce||'暂未填写'}
      </View>
      {/* 项目经验 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text className='resumeDetail-findingnamecardthreemobile-text'>项目经验</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-experience'>
        {data.project.length &&
          <View>
          <View className='resumeDetail-experience-title'><Image className='resumeDetail-image' src={`${IMGCDNURL}lpy/newresume-experience-item.png`} />{data.project[0].project_name}</View>
            <View className='resumeDetail-experience-content'>
              <View className='resumeDetail-experience-content-list'>{data.project[0].start_time}-{data.project[0].completion_time}</View>
              <View className='resumeDetail-experience-content-list'>{data.project[0].detail}</View>
            </View>
          <View className="resumeDetail-experience-img-box">
              {data.project[0].image.map((v,i)=>(
                <Image className='resumeDetail-experience-img' key={i+i} src={v}/>
              ))}
            </View>
          <View className='resumeDetail-more-box'>
            <View className='resumeDetail-more'>更多项目经验
                <Image src={`${IMGCDNURL}lpy/downward.png`} className="down"/>
              </View>
            </View>
          </View>
        }
        {/* {data.project.map((v)=>(
          <View key={v.id}>
            <View className='resumeDetail-experience-title'><Image className='resumeDetail-image' src={`${IMGCDNURL}lpy/newresume-experience-item.png`}/>{v.project_name}</View>
            <View className='resumeDetail-experience-content'>
              <View className='resumeDetail-experience-content-list'>{v.start_time}-{v.completion_time}</View>
              <View className='resumeDetail-experience-content-list'>{v.detail}</View>
            </View>
          </View>
        ))} */}
      </View>
      {/* 职业技能 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text className='resumeDetail-findingnamecardthreemobile-text'>职业技能</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-skill'>
        {data.certificates.length &&
          <View>
            <View className='resumeDetail-experience-title'>
              <Image className='resumeDetail-image' src={`${IMGCDNURL}lpy/newresume-experience-item.png`} />
            {data.certificates[0].name}
            </View>
            <View className='resumeDetail-experience-content'>
            <View className='resumeDetail-experience-content-list'>{data.certificates[0].certificate_time}</View>
              <View>
              {data.certificates[0].image.map((val, i) => (
                  <Image key={i + i} src={val} className='resumeDetail-skill-image' />
                ))}
              </View>
            </View>
          <View className='resumeDetail-more-box'>
            <View className='resumeDetail-more'>
                更多技能证书
                <Image src={`${IMGCDNURL}lpy/downward.png`} className="down" />
              </View>
            </View>
        </View>
        }
      </View>
      {/* 相关推荐 */}
      <View className='resumeDetail-recommend'>
        <View className='resumeDetail-recommend-top'>
          <Text className='resumeDetail-recommend-top-text'>相关推荐</Text></View>
      </View>
      <View className='resume-list-container'>
      {list.item.map(item=>(
        <Block key={item.id}>
          {
            <View className='resume-list-item' key={item.id}>
              <View className='resume-list-header'>
                <Image className='resume-list-user' src={item.headerimg} />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                    <Text className='resume-userinfo-name'>{item.username}</Text>
                    <Text className='resume-userinfo-birthday'>{item.birthday}岁</Text>
                    {item.certificate == 1 && < Image className='resume-userinfo-img' src={`${IMGCDNURL}newresume-infolist-jnz.png?t=1`} />}
                  </View>
                  <Text className='resume-list-type'>{item.type}</Text>
                  <View className='resume-otherinfo'>
                    <Text className='resume-otherinfo-text'>{item.nation}</Text>
                    <Text className='resume-otherinfo-text'>{item.experience}</Text>
                  </View>
                </View>
              </View>
              <View className='resume-list-works'>
                {item.occupations.map((v,i)=>(
                  <Text className='resume-list-words-text' key={i+i}>{v}</Text>
                ))}
              </View>
              <View className='resume-list-content overwords'>{item.introduce}</View>
              <View className='resume-list-footer'>
                <View className='resume-list-footer-flex'>
                  <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} />
                  <View className='resume-list-loctxt overwords'>{item.show_address}</View>
                </View>
                <Text className='resume-list-time'>{item.prof_degree}</Text>
              </View>
            </View>
          }
        </Block>
      ))}
        <View className="seemore-recommend-recruit">查看更多找活信息</View>
      </View>
      {/* 底部 */}
      <View className='resumeDetail-footer'>
        <View className='resumeDetail-footer-box' onClick={resumeSupport}>
          <Image className="bossimg" src={praise === 0 ? `${IMGCDNURL}newresume-footer-star.png` : `${IMGCDNURL}newresume-footer-star-active.png`} />
          <View>赞</View>
        </View>
        <View className='resumeDetail-footer-box'>
          <Image className="bossimg" src={`${IMGCDNURL}newresume-footer-share.png`} />
          <View>分享</View>
        </View>
        <View className='resumeDetail-footer-box' onClick={resumeCollect}>
          <Image className="bossimg" src={collect === 0 ? `${IMGCDNURL}newresume-footer-collect.png` : `${IMGCDNURL}newresume-footer-collect-active.png`}/>
          <View>收藏</View>
        </View>
      </View>
      {/* 弹框 */}
        {shownewtips && 
        <View className="newdetail-fixedshadow">
          <View className="newdetail-fixed-content" >
            <View className="newdetail-tips-box">
              <View className="newdetail-tips-header">鱼泡网提醒</View>
              <View className="newdetail-tips-body">
                <View className="newdetail-tips-item">
                  <View className="newdetail-tips-title">工作前</View>
                  <View className="newdetail-tips-text">确认好对方身份、签好合同，招工、找活中不要交任何费用。</View>
                </View>
                <View className="newdetail-tips-item">
                  <View className="newdetail-tips-title">工作中</View>
                  <View className="newdetail-tips-text">拍照、录视频留有证据！若双方发生经济纠纷，请立即报警或前往劳动局投诉，鱼泡网可配合调查，但概不负责。</View>
                </View>
              </View>
            </View>
            <View className="newdetail-tips-footer">
              <View className="newdetail-footer-item" onClick={()=>{setShownewtips(false)}}>暂不提示</View>
              <View className="newdetail-footer-item" onClick={handleTellPhone}>拨打电话</View>
            </View>
          </View>
        </View>
        }
        {/* 投诉 */}
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

ResumeDetail.config = {
  navigationBarTitleText: '找活名片',
} as Config