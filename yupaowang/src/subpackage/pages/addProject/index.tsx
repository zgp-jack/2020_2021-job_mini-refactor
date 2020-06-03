import Taro, { useState, useEffect, Config, useRouter, useContext } from '@tarojs/taro'
import { View, Picker, Textarea } from '@tarojs/components'
import { AtInput, AtList, AtListItem } from 'taro-ui';
import ImageView from '../../../components/imageview'
import UploadImgAction from '../../../utils/upload'
import WordsTotal from '../../../components/wordstotal'
import { resumesProjectAction } from '../../../utils/request/index'
import AREAS from '../../../models/area'
import Msg from '../../../utils/msg'
import { isVaildVal } from '../../../utils/v'
import { UserInfo } from '../../../config/store'
import { context } from '../../../pages/resume/newJob'
import './index.scss'
export interface ImageDataType {
  item: ImageItem[]
}
export interface ImageItem {
  url: string,
  httpurl: string
}
export interface AreasType{
  id: string,
  pid: string,
  name: string,
  ad_name: string,
  has_children: number,
  children: ChildItems[],
  value:string,
  label:string,
  level:number,
}
export interface ChildItems {
  id: string,
  pid: string,
  name: string,
  ad_name: string,
  value:string,
  label:string,
  level:number,
}
interface User {
  userId: number,
  tokenTime: number,
  token: string,
  uuid: string,
  login: boolean
}
export default function AddProjectPage() {
  const router: Taro.RouterInfo = useRouter()
  let { type } = router.params;
  const { projectData } = useContext(context);
  let userInfo: User = Taro.getStorageSync(UserInfo)
  // 默认字数
  const [num, setNum] = useState<number>(0)
  const [name,setName]= useState<string>('')
  const [startTime, setStartTime] = useState<string>('请选择开工时间')
  const [endTime, setEndTime] = useState<string>('请选择完工时间')
  const [textarea, setTextarea] = useState<string>('')
  const [image, setImage] = useState<ImageDataType>({
    item: [],
  })
  const [multiArrayone, setMultiArrayone] = useState<any[][]>([])
  const [multiArray, setMultiArray] = useState<any[][]>([])
  const [multiIndex, setMultiIndex] = useState<number[]>([0,0])
  const [edit, setEdit] = useState<number>(0)
  const [allprovinces, setAllprovinces] = useState<any[]>([])
  const [multiIndexvalue, seMultiIndexvalue] = useState<string>('请选择所在地区')
  const [allpro, setAllpro] = useState<string>('')
  useEffect(()=>{
    if (type){
      Taro.setNavigationBarTitle({
        title: '修改项目经验'
      })
    }
    let data:string[] = [];
    let lastData:string[] = [];
    let allChildren:any = [];
    let provice:any = [];
    let city:any=[];
    let lastCity: any = [];
    // ☝第一次点开数据
    for (let i = 0; i < AREAS.length;i++){
      if (AREAS[i].pid !== '0') {
        provice.push(AREAS[i]);
        data.push(AREAS[i].name);
        let allList:string[] = [];
        if (AREAS[i].children.length){
          city.push(AREAS[i].children);
          for (let j = 0; j < AREAS[i].children.length;j++){
            if (AREAS[i].children[j].pid!=='1'){
              allList.push(AREAS[i].children[j].name);
            }
          }
        }else{
          city.push([AREAS[i]]);
          allList.push(AREAS[i].name);
        }
        allChildren.push(allList);
      }
      lastData = [AREAS[1].name]
    }
    for (let i = 0; i < provice.length; i++) {
      if (provice[i].children) {
        for (let j = 0; j < provice[i].children.length; j++) {
          if (provice[i].children[j].pid === '1') {
            provice[i].children.splice(provice[i].children[j], 1)
          }
        }
      }
    }
    setAllprovinces(provice)
    // 所有的省，市
    setMultiArrayone([data, allChildren])
    //省市obj
    // setObjectMultiArray([provice,city]);
    // 省
    // setProvicemore(data);
    if (edit === 0){
      // 省和第一个市
      setMultiArray([data, lastData])
    }
    // 内容回填
    if (projectData) {
      console.log(projectData)
      let arr: any = [];
      setImage({ item: arr })
      const list = projectData[0];
      for (let i = 0; i < list.image.length; i++) {
        for (let j = 0; j < list.images.length; j++) {
          let obj = {
            httpurl: '',
            url: '',
          };
          if (i === j) {
            obj.httpurl = list.image[i];
            obj.url = list.images[i]
            arr.push(obj);
          }
        }
      }
      setName(list.project_name);
      setStartTime(list.start_time);
      setEndTime(list.completion_time);
      setTextarea(list.detail);
      setNum(list.detail.length);
      const userArr = [list.province, list.city]
      let one = 0;
      let two = 0;
      // 第一项
      for (let i = 0; i < AREAS.length; i++) {
        if (userArr[0] == AREAS[i].id) {
          // 因为有全国要减1
          one = i - 1;
        }
      }

      // 第二项
      for (let i = 0; i < AREAS.length; i++) {
        for (let j = 0; j < AREAS[i].children.length; j++) {
          if (userArr[1] == AREAS[i].children[j].id) {
            lastCity = AREAS[i].children.map(v => v.name);
            two = j
          }
        }
      }
      setMultiIndex([one, two])
      console.log(`${list.province, list.city}`);
      setAllpro('0,0')
      setMultiArray([data, lastCity])
      seMultiIndexvalue(list.province_name+list.city_name)
    }
  }, [edit])
  // 用户上传图片
  const userUploadImg = (i: number = -1) => {
    UploadImgAction().then(res => {
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (i === -1) {
        setImage({ ...image, item: [...image.item, imageItem] })
      } else {
        image.item[i] = imageItem
        setImage({ ...image })
      }
    })
  }
  const handleTextarea = (e: any) => {
    let val: string = e.detail.value;
    setTextarea(val);
    setNum(val.length);
  }
  // 第一列滑动
  const handlebindcolumnchange = (e)=>{
    let obj ={
      multiArray,
      multiIndex
    }
    obj.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (obj.multiIndex[0]) {
          case obj.multiIndex[0]:
            obj.multiArray[1] = multiArrayone[1][obj.multiIndex[0]];
            break;
        }
        obj.multiIndex[1] = 0;
        break;
    }
    setMultiArray(obj.multiArray);
    setMultiIndex(obj.multiIndex);
    // 修改值
    setEdit(edit+1);
  }
  // 确定
  const handleChange = (e)=>{
    setMultiIndex(e.detail.value)
    let allpro = '';
    if (allprovinces[multiIndex[0]].children.length != 0) {
      allpro = allprovinces[multiIndex[0]].id + "," + allprovinces[multiIndex[0]].children[multiIndex[1]].id
      seMultiIndexvalue(allprovinces[multiIndex[0]].name + allprovinces[multiIndex[0]].children[multiIndex[1]].name)
    } else {
      allpro = allprovinces[multiIndex[0]].id
      seMultiIndexvalue(allprovinces[multiIndex[0]].name)
    }
    setAllpro(allpro);
  }
  // 继续
  const handlContinue = (type:number)=>{
    if (!isVaildVal(name, 3, 12)){
      Taro.showModal({
        title: '温馨提示',
        content: '请填写真实证书名称，3-12字，必须含有汉字',
        showCancel: false,
      })
      return;
    } 
    if (!startTime || startTime === '请选择开工时间'){
      Taro.showModal({
        title: '温馨提示',
        content: '请选择开工时间',
        showCancel: false,
      })
      return;
    }
    if (!endTime || endTime === '请选择完工时间') {
      if (new Date(startTime).getTime() > new Date(endTime).getTime()){
        Taro.showModal({
          title: '温馨提示',
          content: '请选择完工时间（完工时间必须大于开工时间',
          showCancel: false,
        })
        return;
      }
    }
    if (!allpro) {
      Taro.showModal({
        title: '温馨提示',
        content: '请选择项目所在地区',
        showCancel: false,
      })
      return
    }
    if (!isVaildVal(textarea, 15, 500)) {
      Taro.showModal({
        title: '温馨提示',
        content: '请填写真实项目介绍，15-500字，必须含有汉字',
        showCancel: false,
      })
      return
    }
    let images: string[] = image.item.map(item => item.url)
    let params = {
      completion_time: endTime,
      start_time: startTime,
      project_name: name,
      detail: textarea,
      province: String(allpro.split(",")[0]),
      city: String(allpro.split(",")[1]),
      image: images,
      resume_uuid:userInfo.uuid,
    }
    console.log(params);
    resumesProjectAction(params).then(res => {
      if (res.errcode === 'ok') {
        // 保存继续添加
        if(type === 0 ){
          setStartTime('请选择开工时间');
          setEndTime('请选择完工时间');
          setTextarea('');
          setImage({ item: [] });
          setNum(0)
          seMultiIndexvalue('')
          // setAddress('请选择所在地区')
          setAllpro('')
          setName('')
          // 保存
        }else{
          Taro.navigateBack({
            delta: 1
          })
        }
      } else {
        Msg(res.errmsg);
      }
    })
  }
  return (
    <View className='addProjectPage'>
    <View className='content'>
      <AtInput
        name='value'
        title='项目名称:'
        type='text'
        placeholder='请输入项目名称'
        maxLength={12}
        value={name}
        onChange={(e) => { setName(e.toString())}}
      />
      <View className='list'>
        <Picker
          mode='date'
          onChange={(e) => { setStartTime(e.detail.value) }}
          value={startTime}
        >
          <AtList>
            <AtListItem title='开工时间:' extraText={startTime} />
          </AtList>
        </Picker>
      </View>
      <View className='list'>
        <Picker
          mode='date'
          onChange={(e) => { setEndTime(e.detail.value) }}
          value={endTime}
        >
          <AtList>
            <AtListItem title='完工时间:' extraText={endTime} />
          </AtList>
        </Picker>
      </View>
      <View className='list'>
        <Picker
          mode='multiSelector'
          onChange={(e)=>{handleChange(e)}}
          value={multiIndex}
          range={multiArray}
          onColumnChange={(e) => handlebindcolumnchange(e)}
        >
          <AtList>
              <AtListItem title='所在地区:' extraText={multiIndexvalue} />
          </AtList>
        </Picker>
      </View>
      <View className='feedback-content-middle'>
        <View className='feedback-content-middle-box'>
          <View>项目详情:</View>
          <Textarea
            className='feedback-content-middle-textarea'
            value={textarea}
            onInput={(e) => handleTextarea(e)}
            maxlength={500}
            placeholder='主要描述工作中的项目情况...'
          />
          <View className='feedback-wordsTotal'>
            <WordsTotal num={num} />
          </View>
        </View>
      </View>
      <View className='feedback-content-middle-imgBox'>
        {image.item &&
          <ImageView images={image.item} max={6} userUploadImg={userUploadImg} />
        }
      </View>
    </View>
      <View className='footer'>
        <View className='left' onClick={()=>handlContinue(0)}>保存 继续添加</View>
        <View className='right' onClick={()=>handlContinue(1)}>确认保存</View>
      </View>
    </View>
  )
}


AddProjectPage.config = {
  navigationBarTitleText: '新增项目经验',
} as Config