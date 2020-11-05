/*
 * @Author: zyb
 * @Date: 2020-11-05 20:00:40
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-05 20:51:28
 * @Description: 
 */
import Taro, { useState, useEffect,useRouter } from '@tarojs/taro'
import { useDispatch, useSelector } from '@tarojs/redux'
import { resProjectArr } from '../../utils/request/index.d';
import { RecruitImageModel } from '../../recruit/index.d'
import { ProjectData } from '../../pages/resume/add_project/data';

export default function AddProject() {
  // 获取项目的redux
  const projectVal = useSelector<any, resProjectArr[]>(state => state.resumeData.projectData);
  // 传过来的参数
  const router: Taro.RouterInfo = useRouter();
  let { id } = router.params;
  // 需要修改的项目
  const [project, setProject] = useState<resProjectArr>(ProjectData);
  useEffect(()=>{
    console.error(projectVal,'projectValprojectVal')
    if (projectVal.length){
      const data = [...projectVal];
      for (let i = 0; i < data.length;i++){
        if (data[i].id == id){
          setProject(data[i]);
        }
      }
    }
  },[])
  return{
    project,
    setProject,
  }
}