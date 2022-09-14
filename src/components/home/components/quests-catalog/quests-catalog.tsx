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
      {
        activeQuests.length === 0 ?
          <S.PageTitle>
            Пока что квестов нет
            <br />
            <br />
            (╯︵╰,)
            <br />
            <br />
            Вернитесь позднее
          </S.PageTitle> :
          <S.QuestsList>
            {activeQuests.map((quest) => (
              <QuestCard questCard={quest} key={quest.id} />
            ))}
          </S.QuestsList>
      }
    </>
  );
}

export default QuestsCatalog;
