import React, { useState } from 'react'
import styled from 'styled-components'
import MarketOverview from './MarketOverview.jsx'




const LeftColumnContainer = () => {

  const Container = styled.div`
        height: 500px;
        width: calc(67% - 1rem);
    `;
  return (
    <Container>
      <MarketOverview />
    </Container>
  );
}

export default LeftColumnContainer;