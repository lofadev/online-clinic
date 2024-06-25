import styled, { css } from 'styled-components';
// import FQABackground from '../../assets/pic_question.bg.svg';
import { DeliveryInfoType } from '.';

export const Wrapper = styled.div``;

export const ArticleBlockWrapper = styled.div<{ code: string }>`
  .gKWUBa {
    background-color: ${(p) => p.code};

    .gBZLOd {
      font-size: 16px;
    }
    .fmBils,
    .iHVJPm {
      margin-bottom: 0;
    }
  }
`;

export const CurrentIssuesBlock = styled.div`
  margin: 48px auto 32px auto;
  width: 860px;
  display: flex;
  background-color: #fff;
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

export const UserImageStyled = styled.img`
  width: 340px;
  height: 368px;
  object-fit: cover;
`;

export const FAQWrapper = styled.div`
  width: 740px;
  border-radius: 16px;
  background-color: #fff;
  padding: 32px 0;
  margin: 48px auto 0 auto;
  background-image: url('https://clinic.dmm.com/img/pc/top/pic_question.svg');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FQAFlexBlockStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

export const FQALeftBlockStyled = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const FQATopStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: -15px;
  span {
    font-size: 24px;
    font-weight: 700;
    color: #03afb9;
    margin-bottom: 10px;
  }
`;
export const FAQSubTitleStyled = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: -8px 0 0 0;
`;
export const FAQGroupStyled = styled.ul`
  padding: 0;
  margin: 16px 0 0 0;
  display: flex;
  gap: 8px;
  li {
    font-size: 12px;
    background-color: #f5f5f5;
    color: #3f4f5f;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: text;

    :last-child {
      background-color: transparent;
    }
  }
`;
export const FQARightBlockStyled = styled.div`
  position: relative;

  > svg {
    position: absolute;
    top: -26px;
    left: 76px;
  }
`;
export const FQALightIconStyled = styled.img`
  position: absolute;
  top: -28px;
  left: 72px;
`;

export const DeliveryWrapper = styled.div`
  width: 860px;
  margin: 32px auto 0 auto;
`;

export const DeliveryTopStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
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
  background-color: #fff;
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
`;

export const DeliveryInfoBlockStyled = styled.div`
  padding: 32px 0 20px 0;
  display: flex;
`;

export const DeliveryLeftStyled = styled.div<DeliveryInfoType>`
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
    p.type === 2 &&
    css`
      > div {
        > span {
          background-color: #a5f8ce;
        }
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
    span:nth-child(1) {
      font-weight: 700;
      display: block;
    }
  }
`;

export const DeliveryButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  .fvWrem.ant-btn-sm {
    border-radius: 40px;
    padding: 2px 10px;
    border-width: 1px;
    height: auto;
    > span {
      font-size: 12px;
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
  }
`;

export const TestArtical = styled.div`
  background-color: #fff;
`;

export const NewBlockWrapper = styled.div`
  margin: 32px auto 36px auto;
  width: 768px;
`;

export const NewInfoStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  span {
    color: #03afb9;
    margin-right: 8px;
    font-weight: 700;
  }

  a {
    color: #3f4f5f;
  }
`;

export const ProjectParticipalWrapper = styled.div`
  padding-bottom: 40px;
  background-color: #fff;
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

  .fvWrem.ant-btn-sm {
    border-radius: 8px;
  }
`;
