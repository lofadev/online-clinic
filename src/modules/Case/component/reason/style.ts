import styled from 'styled-components';

export const IconReasonStyle = styled.div`
  margin: 20px;
  width: 204px;
  height: 140px;
  background-color: #ffffff;
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
          fill: #f35f71;
        }
      }
    }
  }

  &.general {
    & > .icon-svg {
      & > svg {
        & > path {
          fill: #13c4ce;
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
  color: #3f4f5f;
  padding-inline: 10%;
`;
