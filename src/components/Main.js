import React from 'react'
import styled from 'styled-components'


const Content = styled.main`
  min-width: 80%;
  max-width: 80%;
  overflow-y: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Main = ({children}) => {
  return (
    <Content>
      {children}
    </Content>
  )
}

export default Main
