import { GET, SET } from '../constants/user'

export interface User {
  userId: number,
  tokenTime: number,
  token: string,
  uuid: string,
  login: boolean
}

interface ActionType {
  type: 'set' | 'get',
  data: User
}

const DEFAULT_STATE: User = {
  userId: 0,
  uuid: '',
  tokenTime: 0,
  token: '',
  login: false
}

export default function User(state: User = DEFAULT_STATE, action: ActionType ){
  switch(action.type){
    case SET:
      return { ...state, ...action.data}
    case GET:
      return state
    default:
      return state
  }
}