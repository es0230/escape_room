
// @ts-expect-error TS(2307): Cannot find module 'assets/img/logo.svg' or its co... Remove this comment to see the full error message
import logo from 'assets/img/logo.svg';
import * as S from './header.styled';

const Header = () => (

  <S.StyledHeader>

    <S.HeaderWrapper>

      <S.Logo>

        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>


      <S.Navigation>

        <S.Links>

          <S.LinkItem>

            <S.Link $isActiveLink to="/">
              Квесты
            </S.Link>
          </S.LinkItem>


          <S.LinkItem>

            <S.Link to="#">Новичкам</S.Link>
          </S.LinkItem>


          <S.LinkItem>

            <S.Link to="#">Отзывы</S.Link>
          </S.LinkItem>


          <S.LinkItem>

            <S.Link to="#">Акции</S.Link>
          </S.LinkItem>


          <S.LinkItem>

            <S.Link to="/contacts">Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>

      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);

export default Header;
