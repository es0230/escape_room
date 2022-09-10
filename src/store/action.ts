import { createAction } from '@reduxjs/toolkit';
// @ts-expect-error TS(2307): Cannot find module 'types/state' or its correspond... Remove this comment to see the full error message
import { Quest } from 'types/state';

export const loadQuests = createAction<Quest[]>('loadQuests');
