import Button from 'components/button/Button';
import styled from 'styled-components';

const ArrowButtonStyled = styled(Button)`
  min-width: 240px;
  flex-direction: row-reverse;

  .ant-btn-icon {
    position: absolute;
    right: 22px;
    width: 6px;
    height: 10px;

    svg {
      fill: currentColor;
    }
  }

  &.ant-btn-lg {
    .ant-btn-icon {
      width: 10px;
      height: 18px;
    }
  }
`;

export { ArrowButtonStyled };
