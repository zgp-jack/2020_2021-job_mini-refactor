import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Image, Block, ScrollView } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import { AtDrawer } from 'taro-ui'
import AREAS, { ChildItems } from '../../models/area'
import classnames from 'classnames'
import './index.scss'

interface ConditionData {
  id: string,
  text: string
}
interface ConditionProps {
  data: ConditionData[]
}

export default function Condition({ data }: ConditionProps ){

  console.log(data)

  // * 当前展开项id
  const [current, setCurrent] = useState<string>('')
  // * 当前城市选择父级索引
  const [areaIndex, setAreaIndex] = useState<number>(0)
  // * 当前展开的城市子集数据
  const [childAreaList, setChildAreaList] = useState<ChildItems[]>(AREAS[areaIndex].children)
  // * 切换后子集列表回到顶部
  const [scrollTop, setScrollTop] = useState<number>(0)

  // * 点击选项展开内容
  const conditionItemClick = (id: string)=> {
    setCurrent(id)
  }

  // * 关闭抽屉
  const closeDrawer = ()=> {
    setCurrent('')
  }

  // * 城市索引更换
  const changeAreaIndex = (i: number)=> {
    setAreaIndex(i)
    setScrollTop(0)
  }

  // * 获取城市子集数据
  useEffect(()=>{
    setChildAreaList(AREAS[areaIndex].children)
  },[areaIndex])

  const onScrollAction = (e: any)=> {
    let top: number = e.detail.scrollTop
    setScrollTop(top)
  }
  return (
    <Block>
      <View className='recruit-condition-box'>
        {data&&data.map((item)=>(
          <View className='recruit-condition-item' key={item.id} onClick={() => conditionItemClick(item.id)}>
            <View className='recruit-condition-content overwords'>
            { item.text }
            <Image className='recruit-condition-select' src={IMGCDNURL + 'select.png'} />
            </View>
          </View>
        ))}
      </View>

      {/* 地址选择器 */}
      <AtDrawer
        show={current === 'area'}
        mask
        onClose={()=>closeDrawer()}
      >
        <View className='common-drawer-item'>
          <ScrollView className='drawer-full-lists' scrollY>
            {AREAS.map((item,index)=>(
              <View 
                className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': index === areaIndex
                })}
                key={ item.id }
                onClick={() => changeAreaIndex(index)}
              >{ item.name }</View>
            ))}
          </ScrollView>
          {childAreaList.length &&
          <ScrollView 
            className='drawer-full-lists drawer-half-lists' 
            scrollY 
            scrollTop={ scrollTop }
            onScroll={(e)=>onScrollAction(e)}
          >
            {childAreaList.map((item)=>(
              <View className='drawer-list-item overwords'>{ item.name }</View>
            ))}
          </ScrollView>
          }
        </View>
      </AtDrawer>
    </Block>
  )
}