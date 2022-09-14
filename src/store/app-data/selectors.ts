import { NameSpace } from '../../const';
import { Quest, State } from '../../types/state';

export const getQuests = (state: State): Quest[] => state[NameSpace.Data].quests.filter((quest) => quest.type === state[NameSpace.Data].currentFilter || state[NameSpace.Data].currentFilter === 'all');
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getCurrentFilter = (state: State): string => state[NameSpace.Data].currentFilter;
