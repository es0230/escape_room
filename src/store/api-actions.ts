import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute } from '../const';

import { AppDispatch, Quest, State } from '../types/state';

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchQuests',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    return data;
  },
);

//export const postOrderAction = createAsyncThunk<void, OrderPost, {
//  dispatch: AppDispatch,
//  state: State,
//  extra: AxiosInstance
//}>(
//  'postOrder',
//  async ({ name, peopleCount, phone, isLegal }, { dispatch, extra: api }) => {
//    const { data } = await api.post(APIRoute.Orders, { name, peopleCount, phone, isLegal });

//  },
//);
