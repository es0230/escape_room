import { createAction } from '@reduxjs/toolkit';
import { Quest } from 'types/state';

export const loadQuests = createAction<Quest[]>('loadQuests');
