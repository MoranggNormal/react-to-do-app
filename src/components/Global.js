import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 35vw;
  height: 70vh;
  min-height: 70vh;
  max-height: 70vh;
  border-radius: 0.3rem 0 0 0 ;
`

const Global = ({children}) => {
  return (
    <Div>
    {children}
    </Div>
  )
}

export default Global
