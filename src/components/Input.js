import React from 'react'
import styled from 'styled-components'

const Text = styled.input`
  padding: 0.8rem 1.1rem;
  outline: none;
  border: none;
  min-width: 78%;
  border-radius: 10px 0 0 10px;
`

const Label = styled.label`
  padding: 1.3rem 0.5rem;
`

const Input = ({handleChange, input}) => {
  return (
    <>
      <Label htmlFor="text">Adicione uma nova tarefa:</Label>
    <Text type="text" id="text" value={input} onChange={handleChange}>
    </Text>
    </>
  )
}

export default Input
