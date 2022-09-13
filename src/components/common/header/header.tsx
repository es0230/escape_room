import { useLocation } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';

enum LocationMap {
  Quests = '/',
  Contacts = '/contacts'
}

const Header = (): JSX.Element => {
  const location = useLocation().pathname;

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link isActiveLink={location === LocationMap.Quests} to="/">
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
              <S.Link isActiveLink={location === LocationMap.Contacts} to="/contacts">Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>

        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
