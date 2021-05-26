import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
  min-width: 100%;
  min-height: 41px;
  max-height: 41px;
  display: flex;
`
const Title = styled.span`
  min-width: 20%;
  min-height: 41px;
`
const Input = styled.div`
  min-width: 80%;
  min-height: 41px;
  max-width: 80%;
  max-height: 41px;
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