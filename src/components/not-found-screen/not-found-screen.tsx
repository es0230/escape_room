import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainLayout } from '../common/common';
import * as S from './not-found-screen.styled';

function NotFoundScreen(): JSX.Element {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <S.Main>
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>Такой страницы нет :С</S.PageTitle>
            <S.BackToMainButton onClick={() => navigate(AppRoute.Home)}>Назад на главную</S.BackToMainButton>
          </S.PageHeading>
        </S.PageContentWrapper>
      </S.Main>
    </MainLayout>
  );
}

export default NotFoundScreen;
