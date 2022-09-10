import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// @ts-expect-error TS(2307): Cannot find module 'services/api' or its correspon... Remove this comment to see the full error message
import { createAPI } from 'services/api';
import { reducer } from './reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }),
});
