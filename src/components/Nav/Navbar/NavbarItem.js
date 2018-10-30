import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../../../styles/theme'

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 1.6rem;
  line-height: 1.6rem;
  cursor: pointer;
  &:hover {
    transition: background 0.2s ease-out;
    background: ${theme.colors.congressBlue};
  }
  &.active {
    background: ${theme.colors.congressBlue};
  }
`

const NavbarItem = ({ icon, active }) => {
  const classes = classNames({ active })

  return (
    <Item className={classes}>
      <FontAwesomeIcon icon={icon} />
    </Item>
  )
}

NavbarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

NavbarItem.defaultProps = {
  active: false,
}

export default NavbarItem
