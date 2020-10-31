import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import QuoteOverview from './QuoteOverview';
import CompanyProfileContainer from './QuoteCompanyProfile/CompanyProfileContainer.jsx'

const LeftColumn = props => {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(67% - 1rem);
    margin-right: 2rem;
    flex-wrap: wrap;
    background-color: #32323e;
  `;

  console.log(props)
  return (
    <>{
      props.stockData ?
        <Container>
          {props.stockData ? <QuoteOverview stockData={props.stockData} symbolParam={props.symbol} /> : <></>}
          <CompanyProfileContainer symbol={props.symbol} />
        </Container> : <></>
    }</>
  );
}

export default LeftColumn;