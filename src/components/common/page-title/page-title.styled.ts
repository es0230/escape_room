import styled from 'styled-components';
import { Theme } from '../../../types/theme';

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }: Theme) => theme.font.semilarge};
  line-height: 110%;
  font-weight: 800;
  color: ${({ theme }: Theme) => theme.color.white};
`;

export { PageTitle };
