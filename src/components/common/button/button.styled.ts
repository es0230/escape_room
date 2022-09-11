import styled from 'styled-components';
import { Theme } from '../../../types/theme';

const Button = styled.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  margin: 0;
  padding-top: 22px;
  padding-right: 47px;
  padding-bottom: 23px;
  padding-left: 48px;

  font-family: inherit;
  font-size: ${({ theme }: Theme) => theme.font.upperbase};
  line-height: 20px;
  letter-spacing: 0.03em;
  font-weight: 800;
  text-transform: uppercase;

  color: ${({ theme }: Theme) => theme.color.white};
  background-color: ${({ theme }: Theme) => theme.color.tangerine};
  border: none;
  border-radius: 65px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${({ theme }: Theme) => theme.color.carrotOrange};
  }

  &:active {
    opacity: 0.8;
  }
`;

export { Button };
