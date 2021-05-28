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
    padding: 0.2rem 0.6rem;
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
          <Link href="#"><FaGithub /></Link>
        </Item>
        <Item>
          <Link href="#"><FaLinkedinIn /></Link>
        </Item>
        <Item>
          <Link href="#"><FaTelegramPlane /></Link>
        </Item>
        <Item>
          <Link href="#"><FaWhatsapp /></Link>
        </Item>
        <Item>
          <Link href="#"><FaFacebookF /></Link>
        </Item>
        </Lista>
      </Nav>
    </Side>
  )
}

export default Aside
