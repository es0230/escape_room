import styled from 'styled-components';
import { Theme } from '../../types/theme';

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }: Theme) => theme.font.large};
  line-height: 95%;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }: Theme) => theme.color.white};
  text-transform: uppercase;
  overflow-wrap: anywhere;
  text-align: center;
  margin-top: 400px;
`;
export { PageTitle };
