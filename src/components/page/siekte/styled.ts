import styled from 'styled-components';

export const IconSiekteStyle = styled.div`
  width: 176px;
  height: 178px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  &.disable {
    opacity: 0.5;
    background-color: #f4fcff;

    &:hover {
      cursor: default;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.2s;
  }

  &.male {
    & > .border-icon {
      border: 1px solid #1651b0;

      & > .icon-fill {
        background-color: #e5ecf6;
      }
    }
  }

  &.female {
    & > .border-icon {
      border: 1px solid ${({ theme }) => theme.tertiary};

      & > .icon-fill {
        background-color: #feecec;
      }
    }
  }

  &.general {
    & > .border-icon {
      border: 1px solid ${({ theme }) => theme.primary};

      & > .icon-fill {
        background-color: #ecfaff;
      }
    }
  }
`;

export const IconFill = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  padding: 8px;
  margin-block: 16px;
`;

export const ImageStyle = styled.img`
  width: 54px;
  height: 54px;
`;

export const ContentIcon = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};
  max-width: 80%;
  text-align: center;
  line-height: 22.5px;
`;

export const BorderIcon = styled.div`
  width: 160px;
  height: 162px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
