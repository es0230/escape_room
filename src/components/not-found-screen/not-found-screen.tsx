import { MainLayout } from '../common/common';
import * as S from './not-found-screen.styled';

function NotFoundScreen(): JSX.Element {
  return (
    <MainLayout>
      <S.Main>
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>Такой страницы нет :С</S.PageTitle>
          </S.PageHeading>
        </S.PageContentWrapper>
      </S.Main>
    </MainLayout>
  );
}

export default NotFoundScreen;
