import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 40vw;
  min-height: 70vh;
  background-color: #749BE7;
  border-radius: 0.4rem;
`

const Global = ({children}) => {
  return (
    <Div>
    {children}
    </Div>
  )
}

export default Global
