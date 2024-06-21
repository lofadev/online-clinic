import styled from 'styled-components';

export const FormButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const ButtonStyled = styled.div<{ isRegister: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  height: 50px;
  width: 100%;
  border: 1px solid #e1e3e5;
  background-color: #fff;
  margin-bottom: ${({ isRegister }) => (isRegister ? '10px' : '0')};

  &:hover {
    color: #fff;
  }

  &.login-google {
    &:hover {
      background-color: #4285f4;
    }
  }

  &.login-line {
    background-color: #fff;

    &:hover {
      background-color: #06c755;
    }
  }

  &.login-x {
    &:hover {
      background-color: #000;
    }
  }

  &.login-fb {
    &:hover {
      background-color: #1877f2;
    }
  }
`;
export const LogoIconStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

export const IconStyled = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
`;

export const ButonSpan = styled.span`
  font-size: 12px;
  margin-left: 12px;
`;

export const SpanStyled = styled.span`
  margin-top: 20px;
  font-size: 11px;
  font-weight: 400;
`;
