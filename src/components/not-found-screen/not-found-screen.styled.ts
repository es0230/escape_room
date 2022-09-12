import styled from 'styled-components';
import { Theme } from '../../types/theme';

const Main = styled.main`
  max-width: 556px;
  margin-top: 149px;
  margin-bottom: 149px;
  margin-left: 43.92vw;
`;

const PageContentWrapper = styled.div`
  z-index: 2;
  position: relative;
`;

const PageHeading = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 29px;
`;

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
`;

export { Main, PageContentWrapper, PageHeading, PageTitle };
