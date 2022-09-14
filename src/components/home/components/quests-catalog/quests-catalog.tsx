import { useAppSelector } from '../../../../hooks';
import { getQuests } from '../../../../store/app-data/selectors';
import QuestCard from './quest-card';
import * as S from './quests-catalog.styled';
import QuestsFilter from './quests-filter';

function QuestsCatalog(): JSX.Element {
  const activeQuests = useAppSelector(getQuests);

  return (
    <>
      <QuestsFilter />

      <S.QuestsList>
        {activeQuests.map((quest) => (
          <QuestCard questCard={quest} key={quest.id} />
        ))}
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
