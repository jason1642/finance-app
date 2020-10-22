import React, { useState } from 'react';
import styled from 'styled-components'
import RightColumnContainer from './RightColumn/RightColumnContainer.jsx'
import LeftColumnContainer from './LeftColumn/LeftColumnContainer.jsx'

const HomePageContentContainer = () => {

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    /* border: 1px white solid;
    background-color: blue; */
    margin-top: 29px;
  `;
  return (
    <Container>
      <RightColumnContainer />
      <LeftColumnContainer />
    </Container>
  );
}

export default HomePageContentContainer;