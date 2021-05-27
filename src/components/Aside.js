import React from 'react'
import styled from 'styled-components'

const Side = styled.aside`
  min-width: 20%;
  min-height: 100%;
  display: block;
  background-color: #f4a9a8;
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
