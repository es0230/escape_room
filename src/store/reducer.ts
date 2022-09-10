import { createReducer } from '@reduxjs/toolkit';
// @ts-expect-error TS(2307): Cannot find module 'types/state' or its correspond... Remove this comment to see the full error message
import { Quest } from 'types/state';
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
