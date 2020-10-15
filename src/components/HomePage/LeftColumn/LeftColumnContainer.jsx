import React, { useState } from 'react'
import styled from 'styled-components'
import MarketOverview from './MarketOverview/MarketOverview.jsx'




const LeftColumnContainer = () => {

  const Container = styled.div`
        display: flex;
        flex-direction: column;
        height: 500px;
        width: calc(67% - 1rem);
        background-color: green;
    `;
  return (
    <Container>
      <MarketOverview />
    </Container>
  );
}

export default LeftColumnContainer;