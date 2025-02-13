import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  background-color: #ed145b;
  color: white;
  justify-content: center;
  padding: 20px;
  text-align: center;
`

const Navbar = styled.nav`
  display: flex;
  gap: 15px;
`

const StyledLink = styled(Link)`
  color: #ccc;
  font-weight: 700;
  text-decoration: none;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <StyledLink to='/' >Home</StyledLink>
        <StyledLink to='/completed' >Tarefas Concluídas</StyledLink>
        <StyledLink to='/pending' >Tarefas Pendentes</StyledLink>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
