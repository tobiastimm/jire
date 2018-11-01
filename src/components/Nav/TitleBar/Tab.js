import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../styles/theme'
import { ripple } from '../../../styles/animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TabItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1.1rem;
  color: ${theme.colors.scorpion};
  border-left: 1px solid ${theme.colors.mineShaft2};
  border-right: 1px solid ${theme.colors.mineShaft2};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.alabaster};
  }
  ${ripple(theme.colors.mineShaft2, theme.colors.scorpion)};
  transition-property: background, color;
  ${props =>
    props.active &&
    `
      color: ${theme.colors.alabaster};
      background:${theme.colors.mineShaft2};
    `};
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 2.5rem;
  margin-left: 0.5rem;
  &:hover {
    color: ${theme.colors.burntUmber};
    transition: color 0.4s ease-out;
  }
`

const Tab = ({ children, onRemove, active, onClick }) => {
  return (
    <TabItem active={active} onClick={onClick}>
      {children}
      <IconWrapper onClick={onRemove}>
        <FontAwesomeIcon icon="times" />
      </IconWrapper>
    </TabItem>
  )
}

Tab.propTypes = {
  children: PropTypes.node,
  onRemove: PropTypes.func,
}

export default Tab
