import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import NavbarItem from './Navbar/NavbarItem'

const Container = styled.nav`
  background: ${theme.colors.mineShaft2};
  justify-content: flex-start;
  align-items: center;
  grid-area: nav;
`

const NavItems = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  list-style-type: none;
  align-items: stretch;
  grid-template-columns: repeat(5, 4rem) 1fr repeat(5, 4rem);
  color: ${theme.colors.alabaster};
  height: 100%;
  width: 100%;
`

const Navbar = () => {
  return (
    <Container>
      <NavItems>
        <NavbarItem icon="bars" />
        <NavbarItem icon="home" />
        <NavbarItem icon="columns" />
        <NavbarItem icon="project-diagram" />
        <NavbarItem icon="ticket-alt" />
        <NavbarItem right icon="search" />
        <NavbarItem icon="keyboard" />
        <NavbarItem icon="smile" />
        <NavbarItem icon="question" />
        <NavbarItem icon="sign-in-alt" />
      </NavItems>
    </Container>
  )
}

export default Navbar
