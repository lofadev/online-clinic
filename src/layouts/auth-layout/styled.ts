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

export const PasswordChangeStyled = styled.div`
  margin-left: auto;
  a span {
    font-size: 10px !important;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const NavigatorStyled = styled.div`
  ul {
    width: 860px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    li {
      overflow: hidden;
      a {
        display: block;
        padding: 18px 24px;
        font-weight: 700;
      }
      &:first-child {
        margin-left: -24px;
      }

      :hover {
        cursor: pointer !important;
        background-color: rgba(0, 0, 0, 0.01);
        color: #13c4ce;
        a {
        }
      }
    }
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
      cursor: pointer;
    }
  }
`;

export const AppointmentImageStyled = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;
