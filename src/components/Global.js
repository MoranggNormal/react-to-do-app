import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-width: calc(45vw - 3px);
  min-height: 70vh;
  background-color: pink;
`

const Global = ({children}) => {
  return (
    <Div>
    {children}
    </Div>
  )
}

export default Global
