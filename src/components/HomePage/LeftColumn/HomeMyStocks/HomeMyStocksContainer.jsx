import React, { useState } from 'react'
import styled from 'styled-components'
import HomeMyStockHeader from './HomeMyStocksHeader.jsx'
import HomeMyStockMain from './HomeMyStocksMain.jsx'



const HomeMyStocksContainer = () => {

  const Container = styled.div`    
    background-color: #393945;
    margin-bottom : 2rem;
    border-radius: 20px;
  `;

  return (
    <Container>
      <HomeMyStockHeader />
      <HomeMyStockMain />
    </Container>
  )
}

export default HomeMyStocksContainer