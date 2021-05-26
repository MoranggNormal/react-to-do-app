import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  width: 25%;
  min-height: 100%;
  background-color: yellow;
  display: block;
`

const Aside = ({children}) => {
  return (
    <Header>
    <p>teste</p>
    {children}
    </Header>
  )
}

export default Aside
