import Taro, { Config, useState, useEffect, useRouter, useDidShow } from '@tarojs/taro'
import { View, Text, Image, Block, Button, Textarea } from '@tarojs/components'
import { resumeListAction } from '../../../utils/request/index'
import WechatNotice from '../../../components/wechat'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { isVaildVal } from '../../../utils/v'
import Msg from '../../../utils/msg'
import { resumeList, ResumeTopStr  } from '../../../utils/request/index.d'
import './index.scss'

interface DataType {
  info:{
    progress:string,
    view_num:string,
    sort_flag:string,
    username:string,
    nation:string,
  },
  resume_top:{
    is_top:number,
    has_top: number,
    top_provinces_str: ResumeTopStr[],
    start_time_str:number,
    end_time_str:number,
  },
  content:{
    show_tips:number,
    check_tips_string:string,
  }
}
interface SelectdataType {
  name:string
}
export default function NewJob() {
  
  const [data,setData] = useState<DataType>({
    info:{
      progress:'0',
      view_num:'0',
      sort_flag:'',
      username:'',
      nation:'',
    },
    resume_top:{
      is_top: 0,
      has_top: 0,
      top_provinces_str:[],
      start_time_str:0,
      end_time_str:0,
    },
    content:{
      show_tips:0,
      check_tips_string:''
    }
  })
  const [showcomplete, setShowcomplete ] = useState<boolean>(true)
  const [showtopone, setShowtopone] = useState<boolean>(false)
  const [passre, setPassre] = useState<boolean>(true)
  const [nopassre, setNopassre] = useState<boolean>(true)
  const [showpassre, setShowpassre] = useState<boolean>(false)
  const [index ,setIndex ] = useState<number>(0)
  const [selectdata, setSelectdata] = useState<SelectdataType[]>([])
  const [showtop, setShowtop] =useState<boolean>(false)
  const [checkone, setCheckone] = useState<boolean>(false)
  const [headerimg, setHeaderimg] = useState<string>('')
  const [authenticationimg, setAuthenticationimg] = useState<string>('')
  const [certificate_show, setCertificate_show] = useState<number>(0)
  const [sex,setSex] = useState<string>('未填写')
  const [age,setAge] = useState<string>('')
  const [checkonef, setCheckonef] = useState<string>('4568')
  const [showskill, setShowskill] = useState<boolean>(true)
  const [occupations, setOccupations] = useState<string[]> ([])
  useEffect(()=>{
    resumeListAction().then(res=>{
      console.log(res);
      if(res.errcode == "200"){
        setData({info:res.data.info,resume_top:res.data.resume_top})
        if (res.data.info.uuid && res.data.info.is_introduces != '0' && res.data.project.length != 0 && res.data.certificates.length != 0 ){
          setShowcomplete(false)
        }else{
          setShowcomplete(true)
        }
        setShowtopone(true)

        if (res.data.info.check == "0") {
          setPassre(false)
        }
        if (res.data.info.check == "1"){
          setNopassre(false)
        }
        if (res.data.info.check == '1'){
          setCheckone(true)
        }else{
          setCheckone(false)
        }
        setShowskill(false)
        setCheckonef(res.data.info.check)
        setAuthenticationimg(res.data.info.authentication)
        setCertificate_show(res.data.info.certificate_show)
        setSex(res.data.info.gender == "1" ? "男" : "女")
        const date = new Date();
        const dateo = date.getTime()
        const dateone = new Date(dateo);
        if (res.data.info.birthday){
          if (dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) == 0) {
            setAge('')
          } else {
            setAge(dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) + "岁")
          }

        }

      }else{
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
        })
        return
      }
    })
  },[])
  return (
    <View className='newJob'>
      <View className='heard'>
        请完善以下信息
      </View>
      <View className='card'>
        <View className="card-otext">
          <Text>名片完善度：</Text>
          <View className="card-otext-lang">
            <View className="card-otext-lang-olang" style={`width:${parseInt(data.info.progress)}%`}></View>
          </View>
          <Text className="card-otext-olangw">{data.info.progress}%</Text>
          <Text className="card-otext-num">{data.info.view_num}</Text>
        </View>
        {/* showcomplete */}
        {showcomplete?
        <View className="isline">
          <Button className="isline-shareliveone">名片越完善 找活越容易,马上去完善>></Button>
          <Text className="isline-sontwoview">浏览次数</Text>
        </View>:
        <View>
          <Button className="isline-shareliveone">分享找活名片,可提升名片排名度</Button>
          <Text className="isline-sontwoview">浏览次数</Text>
        </View>
        }
        <View className='ranking'>
          <View>
            <Image className='ranking-img' src={`${IMGCDNURL}lpy/biaptu.png`}/>
            <Text>我的排名点：{ data.info.sort_flag }</Text>
          </View>
          <View className='ranking-go'>马上去提升排名>></View>
        </View>
        <View className={data.resume_top.is_top === 2 || data.resume_top.has_top == 0 ? 'ranking' :'ranking-last'}>
          <View>
            <Image className='ranking-img' src={`${IMGCDNURL}lpy/personaltop.png`} />
            <Text>我的置顶:
            {data.resume_top.is_top === 2 && <Text>置顶已过期</Text>}
            {data.resume_top.has_top == 0 && <Text>未置顶</Text>}
            </Text>
          </View>
          <View className='ranking-go'>马上去置顶>></View>
        </View>
        {/* wx: if="{{ has_top != 0 && resume_top.is_top != 2}}" */}
        {
          data.resume_top.has_top !=0 && data.resume_top.is_top!= 2 &&
          <View>
            <View className='topselect_box' >
              <View className='select'>
                {/*  wx: if="{{ has_top == 0 || resume_top.is_top == 0}}" */}
                {data.resume_top.has_top == 0  || data.resume_top.is_top == 0 && 
                <Text className="select_text">未置顶</Text>
                }
                {/* wx: if="{{ resume_top.is_top == 1 }}" */}
                {data.resume_top.is_top == 1 && 
                <Text className='select_text'>置顶中</Text>
                }
                <Image className='select_img' src={`${IMGCDNURL}select.png`} />
              </View>
            </View>
          </View>
        }
        {/* wx: if="{{ has_top != 0 && resume_top.is_top != 2}}" */}
        {data.resume_top.has_top !=0 && data.resume_top.is_top !=2 &&
        <View className="toptime" >
          <View className='toptime-view'>
            <Text>置顶地区</Text>
            {/* wx: for="{{ resume_top.top_provinces_str }}" wx:key="{{ index }}" */}
            {data.resume_top.top_provinces_str.map((v,i)=>(
              <Text className='proviceop' key={i+i}>{v.name}</Text>
            ))}
          </View>
        </View>
        }
        {data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
          <View className="toptime">
            <View>
              <Text>置顶时间：</Text>
              <Text>{data.resume_top.start_time_str } ~ { data.resume_top.end_time_str }</Text>
          </View>
          </View>
        }
        {data.resume_top.has_top != 0 && data.resume_top.is_top != 2 &&
        <View className="topdetail">
          <Text>点击修改找活置顶信息>></Text>
        </View>
        }
      </View>
        {/* 基础信息 */}
      <View className='findingnamecardthree'>
        <View className='findingnamecardthreemobile'>
          <View className='findingnamemobile'>
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/jichu.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>基础信息</Text>
          </View>
        </View>
      </View>
      <View>
      {showtopone && 
        <View className='cardoneson'>
          <View className="cardonesonone">
            <View className='cardonesonone-view'>
              <Image className='cardonesonone-image' src={`${IMGCDNURL}lpy/workdetail.png`}/>
            </View>
            <Text className='cardonesonone-text'>我的工作状态：</Text>
          </View>
          {showpassre && 
            <View className='select_box'>
            {/* passre&& nopassre */}
            {passre && nopassre && 
            <View className='select'>
              {/* <text class='select_text' wx: if="{{ index == 0}}">{{ selectData[index].name }}</text>
              <text class='select_text' wx: if="{{ index== 1}}">{{ selectData[index].name }}</text>
              <image class='select_img' src='{{subscripted}}' wx: if="{{ checkstatus }}"></image> */}
              {index == 0 && <Text className='select_text'>{selectdata[index].name}</Text>}
              {index == 1 && <Text className='select_text'>{selectdata[index].name}</Text>}
              {/* wx: if="{{ checkstatus }}" */}
              <Image className='select-img' src={`${IMGCDNURL}select.png`} />
            </View>
            }
            {!passre && nopassre && 
              <View className='select'>
              <Text className='select_text'>审核未通过</Text>
            </View>
            }
            {passre && !nopassre && 
              <View className='select'>
              <Text className='select_text'>人工审核中</Text>
              </View>
            }
            </View>
          }
        </View>
        }
        </View>
      {/*   没有信息 */}
      {showtop && 
      <View className="cardcolore">
        <View className="findingnamecardtwo">
      <Text className="findingnamecardtwothree">您还没有完善基础信息</Text>
        <View className="findingnamecardtwofour">去完善</View>
      </View>
      </View>
      }
        {/* 人员信息 */}
      <View className='findingnamecardthree'>
        <View className='findingnamecardthreemobile'>
          <View className='findingnamemobile'>
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-description.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>人员信息</Text>
          </View>
        </View>
      </View>
      {/* 有信息 */}
      <View className="cardcolore">
        {/* wx: if="{{ showtopone }}" */}
        {showtopone && 
        <View className="cardtwo" >
          <Image className="link" src={`${IMGCDNURL}lpy/newresume-linktag.png`}/>
          <Image className="linkone" src={`${IMGCDNURL}lpy/newresume-linktag.png`} />
          <View className="cardonetwof">
            {/* wx: if="{{ checkone&& show_tips == 1}}" */}
            {checkone && data.content.show_tips == 1 && <Image className="checkone" src={`${IMGCDNURL}lpy/audit.png`} />}
            <View className="cardtwosonone">
              <View className="cardtwosononeimg">
                <View className='oimg'>
                  <Image src={headerimg}></Image>
                </View>
                <View className="oimgone">
                  <Text className="otext">{data.info.username}</Text>
                  {/* {wx: if="{{ authenticationimg == 2}}"} */}
                  {authenticationimg == '2' && 
                    <Image src={`${IMGCDNURL}new-list-realname-icon.png`}></Image>
                  }
                  {certificate_show == 1 && 
                    <Image src={`${IMGCDNURL}new-list-jnzs-icon.png?t=1`}></Image>
                  }
                  <View className="otextone">
                    <Text>{ sex }</Text>
                    {age && 
                    <Text className={sex?'ochange':''} >{ age }</Text>
                    }
                  <Text className={age?'ochange':''}>{ data.info.nation }</Text>
                  </View>
                </View>
              </View>
              {!checkone && checkonef != '0' && 
              <View className="cardtwosontwo">
                <Text >编辑</Text>
              </View>
            }
              {checkonef == '0' && 
                <View className="cardtwosontwo">
                <Text>待修改</Text>
              </View>
            }
            </View>
            <View className="lineone">
              <View className="linezo">
                <View className='cworkotype'>
                  <View className="ocworkotype">工种</View>
                    <View className="ocworkotypeoo">
                    {/* wx: if="{{!showskill}}" */}
                    {!showskill && 
                      <View className="ocworkotyp">
                        <View className='ocworkotyptu'>
                            {occupations.map((v,i)=>(
                              <View key={i+i}>{v}</View>
                            ))}
                        </View>
                      </View>
                    }
                  {showskill && 
                    <View className="ocworkotyp">
                      <View className='oimg'>
                      {occupations.map((v, i) => (
                        <View className='oimg' key={i + i}>{v}</View>
                      ))}
                      </View>
                    </View>
                  }
                </View>
                </View>
              </View>
            </View>
          </View>
        </View>}
      </View>
      {/*   没有信息 */}
      <View className="cardcolore">
        <View className="findingnamecardtwo">
          <Text className="findingnamecardtwothree">完善人员信息，能让老板充分了解您或您的队伍</Text>
          <View className="findingnamecardtwofour">去完善</View>
        </View>
      </View>
      {/* 项目经验 */}
      <View className='findingnamecardthree'>
        <View className='findingnamecardthreemobile'>
          <View className='findingnamemobile'>
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-description.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>项目经验</Text>
          </View>
        </View>
      </View>
      {/*   没有信息 */}
      <View className="cardcolore">
        <View className="findingnamecardtwo">
          <Text className="findingnamecardtwothree">添加项目经验，可提升老板对您的信任程度</Text>
          <View className="findingnamecardeighttwo">添加项目经验</View>
        </View>
      </View>
      {/* 职业技能  */}
      <View className='findingnamecardthree'>
        <View className='findingnamecardthreemobile'>
          <View className='findingnamemobile'>
            <Image className='findingnamecardthree-image' src={`${IMGCDNURL}lpy/newresume-description.png`} />
          </View>
          <View className="findingnamemobileone">
            <Text>职业技能</Text>
          </View>
        </View>
      </View>
      {/*   没有信息 */}
      <View className="cardcolore">
        <View className="findingnamecardtwo">
          <Text className="findingnamecardtwothree">添加职业技能，用实力证明您的能力</Text>
          <View className="findingnamecardeighttwo">添加职业技能</View>
        </View>
      </View>
    </View>
  )
}
NewJob.config = {
  navigationBarTitleText: '找活名片',
} as Config