import React from 'react'
import styled from 'styled-components'

const Content = styled.section`
  background-color: purple;
`

const Main = ({children}) => {
  return (
    <Content>
    {children}
    </Content>
  )
}

export default Main
