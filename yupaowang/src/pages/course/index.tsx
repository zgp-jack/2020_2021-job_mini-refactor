import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, Text, Image, Video } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import classnames from 'classnames'
import { requestAction } from '../../utils/request';
import { reportMasterList, reportUserList} from '../../utils/request/index.d'
import { AtAccordion, AtList } from 'taro-ui'
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
  const bossIsShow = (id:string,e:boolean)=>{
    let mydata = JSON.parse(JSON.stringify(bossData))
    for(let i =0;i<mydata.item.length;i++){
      if (id === mydata.item[i].id){
        mydata.item[i].isShow = e;
      }else{
        if(e){
          mydata.item[i].isShow =!e;
        }else{
          mydata.item[i].isShow = e;
        }
      }
    }
    setBossData(mydata);
  }
  const workerMasterIsShow = (id: string, e: boolean) => {
    let workerMasterData = JSON.parse(JSON.stringify(workerMaster))
    for (let i = 0; i < workerMasterData.item.length; i++) {
      if (id === workerMasterData.item[i].id) {
        workerMasterData.item[i].isShow = e;
      } else {
        if (e) {
          workerMasterData.item[i].isShow = !e;
        } else {
          workerMasterData.item[i].isShow = e;
        }
      }
    }
    setWorkerMaster(workerMasterData);
  }
  return (
    <View className='course-content'>
    <View className='collection-tab'>
      {tab.map(item => (
        <View className='collection-tab-box' key={item.id} onClick={() => { handleClick(item.id) }}>
          <View className='collection-tab-content'>
            <View className='collection-tab-img'>
              {item.id === highlight ? <Image className='collection-tab-img-box' src={item.activeIcon}></Image> : <Image className='collection-tab-img-box' src={item.icon}></Image>}
            </View>
            <Text
              className={classnames({
                'collection.active-text': item.id === highlight
              })}
            >{item.text}</Text>
          </View>
        </View>
      ))}
    
    </View>
      <View className='course-atAccordion-box'>
    {highlight ===1 &&
        <View>
          {bossData.item.map(item => (
            <AtAccordion
              open={item.isShow}
              onClick={(e) => { bossIsShow(item.id, e) }}
              title={item.title}
            >
              <AtList hasBorder={false}>
                <Video src={item.video_url} />
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
              onClick={(e) => { workerMasterIsShow(item.id, e) }}
              title={item.title}
            >
              <AtList hasBorder={false}>
                <Video src={item.video_url} controls/>
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