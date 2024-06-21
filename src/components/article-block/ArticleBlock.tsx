import { PropsWithChildren } from 'react';

import { DescStyled, SubTitleStyled, TitleHeadStyled, WrapperStyled, WrapperTitleStyled } from './styled';

interface IProps extends PropsWithChildren {
  title: string;
  subTitle?: string;
  desc: string;
  gender?: GenderType;
  isItalicDesc: boolean;
  isBackgroundTitle: boolean;
}

const ArticleBlock: React.FC<IProps> = ({
  title,
  subTitle,
  isItalicDesc = false,
  desc,
  gender,
  isBackgroundTitle = false,
  children,
}) => (
  <WrapperStyled>
    <WrapperTitleStyled>
      <TitleHeadStyled isBackgroundTitle={isBackgroundTitle} gender={gender}>
        {title}
      </TitleHeadStyled>
      <SubTitleStyled isBackgroundTitle={isBackgroundTitle} gender={gender}>
        {subTitle}
      </SubTitleStyled>
      <DescStyled isBackgroundTitle={isBackgroundTitle} isItalicDesc={isItalicDesc} gender={gender}>
        {desc}
      </DescStyled>
    </WrapperTitleStyled>
    {children}
  </WrapperStyled>
);

export default ArticleBlock;
