
import { store } from '../store/index';

export type OrderPost = {
  name: string,
  peopleCount: number,
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
  activeFilter: string,
  isDataLoaded: boolean,
};

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
