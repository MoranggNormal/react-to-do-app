import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  min-width: 100%;
  max-width: 100%;
  padding: 0.4rem;
  margin-top: 0.5rem;
  background-color: #fbc6a4;
  overflow: hidden;
  font-size: 0.8rem;
  letter-spacing: 1px
`

const Item = ({children}) => {
  return (
    <ListItem>
    <h5>
    {children}
  </h5>
    </ListItem>
  )
}

export default Item
