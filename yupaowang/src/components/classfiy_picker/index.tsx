import { View, Text } from '@tarojs/components'
import { useEffect, useState } from '@tarojs/taro';
import { ProfessionRecruitChildrenData, ProfessionBaseData } from '../../components/profession/index.d'
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
export interface ClassfiyProps {
  hiddenPickerModel: () => void,
  selectClassfy: (selectClassify: RulesClassfies[]) => void,
  classifies: SelectedClassfies[],
  maxClassifyCount: number,
  choceClassfies: RulesClassfies[],
}

export default function ClassifyPicker ({
  hiddenPickerModel,
  selectClassfy,
  classifies,
  maxClassifyCount,
  choceClassfies,
}:ClassfiyProps) {
  const [workType, setWorkType] = useState<SelectedClassfies[]>([...classifies] || [])
  // 选择或者匹配的工种
  const [choceWorkType, setChoceWorkType] = useState<RulesClassfies[]>([...choceClassfies])
  // 选择一级工种index
  const [pindex, setPindex] = useState<number>(0)
  // 一级工种对应的子工种
  const [childClassifies, setChildClassifies] = useState<ProfessionRecruitChildrenData[]>([])
  useEffect(() => {
    initChildWorkType()
    //计算选中数量
    countWorkNum()
  }, [])
  // 匹配的工种数量
  function countWorkNum() {
    //选择或匹配工种字段组成一个数组
    let ClassifyidsAll: RulesClassfies[] = [...choceWorkType]
    //返回所有工种字段id数组
    let ClassifyAllids: string[] = ClassifyidsAll.map(item => item.id)
    //数组长度
    let ruleLen: number = ClassifyAllids.length
    // 所有工种数据
    let classifyids: SelectedClassfies[] = JSON.parse(JSON.stringify(workType))
    //所有工种数组长度
    let len: number = classifyids.length
    //如果没有选择工种也没有匹配工种那么就将num置为0
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
    setWorkType(classifyids)
  }
  // 初始化子类工种信息和选中状态
  function initChildWorkType (index:number=0) {
    // 选择工种字段
    let cids = choceWorkType
    // 获取父级工种对应的子类工种信息
    let data = JSON.parse(JSON.stringify(workType[index].children))
    // 循环遍历子类工种数据与自动匹配和选择工种数据进行对比相同就将对应工种数据变成选中状态
    for (let i = 0; i < data.length; i++) {
      if (cids.findIndex(item => item.id == data[i].id) !== -1) {
        data[i].is_check = true
      } else {
        data[i].is_check = false
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
    initChildWorkType(index)
  }
  // 用户选择工种
  function userCheckWorkType (index:number) {
    // 获取最大工种数量
    let num:number | undefined = maxClassifyCount
    // 选择工种id
    let id:string = childClassifies[index].id
    // 工种选择状态
    let checked:boolean = childClassifies[index].is_check
    // 工种名称
    let name:string = childClassifies[index].name
    // 已经匹配的工种数据
    let ClassifyidsData: RulesClassfies[] = choceWorkType
    // 全部工种数据
    let data = JSON.parse(JSON.stringify(workType))
    // 选择的父类工种index
    let pindexData:number = pindex 
    // 如果是选中状态
    if (checked) {
      // 匹配的工种找到对应的工种然后删除并将对应的选中数量减1
      let ci = ClassifyidsData.findIndex(item => item.id == id)
      if (ci !== -1) {
        ClassifyidsData.splice(ci, 1)
        data[pindexData].num = data[pindexData].num - 1
      } 
      // 重新设置选择工种数据
      setWorkType(data)
    } else {
      // 从未选中状态到选中状态
      // 检查选择工种数量
      let len = ClassifyidsData.length
      // 大于规定数量给出提示
      if (len >= (num as number)) {
        Msg('工种最多可以选择' + num + '个')
        return false
      }
      // 没有超过要求数量添加到用户选择工种数组中
      ClassifyidsData.push({
        id: id,
        name: name
      })
      // 找到选择工种对应的一级工种的num加1
      let cnum = data[pindexData].num || 0
      data[pindexData].num = cnum + 1
      // 重新设置选择的工种数据和所有工种数据
      setChoceWorkType(ClassifyidsData)
      setWorkType(data)
    }
    initChildWorkType(pindexData)
  }
  // 点击取消选择工种事件
  function cancleSelect () {
    hiddenPickerModel()
  }
  return (
    <View className="common-picker-container">
      <View className="common-picker-box">
        <View className="common-picker-header">
          <View className="common-picker-left" onClick={() => cancleSelect()}>取消</View>
          <View className="common-picker-title">选择工种(可多选)</View>
          <View className="common-picker-right" onClick={() => selectClassfy(choceWorkType)}>确定</View>
        </View>
        <View className="common-picker-body">
          <View className="common-picker-content">
            {workType.map((item,index) =>(
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