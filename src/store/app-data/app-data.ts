import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types/state';
import { fetchQuestsAction } from '../api-actions';


const initialState: AppData = {
  quests: [],
  isDataLoaded: false,
  currentFilter: 'all',
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    filterChange: (state, action) => {
      state.currentFilter = action.payload;
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

export const { filterChange } = appData.actions;
