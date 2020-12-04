import { View, Image, Text, Button, Swiper, SwiperItem } from '@tarojs/components'
import { useEffect, useState, useRouter, RouterInfo } from '@tarojs/taro'
import { IMGCDNURL } from '../../config/index'
import CITY from '../../models/citys'
import './index.scss'



// *用户账号第一次发布招工成功后跳转到营销页
export default function MarketPage(){

  // 获取路由参数
  const router: RouterInfo = useRouter()
  // 区域id
  const areaId = router.params.defaultTopArea
  // 工种id
  const jobId = router.params.job_id
  const [lists, setLists] = useState<string[][]>([])

  useEffect(()=>{
    initList()
  },[])

  const initList = () => {
    let num: number = 80;
    let arr: string[] = [];
    let firstName: string = "赵钱孙李周吴郑王冯陈褚蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水章云苏潘葛范彭郎鲁韦昌马苗凤花方俞任袁柳鲍史唐费廉岑薛雷贺倪汤滕罗毕郝安常乐于时傅齐康伍余元顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄明计成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝席季贾危江童颜郭梅盛林钟徐邱骆高夏蔡田樊胡凌霍万支";
    let firstNameArray:string[] = firstName.split("");
    let day:number[] = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5];
    for (let index = 0; index < num; index++) {
      let firstNameNum = getRandomInt(0, firstNameArray.length - 1)
      let dayNum = getRandomInt(0, day.length - 1)
      let cityNum = getRandomInt(0, CITY.length - 1)
      let m = 0;
      switch (day[dayNum]) {
        case 1:
          m = getRandomInt(1, 5)
          break;
        case 2:
          m = getRandomInt(5, 10)
          break;
        case 3:
          m = getRandomInt(10, 15)
          break;
        case 4:
          m = getRandomInt(15, 20)
          break;
        case 5:
          m = getRandomInt(20, 30)
          break;
      }
      arr.push(firstName[firstNameNum] + "老板 " + CITY[cityNum] + "置顶" + day[dayNum] + "天 成功招到" + m + "人");
    }
    var newArr:string[][] = [];
    for (var i = 0; i < arr.length; i += 4) {
      newArr.push(arr.slice(i, i + 4));
    }
    setLists(newArr)
  }
  const getRandomInt = (min:number, max:number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // 点击 管理招工信息 返回到招工信息列表
  const goRecruitList = () => {
    Taro.navigateBack({
      delta: 1
    })
  }
  // 点击增加曝光率去置顶
  const goTop = () => {
    let url = `/pages/newtopping/recRang/index?defaultTopArea=${areaId}&job_id=${jobId}`
    Taro.navigateTo({url})
  }
  return (
    <View>
      <Image className="releasesuccessicon" src={`${IMGCDNURL}publish-recruit-success-marketing.png` }></Image>
      <Text className="tips-text"></Text>
      <View className="btn-box">
        <Button onClick={() => goRecruitList()}>管理招工信息</Button>
        <Button onClick={() => goTop()}>去增加曝光率</Button>
      </View>
      <View className="slide-box">
        <View className="slide-head">
          <View className="slide-head-outer">
            <View className="slide-head-inner"></View>
          </View>
        </View>
        <View className="slide-content">
          <View className="slide-content-outer">
            <View className="slide-content-inner">
              <View className="slide-title">成功招到</View>
              <View className="swiper-box">
                <Swiper autoplay={true} interval={3000} duration={1000} vertical={true} circular={true}>
                  {lists.map(item => (
                    <SwiperItem>
                      {item.map(p => (<Text>{p}</Text>))}
                    </SwiperItem>
                  ))}
					      </Swiper>
              </View>
            </View>
          </View>
        </View>
	    </View >
    </View >
  )
}