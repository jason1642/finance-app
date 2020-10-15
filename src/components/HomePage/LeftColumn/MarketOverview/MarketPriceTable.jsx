import React, { useState } from 'react'
import styled from 'styled-components'

const MarketPriceTable = () => {


  const Container = styled.div`
    display: flex;
    flex-grow: 1;
    margin-right: -20px;
    
    background-color: white;
  `;

  const MarketTile = styled.div`
    padding: 12px 16px;
    border: 1px solid black;
  `;

  const PairContainer = styled.div`
  display: flex;
    margin: 0 20px 10px 0;
  `;

  return (
    <Container>


      <PairContainer>
        <MarketTile><div style={{ width: '3px', borderLeft: '1px solid purple' }}></div></MarketTile>
        <MarketTile>2</MarketTile>
      </PairContainer>


      <PairContainer>
        <MarketTile>3</MarketTile>
        <MarketTile>4</MarketTile>
      </PairContainer>


    </Container>
  );
}

export default MarketPriceTable;