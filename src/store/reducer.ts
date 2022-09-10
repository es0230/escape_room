import { createReducer } from '@reduxjs/toolkit';

import { Quest } from '../types/state';
import { loadQuests } from './action';

type InitialState = {
  quests: Quest[],
};

const initialState: InitialState = {
  quests: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
});

export { reducer };
