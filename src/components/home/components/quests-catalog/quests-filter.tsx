import * as S from './quests-catalog.styled';
import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { filterChange } from '../../../../store/app-data/app-data';
import { getCurrentFilter } from '../../../../store/app-data/selectors';

enum FilterTypesMap {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  'Sci-fi' = 'sci-fi'
}

function QuestsFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(getCurrentFilter);

  return (
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn isActive={currentFilter === FilterTypesMap.All} onClick={() => dispatch(filterChange(FilterTypesMap.All))}>
          <IconAllQuests />
          <S.TabTitle>Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentFilter === FilterTypesMap.Adventures} onClick={() => dispatch(filterChange(FilterTypesMap.Adventures))}>
          <IconAdventures />
          <S.TabTitle>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentFilter === FilterTypesMap.Horror} onClick={() => dispatch(filterChange(FilterTypesMap.Horror))}>
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentFilter === FilterTypesMap.Mystic} onClick={() => dispatch(filterChange(FilterTypesMap.Mystic))}>
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentFilter === FilterTypesMap.Detective} onClick={() => dispatch(filterChange(FilterTypesMap.Detective))}>
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn isActive={currentFilter === FilterTypesMap['Sci-fi']} onClick={() => dispatch(filterChange(FilterTypesMap['Sci-fi']))}>
          <IconScifi />
          <S.TabTitle>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>
  );
}

export default QuestsFilter;
