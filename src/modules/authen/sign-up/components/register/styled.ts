import styled from 'styled-components';

export const ContentStyled = styled.div`
  margin: 50px auto;
  padding: 0 30px;
  background-color: #fff;
  width: 770px;
  border: 1px solid #e2e3e4;
  border-radius: 4px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.06);
`;

export const TitleRegister = styled.label`
  margin: 48px 0 23px 0;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const TitleLeft = styled.h2`
  margin-right: 12px;
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
`;

export const TitleRight = styled.p`
  padding: 15px 0;
`;

export const MainStyled = styled.div`
  display: flex;
  gap: 10px;
  background: #f2f4f7;
  border: 1px solid #e1e3e6;
  border-radius: 4px;
  align-items: stretch;
`;

export const WapperStyled = styled.div`
  padding: 24px;
`;

export const Left = styled.div`
  width: 80%;
  margin: 0 auto;
  .ant-btn {
    background-color: #fdc864;
    color: #333333;
    border-color: #fdc864;
    width: 100%;
    height: 40px;
    margin-top: 24px;
  }
  .ant-btn-default {
    &:hover:not(:disabled) {
      background-color: #fdc864;
      border-color: #fdc864;
      color: #333333 !important;
      opacity: 0.5;
    }
  }
`;

export const BlockStyled = styled.div``;

export const TitleStyled = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #333333;
`;

export const RequiredStyled = styled.div`
  margin-top: 24px;
`;

export const RequiredTop = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

export const FormCheck = styled.div`
  margin: 10px 0;

  .ant-checkbox-inner {
    --height: 20px;
    margin-right: 5px;

    &::after {
      width: 7px;
      height: 12px;
      border-width: 3px;
    }
  }
  &:hover .ant-checkbox-inner {
    border-color: #000 !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: #000;
    background-color: #000 !important;

    &::after {
      inset-inline-start: 20%;
    }
  }
`;

export const Required = styled.div`
  color: #ffffff;
  background-color: #fa5a6e;
  width: auto;
  height: auto;
  font-size: 12px;
  text-align: center;
  padding: 5px;
`;

export const SchemaStyled = styled.span`
  padding: 5px;
  font-size: 12px;
`;

export const IconEmailStyled = styled.img`
  width: 15px;
  margin-right: 5px;
`;

export const ConfirmTerms = styled.div`
  margin-top: 15px;
`;

export const LinkTerms = styled.a`
  font-size: 12px;
  color: #005fc0;
  margin-right: 3px;
`;

export const Terms = styled.span``;

export const FormLink = styled.ul`
  margin-top: 15px;
  margin-bottom: 50px;
`;

export const LinkStyle = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #005fc0;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

export const ArrowImg = styled.img`
  padding-right: 5px;
`;
