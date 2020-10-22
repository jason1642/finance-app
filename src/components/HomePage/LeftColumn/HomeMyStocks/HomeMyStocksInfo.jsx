import React, { useState } from 'react';
import styled from 'styled-components'



const HomeMyStocksInfo = props => {

  const Container = styled.div`
    display:flex;
    flex-direction: column;
    /* width: 2325px; */
    height: auto;
  `;

  const TestDiv = styled.div`
    display: flex;
    
   
  `;
  const Cell = styled.div`
  display: inline-block;
  padding: 1.15rem 0 1.15rem 0;
  padding-left: 2rem;
    width: 110px;
    max-width: 110px;
    min-width: 110px;
    font-size: 12px;
    color: white;
  /* height: 100%; */
  border-bottom: 1px solid grey;


  `;
  console.log(props.stockData)
  return (
    <Container>


      {props.stockData.map(ele => <TestDiv>

        <Cell>{ele.latestPrice}</Cell>
        <Cell>{(ele.changePercent * 100).toFixed(2)}%</Cell>
        <Cell>${ele.change}</Cell>
        <Cell>{ele.primaryExchange}</Cell>
        <Cell>{ele.openSource}</Cell>
        <Cell>{ele.latestTime}</Cell>
        <Cell>{ele.iexClose}</Cell>
      </TestDiv>)}


    </Container>
  );
}

export default HomeMyStocksInfo;

