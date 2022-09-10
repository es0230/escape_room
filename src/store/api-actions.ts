import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute } from '../const';

import { AppDispatch, Quest, State } from '../types/state';
import { loadQuests } from './action';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchQuests',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    dispatch(loadQuests(data));
  },
);
