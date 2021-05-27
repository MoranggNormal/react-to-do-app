import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  min-width: 22%;
  border: 0;
  border-radius: 0 3px 3px 0;
  outline: 0;
  cursor: pointer;
  padding: 0.8rem 1.1rem;
  transition: 0.3s;
  background-color: #81b214;
  color: #f2f2f2;
  &:hover{
    background-color: #5CA30D;
  }
`

const Add = ({handleClick}) => {
  return (
    <Button type="submit" onClick={handleClick}>Enviar</Button>
  )
}

export default Add
