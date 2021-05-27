import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0.8rem 1.1rem;
  transition: 0.3s;
  background-color: #f58634;
  color: #f2f2f2;
  &:hover{
    background-color: #B51324;
  }
`

const Add = ({handleDelete}) => {
  return (
    <Button
    type="button"
    onClick={handleDelete}>
    Excluir
  </Button>
  )
}

export default Add
