import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainLayout } from '../common/common';
import * as S from './in-work.styled';

function InWork(): JSX.Element {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <S.Main>
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>Страница еще в разработке, но совсем скоро появится ʕ•́ᴥ•̀ʔ</S.PageTitle>
            <S.BackToMainButton onClick={() => navigate(AppRoute.Home)}>Назад на главную</S.BackToMainButton>
          </S.PageHeading>
        </S.PageContentWrapper>
      </S.Main>
    </MainLayout>
  );
}

export default InWork;
