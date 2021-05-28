import React from 'react'
import styled from 'styled-components'

const Formy = styled.form`
  display: flex;
  min-width: 100%;
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
