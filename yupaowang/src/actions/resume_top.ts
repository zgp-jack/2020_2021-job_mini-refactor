import { SETRESUMETOP, SETCLICKRESUMETOP } from '../constants/resume_top';
import { resume_topObj, resume_topObj_arrStr } from '../utils/request/index.d';
// 找活存的置顶信息
export function setResumeTop(data: resume_topObj) {
  return {
    type: SETRESUMETOP,
    data: data,
  }
}
// 置顶页面城市
export function setClickResumeTop(data: resume_topObj_arrStr[]){
  return {
    type: SETCLICKRESUMETOP,
    data,
  }
}