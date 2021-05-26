import React from 'react'
import styled from 'styled-components'

const Text = styled.input`
  padding: 0.8rem 1.1rem;
  outline: none;
  border: none;
`

const Input = ({handleChange, input}) => {
  return (
    <Text type="text" value={input} onChange={handleChange}>
    </Text>
  )
}

export default Input
