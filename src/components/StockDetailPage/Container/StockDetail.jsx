import React from 'react'
import styled from 'styled-components'
import LeftColumn from '../LeftColumn/LeftColumn.jsx'
import RightColumn from '../RightColumn/RightColumn.jsx'

const Container = (props) => {


  const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;
  console.log(props.location.stockData)

  return (
    <Container>
      <LeftColumn />
      <RightColumn />
    </Container>
  );
}

export default Container;