import styled from 'styled-components';
import { Switch } from 'antd';

export const TopHeaderStyle = styled.div`
  margin-inline: 5px;
  border-bottom: 1px solid #e1e3e6;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const LeftTopHeader = styled.div`
  height: 50px;
  display: flex;
`;

export const ImageIcon = styled.img`
  height: 50px;
  border-right: 1px solid #e1e3e6;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageLogo = styled.img`
  height: 28px;
  margin-block: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const RightTopHeader = styled.div`
  display: flex;
  text-align: center;
`;

export const SwitchChangeLanguage = styled.div`
  height: 50px;
  display: flex;
  vertical-align: middle;
`;
export const SwitchStyled = styled(Switch)`
  margin-block: auto;

  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.primary};
  }

  &.ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    background-color: ${({ theme }) => theme.primary};
  }
`;
