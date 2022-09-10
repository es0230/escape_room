import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
// @ts-expect-error TS(2307): Cannot find module 'const' or its corresponding ty... Remove this comment to see the full error message
import { APIRoute } from 'const';
// @ts-expect-error TS(2307): Cannot find module 'types/state' or its correspond... Remove this comment to see the full error message
import { AppDispatch, Quest, State } from 'types/state';
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
