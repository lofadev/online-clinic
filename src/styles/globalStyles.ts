import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    font-family: 'Noto Sans', sans-serif !important;
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
    color: ${({ theme }) => theme.textPrimary};;
  }

  .ant-select-item-option-selected {
    color: ${({ theme }) => theme.white} !important;
    background-color: ${({ theme }) => theme.primary} !important;
  }
`;
