import styled from 'styled-components';

export const IconReasonStyle = styled.div`
  margin: 20px;
  width: 204px;
  height: 140px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  text-align: center;

  &.male {
    & > .icon-svg {
      & > svg {
        & > path {
          fill: #1651b0;
        }
      }
    }
  }

  &.female {
    & > .icon-svg {
      & > svg {
        & > path {
          fill: ${({ theme }) => theme.tertiary};
        }
      }
    }
  }

  &.general {
    & > .icon-svg {
      & > svg {
        & > path {
          fill: ${({ theme }) => theme.primary};
        }
      }
    }
  }
`;

export const IconSVG = styled.div`
  height: 80px;
  width: 80px;
  margin-inline: auto;
`;

export const Content = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  padding-inline: 10%;
`;
