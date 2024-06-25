import Title from 'components/title';
import { THEME_TYPE } from 'models';
import styled from 'styled-components';
import { ITitleStyleProps } from './ArticleBlock';

export const WrapperStyled = styled.div<{ background: THEME_TYPE }>`
  padding: 48px 0;
  background-color: ${({ theme, background }) => theme[background]};

  .article-title,
  .article-subtitle {
    padding: 0 20px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 8px;
  }

  .ant-typography {
    margin-top: 0 !important;
  }
`;

export const WrapperTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleStyled = styled(Title.Primary)<ITitleStyleProps>`
  background-color: ${({ theme, background }) => theme[background || 'transparent']};
`;
