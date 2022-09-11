import { Quest, State } from '../types/state';

export const getQuests = (state: State): Quest[] => state.quests;
