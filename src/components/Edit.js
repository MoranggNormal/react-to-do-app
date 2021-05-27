import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0.8rem 1.1rem;
  transition: 0.3s;
  background-color: #ffcc29;
  color: #F1f1ee;
  &:hover{
    background-color: #B3AA0E;
  }
`
const Add = ({handleEdit}) => {
  return (
    <Button
      type="button" onClick={handleEdit}>
      Editar
    </Button>
  )
}

export default Add
