import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import './styles/icons'
import { Navbar, TitleBar } from './components/Nav'
import { Menu } from './components/Menu'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 3.8rem 4.2rem 1fr;
  grid-template-areas:
    'titlebar titlebar'
    'nav nav'
    'menu content';
`

const Content = styled.main`
  color: ${theme.palette.birch};
  background: ${theme.colors.mercury};
  grid-area: content;
`

const App = props => {
  return (
    <Layout>
      <GlobalStyle />
      <TitleBar />
      <Navbar />
      <Menu />
      <Content />
    </Layout>
  )
}

export default App
