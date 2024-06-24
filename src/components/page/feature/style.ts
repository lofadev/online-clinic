import styled from 'styled-components';

export const IconFeatureStyle = styled.div`
  margin: 50px;
  width: 270px;
  height: 158px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;

  & > .male {
    background-color: #1651b0;
    margin-top: -45px;
    width: 90px;
    height: 90px;
    & > .icon-gender {
      width: 100%;
    }
  }

  & > .female {
    background-color: ${({ theme }) => theme.tertiary};
    margin-top: -45px;
    width: 90px;
    height: 90px;
    & > .icon-gender {
      width: 100%;
    }
  }

  & > .general {
    background-color: #e8fff3;
    margin-top: -36px;
    width: 72px;
    height: 72px;
    & > .icon-gender {
      width: 100%;
    }
  }
`;

export const ContentFeature = styled.div`
  height: 72px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;
  max-width: 70%;
  margin-inline: auto;
  margin-top: 20px;
`;

export const IconFilled = styled.div`
  border-radius: 50%;
  margin-inline: auto;
`;

export const ImageStyle = styled.img``;
