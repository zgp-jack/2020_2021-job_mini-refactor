import Taro, {Config, useEffect, useState} from '@tarojs/taro'
import {View, Image, Input} from '@tarojs/components'
import {helpAction} from '../../utils/request'
import {AtAccordion, AtList, AtListItem} from 'taro-ui'
import Nodata from '../../components/nodata'
import {isIos} from '../../utils/v'
import './index.scss'

//页面列表接口
interface ListItem {
  id: string
  name: string
  icon: string
  questions: QuestionsItem[]
  open: boolean
}

//问题接口
interface QuestionsItem {
  id: string
  question: string
}

export default function Help() {
  //帮助列表
  const [listData, setListData] = useState<ListItem[]>([])
  //所有问题列表（搜索功能使用）
  const [allQuestion, setAllQuestion] = useState<QuestionsItem[]>([])
  //搜索结果列表
  const [searchResult, setSearchResult] = useState<QuestionsItem[]>([])
  //搜索框获得焦点
  const [searchFocus, setSearchFocus] = useState<boolean>(false)
  // 判断是否是ios
  const [device, setDevice] = useState<string>('')
  // 请求数据
  useEffect(() => {
    // 判断是安卓还是苹果
    let deviceName = isIos() ? 'ios' : 'android';
    setDevice(deviceName)
    helpAction(deviceName).then(res => {
      Taro.hideNavigationBarLoading()
      let newData: ListItem[] = []
      let allQuertion: QuestionsItem[] = []
      res.data.forEach(item => {
        item.open = false
        newData.push(item)
        item.questions.forEach(queItem => {
          allQuertion.push(queItem)
        })
      })
      setListData(newData)
      setAllQuestion(allQuertion)
    })
  }, [])
  //手风琴开关
  const handleAccordionClick = (id, open) => {
    let _listData = JSON.parse(JSON.stringify(listData))
    _listData.forEach(item => {
      if (item.id === id) {
        item.open = open
      }
    })
    setListData(_listData)
  }
  //点击问题，去问题详情页面
  const handleQuestionsClick = id => {
    Taro.navigateTo({
      url: `/pages/help/question-details/index?id=${id}&system=${device}`
    })
  }
  //输入框处理防抖
  const debounce = (fn, delay = 3000) => {
    //期间间隔执行 节流
    return (...rest) => {
      let args = rest;
      if (this.state.timerId) clearTimeout(this.state.timerId);
      this.state.timerId = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  }
  //根据输入内容获取问题列表
  const handleSearchResult = (searchVal: string) => {
    if (!searchVal) {
      setSearchResult([])
      return
    }
    let _searchResult: QuestionsItem[] = []
    allQuestion.forEach(item => {
      if (item.question.indexOf(searchVal) !== -1) {
        _searchResult.push(item)
      }
    })
    setSearchResult(_searchResult)
  }
  //输入框防抖函数
  const onDebounceInput = (e) => {
    let handleDebounce = debounce(handleSearchResult, 1000)
    handleDebounce(e.target.value)
  }
//去意见反馈页面
  const handleToFeedBank = () => {
    Taro.navigateTo({url: '/pages/feedback/index'})
  }
  //去我的反馈页面
  const handleToFeedBankList = () => {
    Taro.navigateTo({url: '/pages/feedbacklist/index'})
  }
  if (!listData.length) {
    return <Nodata/>
  }
  return (
    <View className='help-content'>
      <View className="help-container">
        <View className="help_center_head">
          <View className="help_center_search">
            <Image className="help_search_icon"
              src="http://cdn.yupao.com/miniprogram/images/yc/helpCenter-search.png"/>
            <Input className="help_search_input" onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)} onInput={e => onDebounceInput(e)}
              placeholder="输入您要找的问题"/>
            {
              (searchResult.length > 0 && searchFocus) &&
              <View className="search-results">
                {
                  searchResult.map(item => (
                    <View className="search-results-item" key={item.id}
                          onClick={() => handleQuestionsClick(item.id)}>{item.question}</View>
                  ))
                }
              </View>
            }
          </View>
          <View className="help-list-title">
            问题类型
          </View>
        </View>
        <View className="help-list">
          {
            listData.map(item => (
              <View className="help-list-item">
                <Image src={item.icon} className="help-list-icon"/>
                <AtAccordion hasBorder={false} open={item.open} onClick={open => handleAccordionClick(item.id, open)}
                             title={item.name}
                             key={item.id}>
                  <AtList hasBorder={false}>
                    {
                      item.questions.map(queItem => (
                        <AtListItem hasBorder={false} key={queItem.id} onClick={() => handleQuestionsClick(queItem.id)}
                                    title={queItem.question}/>
                      ))
                    }
                  </AtList>
                </AtAccordion>
              </View>
            ))
          }
        </View>
        <View className="help-footer">
          <View className="help-footer-item suggestions" onClick={handleToFeedBank}>意见反馈</View>
          <View className="help-footer-item my-suggestions" onClick={handleToFeedBankList}>我的反馈</View>
        </View>
      </View>
    </View>
  )
}

Help.config = {
  navigationBarTitleText: '帮助中心',
} as Config

