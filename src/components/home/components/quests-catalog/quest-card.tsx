import * as S from './quests-catalog.styled';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { Quest } from '../../../../types/state';
import { getPeopleCountString } from '../../../../utils';

type QuestCardProps = {
  questCard: Quest
}

function QuestCard({ questCard }: QuestCardProps): JSX.Element {
  const { id, title, previewImg, level, peopleCount } = questCard;
  return (
    <S.QuestItem>
      <S.QuestItemLink to={`/detailed-quest/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {getPeopleCountString(peopleCount)}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {level}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

export default QuestCard;
