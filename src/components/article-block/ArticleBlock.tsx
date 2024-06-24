import { PropsWithChildren } from 'react';

import Text from 'components/text';
import { ITextProps, THEME_TYPE } from 'models';
import { TitleStyled, WrapperStyled, WrapperTitleStyled } from './styled';

export interface ITitleStyleProps {
  background?: THEME_TYPE;
  color?: THEME_TYPE;
}

interface IProps extends PropsWithChildren {
  title: string;
  subTitle?: string;
  desc: string;
  backgroundWrapper?: THEME_TYPE;
  titleStyles?: ITitleStyleProps;
  descStyles?: ITextProps;
}

const ArticleBlock: React.FC<IProps> = ({
  title,
  subTitle,
  desc,
  backgroundWrapper = 'transparent',
  titleStyles,
  descStyles = { color: 'primary', fontSize: 'SIZE_16', fontWeight: 'FW_700' },
  children,
}) => {
  return (
    <WrapperStyled background={backgroundWrapper}>
      <WrapperTitleStyled>
        <TitleStyled className="article-title" level={2} {...titleStyles}>
          {title}
        </TitleStyled>
        {!!subTitle && (
          <TitleStyled className="article-subtitle" level={3} {...titleStyles}>
            {subTitle}
          </TitleStyled>
        )}
        <Text.Primary {...descStyles}>{desc}</Text.Primary>
      </WrapperTitleStyled>
      {children}
    </WrapperStyled>
  );
};

export default ArticleBlock;
