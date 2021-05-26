import React from 'react'
import styled from 'styled-components'

const Formy = styled.form`
  display: flex;
  justify-content: space-around;
`

const Form = ({handleSubmit, children}) => {
  return (
    <Formy onSubmit={handleSubmit}>
    {children}
    </Formy>
  )
}

export default Form
