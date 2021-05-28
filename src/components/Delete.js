import React from 'react'
import styled from 'styled-components'
import { BsTrash } from "react-icons/bs";


const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.3s;
  background-color: #f58634;
  color: #feffde;
  border-radius: 0.2rem;
  &:hover{
    background-color: #B51324;
  }
`

const Add = ({handleDelete}) => {
  return (
    <Button
    type="button"
    onClick={handleDelete}>
    <BsTrash />
  </Button>
  )
}

export default Add
