import React from 'react'
import styled from 'styled-components'

const Text = styled.input`
  padding: 0.5rem 0.9rem;
  outline: none;
  border: none;
  min-width: 78%;
  border-radius: 3px 0 0 3px;
  font-family: Rune;
  font-size: 0.9rem;
  color: #687980;
  transition: 0.4s;
  &:hover{
    box-shadow: 0px 0px 2px 1px #81b214 inset;
  };
  &:focus{
    box-shadow: 0px 0px 2px 2px #81b214 inset;
  }

`

const Input = ({handleChange, input}) => {
  return (
    <>
    <Text type="text" value={input} placeholder="Adicione uma nova tarefa" onChange={handleChange}>
    </Text>
    </>
  )
}

export default Input
