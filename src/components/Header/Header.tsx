import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  background-color: #ed145b;
  color: white;
  justify-content: center;
  padding: 20px;
  text-align: center;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer className='header'>
      <h1>Lista de Tarefas</h1>
    </HeaderContainer>
  )
}

export default Header
