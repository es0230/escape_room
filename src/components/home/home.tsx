import { useAppSelector } from '../../hooks';
import { getLoadedDataStatus } from '../../store/app-data/selectors';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import LoadingScreen from '../loading-screen/loading-screen';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const HomePage = (): JSX.Element => {
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
};

export default HomePage;
