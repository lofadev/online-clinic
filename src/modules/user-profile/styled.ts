import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: #13c4ce;
  color: #fff;
  padding: 16px 20px;
  > ul {
    display: flex;
    align-items: center;
    width: 860px;
    margin: 0 auto;
    li {
      font-weight: 700;
      font-size: 10px;
      margin-right: 20px;
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
        margin: 0 4px;
      }
    }
  }
`;

export const NavigatorStyled = styled.div`
  ul {
    width: 860px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    &:last-child {
    }

    li {
      overflow: hidden;
      font-weight: 700;
      a {
        display: block;
        padding: 18px 24px;
      }
      &:first-child {
        margin-left: -24px;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.01);
        color: #13c4ce;
        cursor: pointer;
        a {
        }
      }
    }
  }
`;

export const PasswordChangeStyled = styled.div`
  margin-left: auto;
  a span {
    font-size: 10px !important;
    font-weight: 700;
  }
`;

export const AppointmentWrapper = styled.div`
  margin-left: auto;

  .ant-btn-sm {
    height: auto;
    padding: 6px 20px;
    background-color: ${(p) => p.theme.secondary};
    border-radius: 8px;
    border: none;
    border-radius: 4px;

    span {
      color: ${({ theme }) => theme.white};
    }

    &:hover {
      background-color: ${(p) => p.theme.secondary} !important;
      opacity: 0.7;
    }
  }
`;

export const AppointmentImageStyled = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;

export const BodyContainerStyled = styled.div`
  background-color: #ecfaff;
  overflow: hidden;
`;

export const TitleStyled = styled.p`
  width: 860px;
  margin: 48px auto 24px auto;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

export const ContainerStyled = styled.div`
  width: 860px;
  margin: 0 auto 48px auto;
  padding: 48px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
`;

export const RowInfomationStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
  p {
    flex: 0 0 162px;
    font-weight: 700;
  }
`;

export const RadioWrapper = styled.div`
  > p {
    font-weight: 400;
  }
`;

export const RightColumnStyled = styled.div`
  display: flex;
  > p {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const SelectRightColumnStyled = styled.div`
  div {
    display: flex;
  }
  > p {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const SelectWrapperStyled = styled.div<{ width?: string; isDisabled?: string }>`
  display: block;
  > div {
    width: ${({ width }) => width};
    position: relative;
  }

  .ant-select {
    width: ${({ width }) => width} !important;
    min-width: 0;
    height: 40px;
    .ant-select-selector {
      width: ${({ width }) => width};
      .ant-select-selection-item {
        margin-top: 0;
        font-size: 14px;
      }
    }
  }

  > span {
    margin: 0 14px 0 6px;
    line-height: 40px;
    font-size: 14px;
  }
`;

export const SelectNotDivStyled = styled.div<{ width?: string }>`
  > div {
    width: ${({ width }) => width};
  }
  .ant-select {
    width: ${({ width }) => width} !important;
    min-width: 0;
    height: 40px;
    .ant-select-selector {
      width: ${({ width }) => width};
      .ant-select-selection-item {
        margin-top: 0;
        font-size: 14px;
      }
    }
  }
  > span {
    font-size: 12px;
    display: block;
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.textDanger};
  margin-top: 10px;
`;

export const FieldWrapperStyled = styled.div<{ width?: string }>`
  margin-right: 20px;

  .ant-input {
    padding: 8px 12px;
    width: ${({ width }) => width};
  }
  > div {
    > span {
      font-size: 12px;
      display: block;
      margin-top: 10px;
    }
  }

  .ant-input[disabled] {
    color: #8e909e;
    background-color: #e1e2eb;
    border-width: 0;
    cursor: text;
    :hover {
      transition: none;
      box-shadow: none;
    }
  }
`;

export const NoteWrapperStyled = styled.div`
  margin: -10px 0 60px 162px;
  p {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  .ant-btn-default {
    width: 352px;
    height: 50px;
    background-color: #13c4ce;
    color: #fff;
  }
`;

export const AddressLabelStyled = styled.p`
  text-align: center;
  margin: 30px 0 20px 0;
  font-weight: 700;
  font-size: 16px;
`;
