import { Button } from 'components';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  padding-top: 24px;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.white};
`;

export const ActionsTopStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

export const NoteStyled = styled.div`
  background-color: #f7f9fc;
  text-align: center;
  padding: 10px 0;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const PeriodWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const PeriodMenuStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const PeriodActionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const DaylistStyled = styled.div`
  display: flex;
  align-items: center;
`;
