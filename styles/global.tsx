import { createGlobalStyle } from 'styled-components'

import { Colors } from '~/styles/styles'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Colors.bgMain};
    color: ${Colors.labelMain};
    font-size: 13px;
  
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  h1, h2, h3 {
    margin: 0;
  }

  button {
    white-space: nowrap;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    user-drag: none;
    cursor: default;
  }

  p {
    margin: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  
  :root {
    color-scheme: dark;
  }
  
`
