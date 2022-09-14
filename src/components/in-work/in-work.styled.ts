import styled from 'styled-components';
import { Theme } from '../../types/theme';
import { Button } from '../common/common';

const Main = styled.main`
  max-width: 556px;
  margin-top: 149px;
  margin-bottom: 149px;
  margin-left: 23.92vw;
`;

const PageContentWrapper = styled.div`
  z-index: 2;
  position: relative;
`;

const PageHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }: Theme) => theme.font.semilarge};
  line-height: 95%;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }: Theme) => theme.color.white};
  text-transform: uppercase;
  overflow-wrap: anywhere;
`;

const BackToMainButton = styled(Button).attrs({ type: 'button' })`
  border-radius: 0px;
  margin-top: 10px;
  width: 280px;
  text-align: center;
`;

export { Main, PageContentWrapper, PageHeading, PageTitle, BackToMainButton };
