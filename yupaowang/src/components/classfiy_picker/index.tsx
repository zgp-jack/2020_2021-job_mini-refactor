import { View, Text } from '@tarojs/components'
import { useSelector } from '@tarojs/redux';
import { useEffect, useState } from '@tarojs/taro';
import { PublishConfigData, MateDataItem } from '../../pages/recruit/index.d'
import { ProfessionRecruitChildrenData, ProfessionBaseData } from '../../components/profession/index.d'
import { PublishData } from '../../config/store'
import Msg from '../../utils/msg';
import './index.scss'


// 匹配的工种
export interface RulesClassfies{
  id: string,
  name: string
}

// 初始化选择工种
export interface SelectedClassfies extends ProfessionBaseData{
  has_children: number
  children: ProfessionRecruitChildrenData[]
  num?: number
}


export default function ClassifyPicker () {
  // 获取redex数据
  const publishData: PublishConfigData = useSelector<any, PublishConfigData>(state => state.publishData)
  // 工种数据、匹配库、不匹配库,最大工种选择数，最大图片上传数
  const { classifyTree, mateData, noMateData, maxClassifyCount } = publishData
  // 将工种数据放入当前状态
  const [classifies, setClassifies] = useState<SelectedClassfies[]>(classifyTree)
  // 选择一级工种index
  const [pindex, setPindex] = useState<number>(0)
  // 匹配工种
  const [rulesClassifyids, setRulesClassifyids] = useState<RulesClassfies[]>([])
  // 用户选择工种
  const [userClassifyids, setUserClassifyids] = useState<RulesClassfies[]>([])
  // 一级工种对应的子工种
  const [childClassifies, setChildClassifies] = useState<ProfessionRecruitChildrenData[]>([])
  // 子工种index


  useEffect(() => {
    initChildWorkType()
  }, [pindex])
  useEffect(() => {
    mateClassifyIdsFun()
    console.log("classifies", classifies)
    console.log("childClassifies", childClassifies)
  }, [])
  
  // 设置缓存填写信息
  function setEnterInfo(name: string, data: any) {
    let regx: RegExp = /1[3-9]\d{9}/g
    let key: string = PublishData
    let issueData = Taro.getStorageSync(key)
    if (name === "phone") {
      if (regx.test(data)) {
        if (issueData) {
          issueData[name] = data
        } else {
          issueData = {}
          issueData[name] = data
        }
      } else {
        if (issueData) {
          issueData[name] = ""
        }
      }
    } else {
      if (issueData) {
        issueData[name] = data
      } else {
        issueData = {}
        issueData[name] = data
      }
    }
    Taro.setStorageSync(key, issueData)
  }
  // 初始化子类工种信息和选中状态
  function initChildWorkType () {
    // 父级工种index
    let index = pindex
    // 匹配工种字段
    let rids = rulesClassifyids
    // 用户选择工种字段
    let uids = userClassifyids
    // 获取父级工种对应的子类工种信息
    let data = JSON.parse(JSON.stringify(classifies[index].children))
    // 循环遍历子类工种数据与自动匹配和选择工种数据进行对比相同就将对应工种数据变成选中状态
    for (let i = 0; i < data.length; i++) {
      if (rids.findIndex(item => item.id == data[i].id) !== -1) {
        data[i].is_check = true
      } else {
        if (uids.findIndex(item => item.id == data[i].id) !== -1) {
          data[i].is_check = true
        } else {
          data[i].is_check = false
        }
      }
    }
    // 设置父类对应子类工种数据
    setChildClassifies(data)
  }
  // 选择一级工种信息
  function userCheckPindex(index:number) {
    // 一级工种index
    setPindex(index)
    // 初始化子类工种信息
    // initChildWorkType()
  }
  // 用户选择工种
  function userCheckWorkType (index:number) {
    debugger
    // 获取最大工种数量
    let num:number = maxClassifyCount
    // 选择工种id
    let id:string = childClassifies[index].id
    // 工种选择状态
    let checked:boolean = childClassifies[index].is_check
    // 工种名称
    let name:string = childClassifies[index].name
    // 已经匹配的工种数据
    let rulesClassifyidsData: RulesClassfies[] = rulesClassifyids
    // 已经选择的工种数据
    let userClassifyidsData: RulesClassfies[] = userClassifyids
    // 全部工种数据
    let data = JSON.parse(JSON.stringify(classifies))
    // 选择的父类工种index
    let pindexData:number = pindex 
    // 如果是选中状态
    if (checked) {
      // 匹配的工种找到对应的工种然后删除并将对应的选中数量减1
      let ri = rulesClassifyidsData.findIndex(item => item.id == id)
      if (ri !== -1) {
        rulesClassifyidsData.splice(ri, 1)
        data[pindexData].num = data[pindexData].num - 1
      } else {
        // 选择的工种找到对应的工种然后删除并将对应的选中数量减1
        let ui = userClassifyidsData.findIndex(item => item.id == id)
        userClassifyidsData.splice(ui, 1)
        data[pindexData].num = data[pindexData].num - 1
      }
      // 重新设置选择工种数据
      setClassifies(data)
    } else {
      // 从未选中状态到选中状态
      // 检查选择工种数量
      let len = rulesClassifyidsData.length + userClassifyidsData.length
      // 大于规定数量给出提示
      if (len >= num) {
        Msg('工种最多可以选择' + num + '个')
        return false
      }
      // 没有超过要求数量添加到用户选择工种数组中
      userClassifyidsData.push({
        id: id,
        name: name
      })
      // 找到选择工种对应的一级工种的num加1
      let cnum = data[pindexData].num || 0
      data[pindexData].num = cnum + 1
      // 重新设置选择的工种数据和所有工种数据
      setUserClassifyids(userClassifyidsData)
      setClassifies(data)
    }
    // 将选择的工种数据与匹配的工种数据存入缓存
    setEnterInfo('userClassifyids', userClassifyidsData)
    setEnterInfo('rulesClassifyids', rulesClassifyidsData)
    // 初始化子类工种的数据与选中状态
    initChildWorkType()
  }
  // 匹配的工种数量
  function countWorkNum() {
    // 从缓存取出发布招工数据
    let jiSuData = Taro.getStorageSync(PublishData)
    //根据详情匹配工种字段
    let rulesClassifyidsData: RulesClassfies[] = jiSuData.rulesClassifyids || []
    //用户选择工种字段
    let userClassifyidsData: RulesClassfies[] = jiSuData.userClassifyids || []
    //匹配工种字段与用户选择工种字段组成一个数组
    let ClassifyidsAll: RulesClassfies[] = [...rulesClassifyidsData, ...userClassifyidsData]
    //返回所有工种字段id数组
    let ClassifyAllids: string[] = ClassifyidsAll.map(item => item.id)
    //rulesClassifyids数组长度
    let ruleLen: number = ClassifyAllids.length
    let classifyids: SelectedClassfies[] = classifies
    //所有工种数组长度
    let len: number = classifyids.length
    //如果既没有选择工种也没有匹配工种那么就将num置为0
    if (!ruleLen) {
      classifyids.forEach(function (item) {
        if (item.num) {
          item.num = 0
        }
      })
    }
    //记录选择或者详情匹配工种的数量
    for (let i = 0; i < len; i++) {
      let data = classifyids[i].children
      let inum = 0
      for (let j = 0; j < data.length; j++) {
        let has = ClassifyAllids.indexOf(data[j].id)
        if (has !== -1) {
          inum++
        }
        classifyids[i].num = inum
      }
    }
    setClassifies(classifyids)
  }
  // 根据详情匹配工种
  function mateClassifyIdsFun () {
    Taro.showLoading({
      title: '匹配中',
      mask: true
    })
    let jiSuData = Taro.getStorageSync(PublishData)
    setUserClassifyids(jiSuData.userClassifyids || [])
    setRulesClassifyids(jiSuData.rulesClassifyids || [])
    //用户根据所需工作自行选择工种
    let uids = JSON.parse(JSON.stringify(userClassifyids))
    //获取招工详情的内容
    let content:string = jiSuData.content
    //所需工种最大选择数
    let maxWorkNum:number = maxClassifyCount
    //不匹配的数据
    let notRules:MateDataItem[] = noMateData;
    //不匹配数据长度
    let notLen:number = notRules.length;
    //获取data中匹配数据
    let needRules:MateDataItem[] = mateData;
    //匹配数据长度
    let needLen:number = needRules.length;
    // 不需要的数据
    let notArr: RulesClassfies[] = [];
    // 需要的数据
    let needArr: RulesClassfies[] = [];
    // 如果没有详情内容直接返回
    if (!content) {
      countWorkNum()
      initChildWorkType()
      // getWorkText()
      Taro.hideLoading()
      return false;
    }
    // 不需要匹配的关键词
    for (let i = 0; i < notLen; i++) {
      if (content.indexOf(notRules[i].keywords) !== -1) {
        let id = notRules[i].occupation_id;
        if (notArr.findIndex(item => item.id == id) == -1) {
          notArr.push({
            id: id,
            name: notRules[i].name
          })
        }
      }
    }
    // 匹配关键词并且该关键词没有匹配过放入匹配数组中
    for (let i = 0; i < needLen; i++) {
      if (content.indexOf(needRules[i].keywords) !== -1) {
        let id = needRules[i].occupation_id;
        if (needArr.findIndex(item => item.id == id) == -1) {
          needArr.push({
            id: id,
            name: needRules[i].name
          })
        }
      }
    }
    // 过滤不匹配关键词将不匹配的关键词从匹配到的关键词删除
    for (let i = 0; i < notArr.length; i++) {
      let id = notArr[i].id;
      let index = needArr.findIndex(item => item.id == id)
      if (index !== -1) {
        needArr.splice(index, 1)
      }
    }
    // 如果用户选择的工种等于规定最大长度将匹配的数据置空
    // 否则将匹配的数据长度等于总长度减去用户选择的长度
    let uidsLen = uids.length
    if (uidsLen >= maxWorkNum) {
      setRulesClassifyids([])
    } else {
      let needLen = maxWorkNum - uidsLen
      needArr.splice(needLen)
      setRulesClassifyids(needArr)
      
      setEnterInfo('rulesClassifyids', needArr)
    }
    countWorkNum()
    initChildWorkType()
    // getWorkText()
    Taro.hideLoading()
  }
  return (
    <View className="common-picker-container">
      <View className="common-picker-box">
        <View className="common-picker-header">
          <View className="common-picker-left">取消</View>
          <View className="common-picker-title">选择工种(可多选)</View>
          <View className="common-picker-right">确定</View>
        </View>
        <View className="common-picker-body">
          <View className="common-picker-content">
            {classifies.map((item,index) =>(
              <View className={ pindex === index ? 'common-picker-item common-picker-item-active' :'common-picker-item' } onClick={() => userCheckPindex(index)}>{item.name}
                { item.num ? <Text className="common-picker-item-text">{ item.num }</Text>:''}
                </View>
              )
            )}
          </View>
          <View className="common-picker-content2">
            {childClassifies.map((item,index) => (
              <View className={ item.is_check? 'common-picker-item common-picker-text-active' : 'common-picker-item'} onClick={() => userCheckWorkType(index)}>{ item.name }</View>
              )
            )}
          </View>
        </View>
      </View>
    </View>
  )
}