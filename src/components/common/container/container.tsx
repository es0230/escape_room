import * as S from './container.styled';

const Container = ({ children, ...props }: any): JSX.Element => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
