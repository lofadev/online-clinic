import styled from 'styled-components';
import FAQBackground from 'assets/svgs/toppage/pic_question_bg.svg';

export const FAQWrapper = styled.div`
  width: 740px;
  border-radius: 16px;
  background-color: #fff;
  padding: 32px 0;
  margin: 48px auto 0 auto;
  background-image: url(${FAQBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FAQFlexBlockStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  margin-bottom: 24px;
`;

export const FAQLeftBlockStyled = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const FAQTopStyled = styled.div`
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
export const FAQRightBlockStyled = styled.div`
  position: relative;
  > svg {
    position: absolute;
    top: -26px;
    left: 76px;
  }
`;

export const FAQLightIconStyled = styled.img`
  position: absolute;
  top: -28px;
  left: 72px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  .ant-btn-sm {
    border-radius: 8px;
  }
`;
