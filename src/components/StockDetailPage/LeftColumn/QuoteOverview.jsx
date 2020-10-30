import React from 'react';
import styled from 'styled-components'

const QuoteOverview = () => {
  const Container = styled.div`
    padding : 2rem 2.5rem 0px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
  `;
  const Content = styled.div`
  `;
  const RowOne = styled.div`
    display: flex;
    flex-grow: 1;
    margin-bottom: 6px;
  `;
  const RowTwo = styled.div`

  `;
  return (
    <Container>
      <Content>
        <RowOne>qweqw</RowOne>
        <RowTwo>12321321</RowTwo>
      </Content>
    </Container>
  );
}

export default QuoteOverview;