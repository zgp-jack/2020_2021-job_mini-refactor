import { View, Text } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux';
import { useEffect, useState } from '@tarojs/taro';
import { PublishConfigData } from '../../pages/recruit/index.d'
import { ProfessionRecruitChildrenData, ProfessionBaseData } from '../../components/profession/index.d'
import './index.scss'
import Msg from 'src/utils/msg';

// 匹配的工种
export interface RulesClassfies{
  id: string,
  name: string
}

// 初始化选择工种
export interface SelectedClassfies extends ProfessionBaseData{
  has_children: number
  children: ProfessionRecruitChildrenData[]
  num: number
}


export default function ClassifyPicker () {
  // 获取redex数据
  const publishData: PublishConfigData = useSelector<any, PublishConfigData>(state => state.publishData)
  // 工种数据、匹配库、不匹配库,最大工种选择数，最大图片上传数
  const { classifyTree, mateData, noMateData, maxClassifyCount, maxImageCount } = publishData
  // 将工种数据放入当前状态
  const [classifies, setClassifies] = useState<SelectedClassfies[]>([])
  // 选择一级工种index
  const [pindex, setPindex] = useState<number>(0)
  // 匹配工种
  const [rulesClassifyids, setRulesClassifyids] = useState<RulesClassfies[]>([])
  // 用户选择工种
  const [userClassifyids, setUserClassifyids] = useState<RulesClassfies[]>([])
  // 一级工种对应的子工种
  const [childClassifies, setChildClassifies] = useState<ProfessionRecruitChildrenData[]>([])
  // 分发action的dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    initChildWorkType()
  },[])
  // 初始化子类工种信息和选中状态
  function initChildWorkType () {
    // 父级工种index
    let index = pindex
    // 匹配工种字段
    let rids = rulesClassifyids
    // 用户选择工种字段
    let uids = userClassifyids
    // 获取父级工种对应的子类工种信息
    let data = JSON.parse(JSON.stringify(classifyTree[index].children))
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
    initChildWorkType()
  }
  // 用户选择工种
  function userCheckWorkType (index:number) {
    // 获取最大工种数量
    let num = maxClassifyCount
    // 选择工种id
    let id = childClassifies[index].id
    // 工种选择状态
    let checked = childClassifies[index].is_check
    // 工种名称
    let name = childClassifies[index].name
    // 已经匹配的工种数据
    let rulesClassifyidsData = rulesClassifyids
    // 已经选择的工种数据
    let userClassifyidsData = userClassifyids
    // 全部工种数据
    let data = JSON.parse(JSON.stringify(this.data.classifies))
    // 选择的父类工种index
    let pindexData = pindex
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
      this.setData({
        classifies: data
      })
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
    this.setEnterInfo('userClassifyids', userClassifyids)
    this.setEnterInfo('rulesClassifyids', rulesClassifyids)
    // 初始化子类工种的数据与选中状态
    initChildWorkType()
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
            {classifyTree.map((item,index) =>(
              <View className="common-picker-item" onClick={() => userCheckPindex(index)}>{item.name}
                  <Text></Text>
                </View>
              )
            )}
          </View>
          <View className="common-picker-content2">
            {childClassifies.map((item,index) => (
              <View className="common-picker-item" onClick={() => userCheckWorkType(index)}>{ item.name }</View>
              )
            )}
          </View>
        </View>
      </View>
    </View>
  )
}