import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0.8rem 1.1rem;
  transition: 0.3s;
  background-color: #76D20F;
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
