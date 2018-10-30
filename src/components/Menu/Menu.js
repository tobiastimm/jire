import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const Aside = styled.aside`
  grid-area: menu;
  background: ${theme.colors.mineShaft};
  height: 100%;
  color: ${theme.colors.alabaster};
  font-size: 1.6rem;
`

const Menu = () => {
  return (
    <Aside>
      <p>Sidebar</p>
    </Aside>
  )
}

export default Menu
