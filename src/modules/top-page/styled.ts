import styled, { css } from 'styled-components';

export const ArticleBlockWrapper = styled.div`
  > div {
    > div {
      h2 {
        margin-bottom: 0;
      }
    }
  }
`;

export const SiekteWrapper = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 768px;
  justify-content: center;
  margin: 8px auto 0 auto;
`;

export const MediaImageWrapper = styled.div`
  margin: 32px auto;
  width: 540px;
`;

export const MediaImageStyled = styled.img`
  width: 100%;
  height: 120px;
`;

export const MediaTextStyled = styled.p`
  font-size: 12px;
  color: #686975;
  text-align: center;
`;

export const AboutTopBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  width: 860px;
  gap: 30px;
  margin: 60px auto 0 auto;
`;

export const CurrentIssuesBlock = styled.div`
  margin: 48px auto 32px auto;
  width: 860px;
  display: flex;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
`;

export const LeftBlockStyled = styled.div`
  padding: 32px;
`;

export const CurrentIssues = styled.ul`
  border-radius: 8px;
`;

export const CurrentIssueItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > p {
    font-size: 16px;
    font-weight: 400;
  }
  > img {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
`;

export const IssueTextStyled = styled.p`
  font-size: 16px;
  padding-top: 8px;
`;

export const IssueTitleStyled = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 16px 0 8px 0;
  color: #03afb9;
`;

export const IssueSubtitletStyled = styled.p`
  font-size: 16px;
`;

export const IssueNoteStyled = styled.p`
  font-size: 12px;
  color: #8e909e;
  margin-top: 16px;
  > a {
    text-decoration: underline;
    color: #8e909e;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const FollowBlockStyled = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 1020px;
  justify-content: center;
  margin: 46px auto 0 auto;
`;

export const FollowButtonSWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 54px;

  .ant-btn-sm {
    border-radius: 8px;
  }
`;

export const FollowButtonMWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  .ant-btn-sm {
    height: auto;
    padding: 6px 90px;
    background-color: ${(p) => p.theme.secondary};
    border-radius: 8px;
    position: relative;

    span {
      &:nth-child(1) {
        display: none;
      }
      font-size: 24px;
      color: ${({ theme }) => theme.white};
    }
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ArrowWhiteIconStyled = styled.img`
  position: absolute;
  right: 18px;
`;

export const FollowImageStyled = styled.img`
  margin-right: 12px;
`;

export const UserImageStyled = styled.img`
  width: 340px;
  height: 368px;
  object-fit: cover;
`;

export const DeliveryBlockWrapper = styled.div`
  background-color: #f7f9fc;
`;

export const DeliveryImageWrapper = styled.div`
  width: 540px;
  padding: 40px 0;
  margin: 0 auto;
`;

export const DeliveryImageStyled = styled.img`
  width: 100%;
  height: 120px;
`;

export const DeliveryWrapper = styled.div`
  width: 860px;
  margin: 32px auto 0 auto;
`;

export const DeliveryTopStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  padding: 24px 0;
  > img {
    margin-right: 8px;
  }
  p {
    color: #3f4f5f;
    font-weight: 700;
    font-size: 16px;

    span {
      font-size: 22px;
    }
  }

  margin-bottom: 20px;
`;

export const DeliveryContentStyled = styled.div`
  padding: 32px 90px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  text-align: center;
`;
export const DeliveryTitletStyled = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #3f4f5f;
  margin: 20px 0;
`;

export const DeliveryDescriptiontStyled = styled.div`
  color: #3f4f5f;
  line-height: 20px;
`;

export const DeliveryInfoBlockStyled = styled.div`
  padding: 32px 0 20px 0;
  display: flex;
`;

export const DeliveryLeftStyled = styled.div<{ type?: string }>`
  width: 50%;
  text-align: start;
  padding-right: 20px;

  > p {
    font-size: 16px;
    font-weight: 700;
    color: #3f4f5f;
  }

  &:last-child {
    padding-right: 0;
    padding-left: 20px;
    border-left: 1px solid #e1e2eb;
  }

  ${(p) =>
    !!p.type &&
    css`
      > div > span {
        background-color: #a5f8ce;
      }
    `}
`;

export const DeliveryInfoItemStyled = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 15px;
  > span {
    display: block;
    width: 8px;
    background-color: #63d4db;
  }

  > p {
    font-size: 12px;
    span {
      line-height: 16px;
    }
    span:nth-child(1) {
      font-weight: 700;
      display: block;
    }
  }
`;

export const DeliveryButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  .ant-btn-sm {
    border-radius: 40px;
    padding: 2px 10px;
    border-width: 1px;
    height: auto;
    > span {
      font-size: 12px;
      color: #13c4ce !important;
    }

    &:hover {
      cursor: text;
      background-color: transparent !important;
    }
  }
`;

export const NoticeWrapper = styled.div`
  padding: 16px;
  background-color: #f5f5f5;

  p {
    text-align: start;
    font-size: 12px;
    color: #3f4f5f;
    line-height: 16px;
  }
`;

export const TestArtical = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

export const NewBlockWrapper = styled.div`
  margin: 32px auto 36px auto;
  width: 768px;
`;

export const NewInfoStyled = styled.div<{ isLink?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
  span {
    color: #03afb9;
    margin-right: 8px;
    font-weight: 700;
  }

  a {
    pointer-events: ${({ isLink }) => !isLink && 'none'};
    text-decoration: ${({ isLink }) => isLink && 'underline'};
    color: #3f4f5f;
  }
`;

export const ProjectParticipalWrapper = styled.div`
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.white};
`;

export const ProjectParticipation = styled.div`
  background-color: #f7f9fc;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectParticipationText = styled.div`
  width: 768px;
  font-size: 14px;
  color: #3f4f5f;
  margin: 0 auto;
  margin-bottom: 24px;
  text-align: center;
`;

export const ProjectParticipationImage = styled.img`
  width: 480px;
  object-fit: cover;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  .ant-btn-sm {
    border-radius: 8px;
  }
`;
