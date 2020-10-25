import React, { useState } from 'react'
import styled from 'styled-components'

const FeedHeader = () => {

  const Container = styled.div`
    padding: 2rem;
    margin-bottom: 2px;
    border-radius: 20px 20px 0 0;
    background-color: #393945;
  `;

  const RowOne = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Title = styled.div`
    margin-right: 2.5rem;
    font-size: 24px;
    font-weight: 400;
  `;

  const Nav = styled.div`
    display: flex;
    border-radius: 30px;
    background-color: #32323e;
    width: auto;
  `;
  const Button = styled.div`
    display: inline;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 30px;
    font-weight: 700;
    width: inherit;
    overflow: visible;
    margin: 0;
    text-align: center;
    word-spacing: normal;
    width: auto;
  `;

  const RowTwo = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;

  `;








  const DropDownContainer = styled("div")`
    width: 10.5em;
    display: flex;
    flex-direction: column;
`;



  const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  
  `;

  const DropDownList = styled("ul")`
padding: 0;
margin: 0;
padding-left: 1em;
background: #ffffff;
border: 2px solid #e5e5e5;
box-sizing: border-box;
color: #3faffa;
font-size: 1.3rem;
font-weight: 500;
&:first-child {
  padding-top: 0.8em;
}
`;

  const DropDownHeader = styled.div`
  margin-bottom: 0em;
  border-radius: 15px;
  padding: 0.4em 2em 0.4em 1em;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  font-weight: 500;
  font-size: 12px;
  color: white;
  background-color: #4d505f;
  `;

  const DropDownListContainer = styled("div")``;


  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const options = ["All Articles", "Premium Articles"];

  return (
    <Container>
      <RowOne>
        <Title>Feed</Title>
        <Nav>
          <Button>Following</Button>
          <Button>Top</Button>
          <Button>Macro</Button>
          <Button>Events</Button>
        </Nav>
      </RowOne>
      <RowTwo>

        {/* <i style={{ color: 'white' }} class="fas fa-filter"></i> */}
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>All Articles</DropDownHeader>

          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map(option => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}

        </DropDownContainer>

      </RowTwo>
    </Container >
  );
}

export default FeedHeader;