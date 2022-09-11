import * as S from './page-heading.styled';

const PageHeading = ({ children, ...props }: any): JSX.Element => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
