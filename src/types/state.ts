
import { store } from '../store/index';

export type OrderPost = {
  name: string,
  peopleCount: number | string,
  phone: string,
  isLegal: boolean,
}

export type Quest = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: number[],
  duration: number
};

export type AppData = {
  quests: Quest[],
  isDataLoaded: boolean,
  currentFilter: string,
};

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
