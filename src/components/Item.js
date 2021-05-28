import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  display: flex;
  min-width: 100%;
  max-width: 100%;
  padding: 0.4rem;
  margin-top: 0.5rem;
  background-color: #fbc6a4;
  overflow: hidden;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: 0.2s;
  &:hover{
    box-shadow: 0px 0px 5px 1px #fbc6a4 inset;
    background-color: #f4a9a8;
  };
`

const H5 = styled.h5`
  font-family: Rune;
  color: #393e46;
  min-width: 80%;
  max-width: 80%;
  display: flex;
  align-items: center;
`

const Item = ({item, children}) => {
  return (
    <ListItem>
    <H5>
      {item.todo}
  </H5>
  <span>
    {children}
  </span>
    </ListItem>
  )
}

export default Item
