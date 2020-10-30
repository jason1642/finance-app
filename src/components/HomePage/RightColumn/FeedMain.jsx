import React from 'react'
import styled from 'styled-components'

const FeedMain = props => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    background-color: #393945;
    height: 100%;
    width: inherit;
  `;
  const ListItem = styled.div`
    background-color: #393945;
    padding: 1rem 3rem;
    margin-bottom: 2px;
    width: 340px;
    border-bottom: 2px solid #32323e;
  `;

  const MetaData = styled.div`
    display: inline-block;
    padding: 3px 5px;
    border-radius: 3px;
    background-color: #4d505f;
    color: white;
    font-weight: bold;
    font-size: 10px;
    margin-bottom: 10px;
  `;
  const Title = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: auto;
    height: 30px;
    color: white;
   
  `;
  const ListContent = styled.div`
    box-sizing:border-box;
    overflow: auto;
    &:hover{
      cursor: pointer;
      ${Title} {
      color: #52e3c2;
    }
    }
`;
  const Description = styled.div`
    overflow: hidden;
    color: #b4b8cd;
    font-size: 14px;
    margin-top: 0.5rem;
    height: 50px;
  `;
  console.log(props.businessNews)
  return (<>
    <Container>
      {props.businessNews.map((ele, i) =>
        <ListItem key={i}>
          <ListContent>
            <MetaData>{ele.provider[0].name}</MetaData>
            <Title>
              {ele.name}
            </Title>
            <Description>
              {ele.description}
            </Description>

          </ListContent>
        </ListItem>
      )}
    </Container>

  </>
  );
}

export default FeedMain;