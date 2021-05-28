import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";


const Side = styled.aside`
  min-width: 20%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f4a9a8;
  padding: 0.7rem 0.4rem;
`

const Nav = styled.nav`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
`

const Lista = styled.ul`
  list-style: none;

`

const Item = styled.li`
    font-size: 1.7rem;
    padding: 0.7rem;
    &:hover{
    transform: scale(1.1);
    transform-origin: center center;
}
`

const Link = styled.a`
    color: #f7f3e9;
    padding: 0.7rem 0.4em 0.4rem 0.7rem;
    border: 1px solid #ce97b0;
    border-radius: 50%;
    transition: 0.3s;
    &:hover{
    color: #f4a9a8;
    background-color: #f7f3e9;
    }

`

const Aside = ({children}) => {
  return (
    <Side>
      <Nav>
        <Lista>
        <Item>
          <Link href="https://github.com/MoranggNormal" target="_blank"><FaGithub /></Link>
        </Item>
        <Item>
          <Link href="https://www.linkedin.com/in/euller-peixoto/" target="_blank"><FaLinkedinIn /></Link>
        </Item>
        <Item>
          <Link href="https://t.me/EullerPeixoto" target="_blank"><FaTelegramPlane /></Link>
        </Item>
        <Item>
          <Link href="https://wa.me/qr/QY6YZNYNPO4ZN1" target="_blank"><FaWhatsapp /></Link>
        </Item>
        <Item>
          <Link href="https://www.facebook.com/euller.peixoto.18/?id=199933959494115" target="_blank"><FaFacebookF /></Link>
        </Item>
        </Lista>
      </Nav>
    </Side>
  )
}

export default Aside
