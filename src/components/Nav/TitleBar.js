import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../styles/theme'

const Container = styled.nav`
  display: grid;
  background: ${theme.colors.mineShaft};
  align-items: center;
  grid-area: titlebar;
`

const TitleBar = () => {
  return <Container />
}

export default TitleBar
