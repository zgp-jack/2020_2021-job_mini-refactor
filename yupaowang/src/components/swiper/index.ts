export interface Props <T>{
  indicatorDots: boolean,
  autoplay: boolean,
  current: number,
  interval: number,
  duration: number,
  circular: boolean,
  vertical: boolean,
  classname: string,
  lists: T[]
}

export type IProps<T> = {
  [K in keyof Props<T>]?: Props<T>[K]
}

export interface NormalProps<T> {
  data: IProps<T>
}

export const DEFAULT_PROPS = {
  indicatorDots: false,
  autoplay: true,
  current: 0,
  interval: 3500,
  duration: 500,
  circular: true,
  vertical: false,
  classname: '',
  lists: []
}

