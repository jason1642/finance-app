import React from 'react';
import styled from 'styled-components'
import RightColumnContainer from './RightColumn/RightColumnContainer.jsx'
import LeftColumnContainer from './LeftColumn/LeftColumnContainer.jsx'

const HomePageContentContainer = () => {

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 29px;
    height: auto;
  `;
  return (
    <Container>
      <LeftColumnContainer />
      <RightColumnContainer />
    </Container>
  );
}

export default HomePageContentContainer;