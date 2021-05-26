import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
  min-width: 100%;
  min-height: 60px;
  display: flex;
`
const Title = styled.span`
  min-width: 30%;
  min-height: 60px;
  display: grid;
  place-items: center;
`
const Input = styled.div`
  min-width: 70%;
  min-height: 60px;
`

const Header = ({children}) => {
  return (
  <Head>
  <Title>
    <h1>Teste</h1>
  </Title>
  <Input>
    {children}
  </Input>
  </Head>
  )
}
export default Header
