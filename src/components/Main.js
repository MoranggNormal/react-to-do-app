import React from 'react'
import styled from 'styled-components'


const Content = styled.main`
  min-width: 80%;
  max-width: 80%;
  overflow-x: hidden;
  display: flex;
  justify-content: space-around;
  align-items: stretch;

`

const Main = ({children}) => {
  return (
    <Content>
      {children}
    </Content>
  )
}

export default Main
