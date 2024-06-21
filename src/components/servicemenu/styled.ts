import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 1020px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const OptionStyle = styled.div`
  width: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 6px 0;
  position: relative;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  p {
    width: 100%;
    text-align: center;
    padding: 10px 53px 10px 20px;
    font-size: 16px;
    font-weight: 700;
    color: #3f4f5f;
    margin: 0;
  }
  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    cursor: pointer;
    p {
      opacity: 0.7;
    }
  }

  &:nth-child(2) {
    margin: 6px 13px;
  }
`;

export { WrapperStyled, OptionStyle };
