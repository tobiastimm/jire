import React, { useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import theme from '../../../styles/theme'
import { ripple } from '../../../styles/animations'
import TabList from './TabList'

const Container = styled.header`
  display: grid;
  background: ${theme.colors.mineShaft};
  align-items: stretch;
  grid-area: titlebar;
  grid-template-columns: 8rem 4rem 1fr;
  grid-template-areas: 'controls add tabs';
`

const Add = styled.div`
  grid-area: add;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 1.6rem;
  line-height: 1.6rem;
  cursor: pointer;
  color: ${theme.colors.scorpion};
  &:hover {
    color: ${theme.colors.alabaster};
    transition-property: background, color;
  }
  ${ripple(theme.colors.mineShaft, theme.colors.scorpion)};
`

const TitleBar = () => {
  const [tabs, setTabs] = useState([])

  const addTab = () => {
    const newTabs = [...tabs]
    newTabs.push({
      id: uuid.v4(),
      title: `JIRE-${Math.floor(Math.random() * 200000) + 1}`,
    })
    setTabs(newTabs)
  }

  const removeTab = tabToRemove => {
    const newTabs = tabs.filter(tab => tab.id !== tabToRemove.id)
    setTabs(newTabs)
  }

  return (
    <Container>
      <Add onClick={addTab}>
        <FontAwesomeIcon icon="plus" />
      </Add>
      <TabList tabs={tabs} onRemoveTab={removeTab} />
    </Container>
  )
}

export default TitleBar
