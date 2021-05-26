import React from 'react'
import styled from 'styled-components'

const Side = styled.aside`
  max-width: calc(22% + 3px);
  min-height: 100%;
  display: block;
  background-color: #749BE7;
  padding: 0.7rem 0.4rem;
`

const Nav = styled.nav`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

const Lista = styled.ul`
  list-style: none;
`

const Item = styled.li`
    padding: 0.4rem;
`

const Aside = ({children}) => {
  return (
    <Side>
      <Nav>
        <Lista>
        <Item>yeyeye</Item>
        <Item>yeyeye</Item>
        <Item>yeyeye</Item>
        <Item>yeyee</Item>
        </Lista>
      </Nav>
    </Side>
  )
}

export default Aside
