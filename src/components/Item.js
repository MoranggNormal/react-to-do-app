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

`

const Item = ({children}) => {
  return (
    <ListItem>
    <H5>
    {children}
  </H5>
    </ListItem>
  )
}

export default Item
