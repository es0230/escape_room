import { NameSpace } from '../../const';
import { Quest, State } from '../../types/state';

export const getQuests = (state: State): Quest[] => state[NameSpace.Data].quests;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
