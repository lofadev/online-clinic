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

export const TitleStyled = styled.div`
  text-align: center;
  margin-top: 25px;
`;

export const TitleTextStyled = styled.div`
  margin: 25px 0;
`;

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const CodeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormInput = styled.div`
  width: 50%;
`;

export const ButtonStyled = styled.button`
  background-color: #ffc847;
  margin: 25px 0;
  padding: 12px 16px;
  border-radius: 15px;
  font-size: 14px;
  color: #333333;
  font-weight: 700;
  width: 40%;

  &:hover {
    opacity: 0.6;
  }

  &.back-to {
    background-color: #fafafa;
    border: 1px solid #0052d4;
    width: 50%;

    &:hover {
      background-color: #8e8e8e;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const WrapperStyled = styled.div`
  background-color: #fafafa;
  padding: 32px;
`;

export const LinkStyled = styled.a`
  display: flex;
  gap: 5px;
  color: #0052d4;
  font-size: 12px;
`;
