import { FC } from 'react';

import { Shopping } from 'assets/icons/icon-header';
import { ButtonGroup, ButtonStyle, ContainerPage, NavigateGroup, PreHeaderStyle } from './style';

const PreHeader: FC = () => {
  return (
    <PreHeaderStyle>
      <ContainerPage>
        <NavigateGroup>Left</NavigateGroup>

        <ButtonGroup>
          <ButtonStyle color="primary" size="small">
            <Shopping />
            ショップ
          </ButtonStyle>
        </ButtonGroup>
      </ContainerPage>
    </PreHeaderStyle>
  );
};

export default PreHeader;
