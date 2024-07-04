import styled from 'styled-components';
import Button from '../Button';

export const ButtonStyled = styled(Button)`
  width: 220px;

  &.ant-btn-primary {
    height: 48px;
    color: ${({ theme }) => theme.textPrimary};
    border: 1px solid rgb(166 167 181 / 1);
    background-color: transparent;
    box-shadow: unset;

    &:disabled {
      color: rgb(166 167 181 / 1);
    }

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.textPrimary} !important;
      background-color: transparent !important;
      opacity: 0.7 !important;
    }
  }
`;
