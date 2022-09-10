// @ts-expect-error TS(2307): Cannot find module 'store' or its corresponding ty... Remove this comment to see the full error message
import { store } from 'store';

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

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
