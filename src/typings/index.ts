export enum THEME_TYPES {
  // DEFAULT = '默认主题',
  // OLD = '老年人主题',
  // YOUNG = '年轻人主题',
  // WARM = '暖色主题',
  // COLD = '冷色主题'
  DEFAULT,
  OLD,
  YOUNG,
  WARM,
  COLD
}

export interface ISlider {
  url: string
}

export interface ILesson {
  id: number,
  title: string,
  video: string,
  poster: string,
  price: number,
  category?: string
}

export type ILessons = {
  loading: boolean,
  hasMore: boolean,
  list: ILesson[],
  limit: number,
  offset: number
}

export interface IHomeState {
  currentCategory: THEME_TYPES,
  sliders: ISlider[],
  lessons: ILessons,
}