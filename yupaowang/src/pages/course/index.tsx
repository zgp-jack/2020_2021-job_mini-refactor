import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, Text, Image, Video } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import classnames from 'classnames'
import { requestAction } from '../../utils/request';
import { reportMasterList, reportUserList} from '../../utils/request/index.d'
import { AtAccordion, AtList } from 'taro-ui'
import Nodata from '../../components/nodata'
import './index.scss'

export interface BossData {
  item: reportMasterList[],
}
export interface WorkerMasterData {
  item: reportUserList[],
}
export default function Course() {
  // 设置高亮
  const [highlight, setHighlight] = useState<number>(1)
  // 设置默认tab
  const tab = [
    {
      id: 1, text: '招工老板', icon: `${IMGCDNURL}course-laoban.png`, activeIcon: `${IMGCDNURL}course-laoban-active.png`
    },
    {
      id: 2, text: '工人师傅', icon: `${IMGCDNURL}course-geren.png`, activeIcon: `${IMGCDNURL}course-geren-active.png`
    },
  ]
  const handleClick = (id:number)=>{
    setHighlight(id);
  }
  // 招工老老板
  const [bossData, setBossData] = useState<BossData>({
    item:[]
  })
  // 工人师傅
  const [workerMaster, setWorkerMaster] = useState<WorkerMasterData>({
    item:[],
  })
  // 请求数据
  useEffect(() => {
    requestAction().then(res =>{
      Taro.hideNavigationBarLoading()
      // 增加默认关闭字段
      for(let i =0;i<res.masterList.length;i++){
        res.masterList[i].isShow = false;
      }
      for (let i = 0; i < res.userList.length; i++) {
        res.userList[i].isShow = false;
      }
      setBossData({ item: [...res.masterList] })
      setWorkerMaster({ item: [...res.userList]})
    })
  },[])
  const bossIsShow = (id:string)=>{
    let mydata:BossData = JSON.parse(JSON.stringify(bossData))
    mydata.item.forEach((v: reportMasterList)=>{
      let flag: boolean = v.id === id && !v.isShow
      v.isShow = flag ? true : false
    })
    setBossData(mydata);
  }
  const workerMasterIsShow = (id:string) => {
    let workerMasterData: WorkerMasterData = JSON.parse(JSON.stringify(workerMaster))
    workerMasterData.item.forEach((v: reportUserList) => {
      let flag: boolean = v.id === id && !v.isShow
      v.isShow = flag ? true : false
    })
    setWorkerMaster(workerMasterData);
  }
  return (
    <View className='course-content'>
    <View className='course-tab'>
      {!tab.length && <Nodata />}
      {tab.map(item => (
        <View className='course-tab-box' key={item.id} onClick={() => { handleClick(item.id) }}>
          <View className='course-tab-content'>
            <View 
              className={classnames({
                'course-tab-border': item.id === highlight,
                'course-tab-content':true
              })}
            >
            <View className='course-tab-img'>
                <Image className='course-tab-img-box' src={item.id === highlight ? item.activeIcon : item.icon}></Image>
            </View>
            <Text
              className={classnames({
                'course.active-text': item.id === highlight
              })}
            >{item.text}</Text>
          </View>
          </View>
        </View>
      ))}
    
    </View>
      <View className='course-atAccordion-box'>
    {highlight ===1 &&
        <View>
          {bossData.item.map((item) => (
            <AtAccordion
              open={item.isShow}
              onClick={() => { bossIsShow(item.id) }}
              title={item.title}
            >
              <AtList hasBorder={false}>
                <Video className='course-atAccordion-box-video' src={item.video_url} />
              </AtList>
            </AtAccordion>
          ))}
        </View>
    }
    {
        highlight === 2 &&
        <View>
          {workerMaster.item.map(item => (
            <AtAccordion
              open={item.isShow}
              onClick={() => { workerMasterIsShow(item.id) }}
              title={item.title}
            >
              <AtList hasBorder={false}>
                <Video className='course-atAccordion-box-video' src={item.video_url} controls/>
              </AtList>
            </AtAccordion>
          ))}
        </View>
    }
    </View>
    </View>
  )
}

Course.config = {
  navigationBarTitleText: '鱼泡网-使用教程',
} as Config