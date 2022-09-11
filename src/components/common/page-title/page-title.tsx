import * as S from './page-title.styled';

const PageTitle = ({ children, ...props }: any): JSX.Element => (

  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
