import React from 'react'
import styled from 'styled-components'

const FeedMain = props => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    background-color: #393945;
    width: inherit;
    
  `;


  const ListItem = styled.div`
    background-color: #393945;
    padding: 1rem 3rem;
    margin-bottom: 2px;
    width: 340px;
    border-bottom: 2px solid #32323e;

  `;
  const ListContent = styled.div`
    box-sizing:border-box;
    overflow: auto;
    text-overflow: ellipsis;
    /* -webkit-line-clamp: 2; */

`;
  const MetaData = styled.div`
    display: inline-block;
    padding: 2px 5px;
    border-radius: 15px;
    background-color: grey;
    color: white;
    margin-bottom: 10px;
  `;

  const Title = styled.div`
    display: -webkit-box;
    color: white;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: auto;
    text-overflow: ellipsis;
    /* -webkit-line-clamp: 2; */
    color: orange;
  `;

  const Description = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: white;
    font-size: 14px;
    margin-top: .5rem;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;

  `;

  return (
    <Container>

      {props.businessNews.map((ele, i) =>
        <ListItem key={i}>
          <ListContent>
            <MetaData>AAPL</MetaData>
            <Title>
              {ele.title}
            </Title>
            <Description>
              {ele.description}
            </Description>

          </ListContent>
        </ListItem>
      )}
      {console.log(props)}
    </Container>
  );
}

export default FeedMain;