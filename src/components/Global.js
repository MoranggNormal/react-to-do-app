import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 40vw;
  height: 70vh;
  min-height: 70vh;
  max-height: 70vh;
  background-color: #749BE7;
  border-radius: 0.3rem 0 0 0 ;
  border: 1px solid #749BE7;
`

const Global = ({children}) => {
  return (
    <Div>
    {children}
    </Div>
  )
}

export default Global
