import { GETREALNAME, SETREALNAME, SETAREA, SETFUN } from '../constants/realname'

export interface RealnameDefaultStore {
  RealnameArea: string,
  setRealnameArea: (val: string) => void
}

export interface RealnameAction {
  type: string,
  data: RealnameDefaultStore
}

const DEFAULT_STATE: RealnameDefaultStore = {
  RealnameArea: '',
  setRealnameArea: () => {}
}

export default function RealnameStore(state: RealnameDefaultStore = DEFAULT_STATE, action: RealnameAction){
  switch(action.type){
    case GETREALNAME:
      return state
      break
    case SETREALNAME:
      return { ...state, ...action.data }
      break
    case SETFUN:
      return { ...state, setRealnameArea: action.data  }
      break
    case SETAREA:
      return { ...state, RealnameArea: action.data }
      break
    default: 
      return state
  }
}