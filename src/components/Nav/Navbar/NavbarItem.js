import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../../../styles/theme'
import { ripple } from '../../../styles/animations'

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 1.6rem;
  line-height: 1.6rem;
  cursor: pointer;
  ${ripple(theme.colors.congressBlue, theme.colors.indigo)};
  &.active {
    background: ${theme.colors.congressBlue};
  }
  ${props => props.right && 'grid-column: 7;'};
`

const NavbarItem = ({ icon, active, right }) => {
  const classes = classNames({ active })

  return (
    <Item className={classes} right={right}>
      <FontAwesomeIcon icon={icon} />
    </Item>
  )
}

NavbarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  right: PropTypes.bool,
}

NavbarItem.defaultProps = {
  active: false,
  right: false,
}

export default NavbarItem
