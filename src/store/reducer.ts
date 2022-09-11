import { createReducer } from '@reduxjs/toolkit';

import { Quest } from '../types/state';
import { loadQuests } from './action';

type InitialState = {
  quests: Quest[],
  activeFilter: string,
};

const initialState: InitialState = {
  quests: [],
  activeFilter: 'all',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    });
});

export { reducer };
