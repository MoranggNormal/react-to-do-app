import React from 'react'
import styled from 'styled-components'

const Formy = styled.form`
  display: inline-block;
  padding: 0.7rem;
`

const Form = ({handleSubmit, children}) => {
  return (
    <>

    <Formy onSubmit={handleSubmit}>
    {children}
    </Formy>
    </>
  )
}

export default Form
