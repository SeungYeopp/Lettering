import { createGlobalStyle, css } from 'styled-components';

import BackGround from '/src/assets/background.png';

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 70%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  button:focus,
  a:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }
`;

export const GlobalStyle = createGlobalStyle`
${reset}

#root, body, html {
  /* width: 39rem; */
  max-width: 39rem;
  height: 100%;
  margin: 0 auto;
  /* overflow-y: auto; */
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

#root {
  background-image: url(${BackGround});
  background-color: ${({ theme }) => theme.colors.Background};
}
/* #root::-webkit-scrollbar {
    display: none;
} */
  
/* main {
	position : fixed;
	overflow : hidden;
} */
`;

export default GlobalStyle;
