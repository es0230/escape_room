import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute } from '../const';

import { AppDispatch, Quest, State } from '../types/state';

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    return data;
  },
);
