import Taro, {useEffect, useState, Config} from '@tarojs/taro'
import {Image, RichText, View} from "@tarojs/components";
import './index.scss'
import {helpQuestionDetailsAction, helpQuestionDetailsFeedBankAction} from "../../../utils/request";
import RouterInfo = Taro.RouterInfo;
import useRouter = Taro.useRouter;


export default function QuestionDetails() {
  const router: RouterInfo = useRouter()
  const [title, setTitle] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [effective, setEffective] = useState<string>('')
  const [detailsBtn] = useState<{ id: string, text: string }[]>([{id: '1', text: '已解决'}, {id: '2', text: '未解决'}])
  const {id, system} = router.params
  useEffect(() => {
    helpQuestionDetailsAction(id, system).then(res => {
      const {question, answer, effective} = res.data
      setTitle(question)
      setAnswer(answer.replace(/<img /g, '<img style="max-width: 100%!important;display:block!important;margin:10px auto!important;"'))
      setEffective(effective)
    })
  }, [])
  const handleFeedBackClick = (val: string) => {
    helpQuestionDetailsFeedBankAction(id, val).then(res => {
      if (res.errcode === 'ok') {
        Taro.showToast({title: res.errmsg})
        setEffective(val)
      }
      if (val === detailsBtn[1].id) {
        Taro.navigateTo({url: '/pages/feedback/index'})
      }
    }).catch(() => {
      Taro.showToast({title: '网络错误，请重试', icon: 'none'})
    })
  }
  //请求未完成不加载页面
  if (!title) {
    return
  }
  return (
    <View className="question-details">
      <View className="question-title">{title}</View>
      <View className="question-content">
        <RichText className="answer" nodes={answer} space='nbsp'/>
      </View>
      <View className="question-footer">
        {
          detailsBtn.map(item => (
            <View
              className={"question-footer-item " + (effective ? 'footer-item-effective ' : '')}
              onClick={() => handleFeedBackClick(item.id)}>{item.text}
              {effective === item.id && < Image src="http://cdn.yupao.com/miniprogram/images/yc/choose-status.png"
                                                className="footer-item-active"/>}
            </View>
          ))
        }
      </View>
    </View>
  )
}
QuestionDetails.config = {
  navigationBarTitleText: '详情',
} as Config
