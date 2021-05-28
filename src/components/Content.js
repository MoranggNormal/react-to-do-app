import React from 'react'
import styled from 'styled-components'

const Content = styled.section`
display: flex;
flex-flow: row wrap;
  height: calc(86% - 0.1rem);
  max-height: calc(86% - 0.1rem);
  background-color: #f9f9f9;
  overflow: auto;
`

const Main = ({children}) => {
  return (
    <Content>
    {children}
    </Content>
  )
}

export default Main
