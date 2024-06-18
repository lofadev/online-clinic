import { Button } from 'antd';
import styled from 'styled-components';
import { RadiusType } from './Button';

const ButtonStyled = styled(Button)<{ rounded?: RadiusType }>`
  position: relative;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => (props.rounded === 'sm' ? '4px' : props.rounded === 'lg' ? '12px' : '8px')};

  &.ant-btn {
    height: 60px;
  }

  &.ant-btn-sm {
    height: 40px;
    font-size: 14px;
  }

  &.ant-btn-lg {
    height: 90px;
    font-size: 24px;
  }

  &.ant-btn-primary {
    background-color: ${(props) => props.theme[props.color || 'primary']};
    transition: all 0.2s linear;

    &:hover:not(:disabled) {
      opacity: 0.8;
      background-color: ${(props) => props.theme[props.color || 'primary']};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.lightGray};
      border-color: ${({ theme }) => theme.lightGray};
    }
  }

  &.ant-btn-default {
    color: ${(props) => props.theme[props.color || 'primary']};
    border: 2px solid currentColor;
    transition: all 0.2s linear;

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.white} !important;
      background-color: ${(props) => props.theme[props.color || 'primary']};
      border-color: ${(props) => props.theme[props.color || 'primary']};
    }
  }
`;

export { ButtonStyled };
