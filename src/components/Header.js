import React from 'react'
import styled from 'styled-components'
import profile from './images/profile.jpg'

const Head = styled.header`
  min-width: 100%;
  min-height: 60px;
  display: flex;
`
const Title = styled.h1`
  min-width: 18%;
  min-height: 60px;
  display: grid;
  place-items: center;
  background-color: #f4a9a8;
  border-radius: 0.3rem 0 0 0;
  }

`
const Input = styled.div`
  min-width: 82%;
  min-height: 60px;
  max-height: 60px;
  background-color:  #f4a9a8;
`

const style = {
      width: `${44}px`,
      height: `${44}px`,
      borderRadius: `${50}%`,
      border: `${1}px solid #ce${97}b${0}`,
      marginLeft: `${0.8}rem`
    };

const Header = ({children}) => {
  return (
  <Head>
  <Title>
    <a href="https://github.com/MoranggNormal" target="_blank">
      <img src={profile} style={style} alt="profile" />
    </a>
  </Title>
  <Input>
    {children}
  </Input>
  </Head>
  )
}
export default Header
