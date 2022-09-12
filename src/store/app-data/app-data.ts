import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types/state';
import { fetchQuestsAction } from '../api-actions';


const initialState: AppData = {
  quests: [],
  activeFilter: 'all',
  isDataLoaded: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isDataLoaded = false;
      });
  }
});
