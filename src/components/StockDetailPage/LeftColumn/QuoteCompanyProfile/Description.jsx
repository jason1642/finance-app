import React, { useState } from 'react';
import styled from 'styled-components'

const Description = () => {

  const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  `;
  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    
  `;
  const Button = styled.button`
    display: flex;
    padding: 10px;
    font-size: 100%;
    height: 15px;
    text-align: center;
    align-items: flex-start;
    width: 15px;
    font-weight: 900;
    &:hover{
      cursor: pointer;
    }
  `;
  const Content = styled.div`
  
  `;
  return (
    <Container>
      <Header>
        <div style={{ fontSize: '24px', marginBottom: '1.5rem' }}>Description</div>
        <Button>+</Button>
      </Header>
      <Content></Content>
    </Container>
  );
}

export default Description;