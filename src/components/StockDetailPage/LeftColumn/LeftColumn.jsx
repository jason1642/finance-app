import React from 'react';
import styled from 'styled-components'
import QuoteOverview from './QuoteOverview';

const LeftColumn = () => {


  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(67% - 1rem);
    margin-right: 2rem;
    flex-wrap: wrap;
    background-color: blue;
  `;
  return (
    <Container>
      <QuoteOverview />
    </Container>
  );
}

export default LeftColumn;