import React, { useState } from 'react'
import styled from 'styled-components'
import MarketPriceTable from './MarketPriceTable.jsx'

const MarketOverview = () => {
  const Container = styled.div`
      padding : 2rem 3rem;
      border: 1px solid yellow;
      border-radius: 20px 20px 0px 0px;
  `;

  const Title = styled.h1`
      font-size: 24px;
      font-weight: 400px;
      margin-bottom: 1rem;
  `;

  return (
    <Container>
      <Title>Market Overview</Title>
      <MarketPriceTable />
    </Container>
  );
}

export default MarketOverview;