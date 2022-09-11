import styled from 'styled-components';
import { Theme } from '../../../types/theme';

const PageSubtext = styled.p`
  margin: 0;
  margin-bottom: 9px;
  padding: 0;
  font-size: ${({ theme }: Theme) => theme.font.semibase};
  line-height: 144%;
  color: ${({ theme }: Theme) => theme.color.tangerine};
`;

export { PageSubtext };
