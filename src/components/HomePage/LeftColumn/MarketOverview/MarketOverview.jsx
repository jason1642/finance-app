import React, { useState } from 'react'
import styled from 'styled-components'
import MarketPriceTable from './MarketPriceTable.jsx'

const MarketOverview = () => {
  const Container = styled.div`
      padding : 2rem 3rem;
      border-radius: 20px 20px 0px 0px;
      background-color: #4d505f;
      background-color: #393945;

  `;

  const Title = styled.h1`
      font-size: 24px;
      font-weight: 300;
      margin: 0 0 1rem 0;
      color: #8f94ab;
  `;

  return (
    <Container>
      <Title>Markets</Title>
      <MarketPriceTable />
    </Container>
  );
}

export default MarketOverview;