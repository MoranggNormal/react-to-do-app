import React from 'react'
import styled from 'styled-components'
import { BsPlus } from "react-icons/bs";



const Button = styled.button`
  border: 0;
  border-radius: 0 3px 3px 0;
  outline: 0;
  cursor: pointer;
  padding: 0.1rem 1.3rem;
  transition: 0.3s;
  background-color: #81b214;
  color: #d8e3e7;
  display: grid;
  place-items: center;
  font-size: 1.8rem;
  &:hover{
    background-color: #5CA30D;
  }
`

const Add = ({handleClick}) => {
  return (
    <Button type="submit" onClick={handleClick}><BsPlus /></Button>
  )
}

export default Add
