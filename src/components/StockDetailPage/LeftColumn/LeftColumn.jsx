import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import QuoteOverview from './QuoteOverview';

const LeftColumn = props => {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(67% - 1rem);
    margin-right: 2rem;
    flex-wrap: wrap;
    background-color: blue;
  `;

  console.log(props)
  return (
    <>{
      props.stockData ?
        <Container>
          {props.stockData ? <QuoteOverview stockData={props.stockData} symbolParam={props.symbol} /> : <></>}
      11111111
    </Container> : <></>
    }</>
  );
}

export default LeftColumn;