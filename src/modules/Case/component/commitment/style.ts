import styled from 'styled-components';

export const CommitmentStyle = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin-block: 40px;
  margin-inline: auto;

  &.left {
  }

  &.right {
    flex-direction: row-reverse;
  }
`;

export const IconPoint = styled.div``;

export const ImageStyle = styled.img`
  width: 375px;
  height: 250px;
`;

export const MainCommitmemt = styled.div`
  margin-block: auto;
  width: 400px;
`;

export const Point = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #13c4ce;
`;

export const TitleCommitment = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #3f4f5f;
  margin-block: 16px;
`;

export const ContentCommitment = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #3f4f5f;
  line-height: 24px;
`;
