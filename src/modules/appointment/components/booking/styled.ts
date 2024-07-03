import { Button, Text, Title } from 'components';
import styled from 'styled-components';

export const BookingRowStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalWrapperStyled = styled.div`
  text-align: center;
`;

export const FormWrapperStyled = styled.div`
  text-align: left;
  margin-bottom: 24px;
`;

export const ModalTitleStyled = styled(Title.Primary)`
  &.ant-typography {
    margin-bottom: 24px;
    display: block;
  }
`;

export const ServiceStyled = styled(Text.Primary)`
  &.ant-typography {
    display: block;
  }
`;

export const DateTimeStyled = styled(Title.Primary)`
  &.ant-typography {
    margin-bottom: 24px;
  }
`;

export const ModalNoteStyled = styled.div`
  text-align: left;
  padding: 16px;
  font-size: 12px;
  margin-top: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.extraGray};
`;

export const ModalNoteTitleStyled = styled.h4`
  font-weight: 700;
`;

export const TextStyled = styled(Text.Primary)`
  &.ant-typography {
    display: block;
    margin-bottom: 8px;
    margin-top: 16px;
  }
`;

export const ButtonStyled = styled(Button)`
  &.ant-btn.ant-btn-primary.ant-btn-sm {
    height: 48px;
    width: 100%;
  }
`;

export const ButtonWithoutAuthStyled = styled.div``;

export const ButtonHasAuthStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .ant-btn {
    flex: 1;
  }
`;
