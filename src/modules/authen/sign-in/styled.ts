import styled from 'styled-components';

export const Language = styled.div`
  display: flex;
  max-width: 120px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: auto;
`;

export const ContentStyled = styled.div`
  margin: 50px auto;
  padding: 0 30px;
  background-color: #fff;
  width: 770px;
  border: 1px solid #e2e3e4;
  border-radius: 4px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.06);
`;

export const TitleStyled = styled.p`
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  color: #333;
`;

export const MainStyled = styled.div`
  display: flex;
  /* justify-content: space-around; */
  background: #f2f4f7;
  border: 1px solid #e1e3e6;
  border-radius: 4px;
  align-items: stretch;
  position: relative;
`;

export const Left = styled.div`
  border-right: 1px solid #e1e3e5;
  flex: 1;
  padding: 20px 40px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #bebebe;
  height: 30px;
`;

export const FormCheck = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  .ant-checkbox-inner {
    --height: 14px;
    margin-right: 5px;

    &::after {
      width: 4px;
      height: 7px;
      border-width: 2px;
    }
  }
  &:hover .ant-checkbox-inner {
    border-color: #000 !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: #000;
    background-color: #000 !important;
  }
`;

export const LabelCheck = styled.p`
  display: inline-block;
  font-size: 10px;
  text-align: left;
  /* text-indent: -2.2em; */
  word-break: break-all;
  cursor: pointer;
`;

export const LabelStyled = styled.label`
  margin-bottom: 15px;
  font-family: 'Noto Sans JP';
  font-size: 14px;
  font-weight: 700;
`;

export const FormLink = styled.ul``;

export const LinkStyle = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #005fc0;
  margin-bottom: 5px;
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

export const Right = styled.div`
  padding-top: 30px;
  flex: 1;
  padding: 20px 40px;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 38px;
  margin-top: 10px;
  color: ${({ theme }) => theme.white};
  border: 1px solid #e66f6f;
  border-radius: 4px;
  border-color: #ec9797 #e47e7e #de6767;
  background-color: #e66f6f;
  cursor: pointer;

  &:hover {
    position: relative;
    top: 1px;
    opacity: 0.6;
  }
  &.btn_res {
    color: #000;
    width: 40%;
    background-color: #ffc01e;
    border-color: #fcdc80;
    margin-bottom: 65px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const ButonSpan = styled.span`
  font-size: 12px;
  margin-left: 12px;
`;

export const RegisterStyled = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 28px;
`;

export const ErrorMessage = styled.span`
  display: inline-block;
  color: red;
  font-size: 11px;
  font-weight: 500;
`;

export const FormError = styled.div`
  margin-bottom: 15px;
`;

export const FirstStyled = styled.p``;
