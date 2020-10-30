import React from 'react';
import styled from 'styled-components'

const RightColumn = () => {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(33% + 1rem);
    background-color: red;

  `;
  return (
    <Container>
      right side
    </Container>
  );
}

export default RightColumn;