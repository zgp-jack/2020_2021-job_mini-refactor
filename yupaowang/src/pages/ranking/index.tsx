import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { resumesSortAction, resumesAddClickLogAction } from '../../utils/request/index'
import { resumesSortData } from '../../utils/request/index.d'
import Auth from '../../components/auth'
import { useSelector } from '@tarojs/redux'
import './index.scss'

export default function RankingRules() {
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])
  // 判断是否需要出现登陆
  const [isLogin, setIsLogin ] = useState<boolean>(false)
  const [data, setData] = useState<resumesSortData>({
    warm_tips:[],
    sort_rule_lists:[],
    resume_info:{
      has_resume:0,
      sort_flag:0,
    }
  })
  
  useEffect(()=>{
    resumesSortAction().then(res=>{
      setData(res.data)
    })
  }, [])
  const handleBtn = (v: { click_type: number, share_type: string, jump: { need_jump: number, mini_path:string}})=>{
    // if (v.share_type && v.share_type == 'invite_friend'){
    // }
    // if (!login) return
    if (!login){
      setIsLogin(true)
    }
    // 日志请求
    resumesAddClickLog(v.click_type);
    // 名片信息
    if (data.resume_info.has_resume == 1 && v.jump.need_jump == 1){
      console.log(v.jump.mini_path + `?rankjump=rankjump`);
      // Taro.navigateTo({
      //   url: v.jump.mini_path + `?rankjump=rankjump`,
      // })
      // 技能证书
      if (v.jump.mini_path == '/pages/clients-looking-for-work/new-project-experience/projectexperience' || v.jump.mini_path == '/pages/clients-looking-for-work/addcertificate/addcertificate') {

      } else if ( v.jump.mini_path == '/pages/clients-looking-for-work/finding-name-card/findingnamecard'){

      } else {
        Taro.navigateTo({
          url: v.jump.mini_path + `?ranktype=ranking`,
        })
      }
      // 充值
    } else if (data.resume_info.has_resume == 0 && v.jump.mini_path == '/pages/recharge/recharge' && v.jump.need_jump == 1){
      // 真实姓名
    } else if (data.resume_info.has_resume == 0 && v.jump.mini_path == '/pages/realname/realname' && v.jump.need_jump == 1){
      // 名片信息
    } else if (v.jump.need_jump == 1){

    }
  }
  const resumesAddClickLog = (click_type:number)=>{
    resumesAddClickLogAction(click_type);
  }
  return (
    <View className='rankingRules-content'>
      {isLogin && <Auth/>}
      <View className='rankingRules-top'>
        <View className='rankingRules-top-ranking'>我的排名点：<Text className='rankingRules-top-ranking-num'>{data.resume_info.sort_flag}</Text></View>
        <View className='rankingRules-top-careful'>注：找活名片只有审核通过后，才会在列表展示。排名点越高，排名越靠前。</View>
      </View>
      <View className='rankingRules-list'>
        { data.sort_rule_lists.map((v,index)=>(
          <View className='rankingRules-list-box' key={index+index}>
            <View className='rankingRules-list-content'>
              <Image className='rankingRules-list-content-img' src={v.img_url}/>
              <View className='rankingRules-list-content-box'>
                <View>{v.type_name}</View>
                <View className='rankingRules-list-content-box-text'>{v.description}</View>
              </View>
              <View 
                className='rankingRules-list-content-buttonBox'
                onClick={() => { handleBtn(v) }}
              >
                {/* <Button 
                  className={v.jump.need_jump == 0 ? 'rankingRules-list-content-button' : 'rankingRules-list-content-button-disabled'} 
                  // style={v.is_share != 1 ?{display:'none'}:{}}
                  onClick={() => { handleBtn(v)}}
                  ></Button> */}
                {v.button_words} 
              </View>
            </View>
          </View>
        ))}
      </View>
      <View className='rankingRules-Tips'>
        <View className='rankingRules-Tips-title'>温馨提示</View>
        {data.warm_tips.map((v,index)=>(
          <View className='rankingRules-Tips-text' key={index+index}>{v}</View>
        ))}
      </View>
    </View>
  )
}
RankingRules.config = {
  navigationBarTitleText: '排名规则',
} as Config