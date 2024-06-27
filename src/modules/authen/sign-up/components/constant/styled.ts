import styled from 'styled-components';

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ecfaff;
`;

export const TitleStyled = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const ContentStyled = styled.div`
  margin: 0 auto;
  background-color: #fff;
  width: 770px;
  border: 1px solid #e2e3e4;
  border-radius: 4px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.06);
`;

export const WrapperStyled = styled.div`
  padding: 24px;
`;

export const FormInputStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 20px;
  margin-right: 50px;
  max-width: 100%;
`;
export const FormGroup = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;

  .form-group {
    flex: 1;
  }
`;

export const LabelStyled = styled.label``;

export const ScrollStyled = styled.div`
  height: 200px;
  overflow-y: scroll;
  padding: 25px;
  margin: 25px;
  border: 1px solid #333333;
`;

export const FormTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyled = styled.div`
  margin-bottom: 10px;
`;

export const FormAgree = styled.div`
  margin: 24px;
`;

export const FormCheckStyled = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 8px;
`;

export const FormLink = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const LinkStyled = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  font-size: 14px;
  font-weight: 600;
`;

export const LabelCheck = styled.label``;

export const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-btn {
    width: 50%;
    margin-bottom: 50px;
  }
`;
