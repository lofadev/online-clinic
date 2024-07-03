import { createGlobalStyle } from 'styled-components';
import {
  NotoSansJPBoldWoff,
  NotoSansJPBoldWoff2,
  NotoSansJPRegularWoff,
  NotoSansJPRegularWoff2,
  DamionWoff,
  DamionWoff2,
} from 'assets/fonts';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Damion';
    src:
      url(${DamionWoff2}) format('woff2'),
      url(${DamionWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Noto Sans JP';
    src:
      url(${NotoSansJPBoldWoff2}) format('woff2'),
      url(${NotoSansJPBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Noto Sans JP';
    src:
      url(${NotoSansJPRegularWoff2}) format('woff2'),
      url(${NotoSansJPRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    font-family: 'Noto Sans JP', sans-serif;
  }
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  input,
  select,
  textarea {
    background-color: transparent;
    outline: none;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: 0;
  }
  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-weight: 400;
    line-height: 1;
    font-size: 14px;
    position: relative;
    color: ${({ theme }) => theme.textPrimary};;
  }

  .ant-select-item-option-selected {
    color: ${({ theme }) => theme.white} !important;
    background-color: ${({ theme }) => theme.primary} !important;
  }

  .ant-modal .ant-modal-content {
    border-radius: 12px;
    min-width: 500px;
    padding: 48px;
    max-height: calc(100dvh - 60px);
  }
`;
