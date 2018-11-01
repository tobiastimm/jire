import React, { useState } from 'react'
import styled from 'styled-components'
import Tab from './Tab'
import theme from '../../../styles/theme'

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(7.6rem, 10rem);
  grid-template-columns: repeat(auto-fill, minmax(7.6rem, 10rem));
  margin: 0;
  padding: 0;
  color: ${theme.colors.alabaster};
  align-items: stretch;
  grid-area: tabs;
`

const TabList = ({ tabs, onRemoveTab }) => {
  const [activeTab, setActiveTab] = useState(0)

  const setActive = tab => {
    setActiveTab(tab.id)
  }

  return (
    <List>
      {tabs.map(tab => (
        <Tab
          onClick={() => setActive(tab)}
          active={tab.id === activeTab}
          key={tab.id}
          onRemove={() => onRemoveTab(tab)}
        >
          {tab.title}
        </Tab>
      ))}
    </List>
  )
}

export default TabList
