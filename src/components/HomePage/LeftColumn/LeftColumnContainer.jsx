import React, { useState } from 'react'
import styled from 'styled-components'
import MarketOverview from './MarketOverview/MarketOverview.jsx'
import HomeMyStocksContainer from './HomeMyStocks/HomeMyStocksContainer.jsx'
import HomeMyStocksInfo from './HomeMyStocks/HomeMyStocksMain.jsx'



const LeftColumnContainer = () => {

  const Container = styled.div`
        display: flex;
        flex-direction: column;
        height: 500px;
        width: calc(67% - 1rem);
        /* background-color: green; */
    `;
  return (
    <Container>
      <MarketOverview />
      <HomeMyStocksContainer />
    </Container>
  );
}

export default LeftColumnContainer;