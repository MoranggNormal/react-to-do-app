import React from 'react'
import styled from 'styled-components'
import { BsPencil } from "react-icons/bs";


const Button = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.3s;
  background-color: #fdb827;
  color: #feffde;
  border-radius: 0.2rem;
  &:hover{
    background-color: #fdca40;
  }
`
const Add = ({handleEdit}) => {
  return (
    <Button
      type="button" onClick={handleEdit}>
      <BsPencil />
    </Button>
  )
}

export default Add
