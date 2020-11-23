import { SETRESUMETOP, SETCLICKRESUMETOP, SETRESCLICKRESUMETOP } from '../constants/resume_top';
import { resume_topObj, resume_topObj_arrStr } from '../utils/request/index.d';
// 找活存的置顶信息
export function setResumeTop(data: resume_topObj) {
  return {
    type: SETRESUMETOP,
    data: data,
  }
}
// 找活置顶页面城市
export function setClickResumeTop(data: resume_topObj_arrStr[]){
  return {
    type: SETCLICKRESUMETOP,
    data,
  }
}


// 招工置顶页面
export function setRecClickResumeTop(data:resume_topObj_arrStr[]){
  return {
    type: SETRESCLICKRESUMETOP,
    data,
  }
}
