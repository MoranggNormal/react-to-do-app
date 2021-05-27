import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 35vw;
  height: 70vh;
  min-height: 70vh;
  max-height: 70vh;
  background-color: #f4a9a8;
  border-radius: 0.3rem 0 0 0 ;
  border: 2px solid #f4a9a8;
`

const Global = ({children}) => {
  return (
    <Div>
    {children}
    </Div>
  )
}

export default Global
