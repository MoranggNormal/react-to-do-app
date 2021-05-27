import React from 'react'
import styled from 'styled-components'
import profile from './images/profile.jpg'

const Head = styled.header`
  min-width: 100%;
  min-height: 60px;
  display: flex;
`
const Title = styled.span`
  min-width: 20%;
  min-height: 60px;
  display: grid;
  place-items: center;
  background-color: #f4a9a8;
`
const Input = styled.div`
  min-width: 80%;
  min-height: 60px;
  max-height: 60px;
  background-color:  #fbc6a4;
`

const style = {
      width: `${52}px`,
      height: `${52}px`,
      borderRadius: `${50}%`,
      border: `${1}px solid #ce${97}b${0}`
    };

const Header = ({children}) => {
  return (
  <Head>
  <Title>
    <img src={profile} style={style} alt="profile" />
  </Title>
  <Input>
    {children}
  </Input>
  </Head>
  )
}
export default Header
