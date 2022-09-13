import { useEffect, useState } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useNavigate, useParams } from 'react-router-dom';
import { Quest } from '../../types/state';
import { api } from '../../store';
import { APIRoute } from '../../const';
import { getPeopleCountString } from '../../utils';
import LoadingScreen from '../loading-screen/loading-screen';

const DetailedQuest = (): JSX.Element => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const [currentQuest, setCurrentQuest] = useState<Quest>();

  const { id } = useParams<{ id?: string | undefined }>();
  const navigate = useNavigate();

  useEffect(() => {
    api.get<Quest>(`${APIRoute.Quests}/${id}`)
      .then(({ data }) => setCurrentQuest(data))
      .catch(() => navigate('*'));
  }, [id]);

  if (currentQuest === undefined) {
    return <LoadingScreen />;
  }

  const { title, description, coverImg, type, level, peopleCount, duration } = currentQuest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={coverImg}
          alt={`квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{getPeopleCountString(peopleCount)}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{level}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseButtonClick={setIsBookingModalOpened} />}
      </S.Main>
    </MainLayout>
  );

};


export default DetailedQuest;
