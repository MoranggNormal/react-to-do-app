import React from 'react'
import styled from 'styled-components'

const Text = styled.input`
  padding: 0.8rem 1.1rem;
  outline: none;
  border: none;
  min-width: 78%;
  border-radius: 3px 0 0 3px;
`

const Input = ({handleChange, input}) => {
  return (
    <>
    <Text type="text" value={input} placeholder="Adicione uma nova tarefa..." onChange={handleChange}>
    </Text>
    </>
  )
}

export default Input
