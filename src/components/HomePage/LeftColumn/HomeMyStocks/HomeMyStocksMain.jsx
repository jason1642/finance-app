import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HomeMyStocksMainHeader from './HomeMyStocksMainHeader'
import HomeMyStocksInfo from './HomeMyStocksInfo'
import axios from 'axios'


const HomeMyStocksMain = () => {

  const Container = styled.div`
    padding-bottom: 1rem;

  `;

  const Main = styled.div`
    height: 100%;
    margin-bottom: 2rem;
    display: flex;
    `;
  const StaticLeftColumn = styled.div`
    overflow: hidden;
    width: 150px;
    font-size: 14px;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
  const StaticItem = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    border-bottom: 1px solid grey;
    /* background-color: grey; */
    /* border-radius: 20px; */
  `;
  const OverflowXDiv = styled.div`
    overflow-x: auto;
`;
  const usersTestStocks = ['AAPL', 'MSFT', 'TSLA', 'FB']
  const [usersStocksData, setUsersStocksData] = useState([])

  useEffect(() => {

    const IEX_API_KEY = 'pk_3256652724eb490abdfd234401050f50';



    usersTestStocks.map(async ele => {
      const fetchStockData = async () => {
        const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${ele}/quote?token=${IEX_API_KEY}`)
        setUsersStocksData(oldArr => [...oldArr, response.data])
        // console.log(response.data)
      }
      // setUsersStocksData(marketDataArray)
      fetchStockData()
    })


  }, [])
  // console.log(usersStocksData)

  return (
    <Container>
      <Main>
        <StaticLeftColumn>
          <StaticItem style={{ backgroundColor: 'none', borderBottom: '1px solid grey', justifyContent: 'center' }}>
            Symbol</StaticItem>
          {usersStocksData.map(ele => <StaticItem>
            <i style={{ color: 'green', paddingRight: '1rem' }} class="fas fa-circle"></i> {ele.symbol}</StaticItem>)}

        </StaticLeftColumn>
        <OverflowXDiv>
          <HomeMyStocksMainHeader />
          <HomeMyStocksInfo stockData={usersStocksData} />



        </OverflowXDiv>





      </Main>

    </Container>
  )
}

export default HomeMyStocksMain