import React from 'react'
import styled from 'styled-components'

const Alerta = styled.h3`
    padding: 0.5rem 1rem;
    background-color: #f4a9a8;
    border-radius: 0.2rem;
    transition: all 0.4s;
      color: #393e46;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -5%);
    z-index: 100;
`

const Alert = () => {
  return (
    <Alerta>
    Ei, tente algo mais simples!
    </Alerta>
  )
}

export default Alert
