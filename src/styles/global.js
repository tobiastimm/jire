import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, #root, #root > div {
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: ${theme.palette.curiousBlue};
  }
`

export default GlobalStyle
