import React, { useState } from 'react'
import styled from 'styled-components'
import MarketPriceTable from './MarketPriceTable.jsx'

const MarketOverview = () => {
  const Container = styled.div`
      padding : 2rem 3rem;
      border: 1px solid yellow;
      border-radius: 20px 20px 0px 0px;
      background-color: #4d505f;
      background-color: #393945;

  `;

  const Title = styled.h1`
      font-size: 24px;
      font-weight: 400px;
      margin-bottom: 1rem;
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