import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  align-items: center;
`

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainContainer className='main-content'>
      {children}
    </MainContainer>
  )
}

export default MainContent
