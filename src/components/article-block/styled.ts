import styled from 'styled-components';

export const WrapperStyled = styled.div`
  padding: 48px 0;
`;

export const WrapperTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleHeadStyled = styled.h2<{ isBackgroundTitle: boolean; gender?: GenderType }>`
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 1.6px;
  padding: 0 20px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
  background-color: ${({ isBackgroundTitle, gender, theme }) =>
    isBackgroundTitle ? (gender === 'male' ? theme.secondary : theme.tertiary) : 'transparent'};
  color: ${({ isBackgroundTitle, theme }) => (isBackgroundTitle ? theme.white : 'inherit')};
`;

export const SubTitleStyled = styled(TitleHeadStyled)`
  margin-bottom: 12px;
`;

export const DescStyled = styled.h3<{ isItalicDesc: boolean; isBackgroundTitle: boolean; gender?: GenderType }>`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 1.6px;
  text-align: center;
  color: ${({ theme, gender, isBackgroundTitle }) =>
    isBackgroundTitle ? theme.white : gender ? (gender === 'male' ? theme.secondary : theme.tertiary) : theme.primary};
  font-weight: ${({ isItalicDesc, isBackgroundTitle }) => (isItalicDesc || isBackgroundTitle ? '400' : '700')};
  font-style: ${({ isItalicDesc, isBackgroundTitle }) => (isItalicDesc || isBackgroundTitle ? 'italic' : 'normal')};
  font-family: ${({ isItalicDesc, isBackgroundTitle }) => (isItalicDesc || isBackgroundTitle ? 'Damion' : 'inherit')};
`;
