import React from 'react'
import styled from 'styled-components'

const Content = styled.section`
  height: calc(81% - 0.1rem);
  background-color: #f9f9f9;
`

const Main = ({children}) => {
  return (
    <Content>
    {children}
    </Content>
  )
}

export default Main
