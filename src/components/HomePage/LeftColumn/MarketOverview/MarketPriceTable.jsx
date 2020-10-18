import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import './MarketOverview.scss'
import isMarketOpenFunction from '../../../../resources/isMarketOpenFunction.jsx'



const MarketPriceTable = () => {

  console.log(isMarketOpenFunction.isItAHoliday())

  const Container = styled.div`
    display: flex;
    flex: 1 1 0px;
    margin-right: -20px;
    flex-wrap: wrap;
    `;
  //tiles
  const MarketTile = styled.div`
    min-width: 90px;
    width: 42%;
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    background-color : #40424f;
    border-radius: 3px;
    `;

  const MarketTileRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: center;
  `;

  const MarketTileIndexName = styled.div`
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: white;
  `;

  //tiles
  const PairContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 20px 10px 0;
  justify-content: space-between;
  align-content: center;
  `;



  const [marketOverviewData, setMarketOverviewData] = useState([])
  const fourMarkets = ['SPY', 'QQQ', 'IWM', 'DIA']
  let marketDataArray = []
  useEffect(() => {

    const FMP_API_KEY = '0dafce6ce2fa49c8f0acd0ac316dfa33';
    const IEX_API_KEY = 'pk_3256652724eb490abdfd234401050f50';



    fourMarkets.map(async ele => {
      const fetchStockData = async () => {
        const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${ele}/quote?token=${IEX_API_KEY}`)
        setMarketOverviewData(oldArr => [...oldArr, response.data])
        // console.log(response.data)
      }
      setMarketOverviewData(marketDataArray)
      fetchStockData()
    })


  }, [])


  const pairContainerFunction = (sliceStart, sliceUpTo) => {
    return marketOverviewData.slice(sliceStart, sliceUpTo).map(ele =>

      <MarketTile>


        <MarketTileRow>
          <MarketTileIndexName>{ele.symbol}</MarketTileIndexName>
        </MarketTileRow>

        <MarketTileRow>

          <div style={{ color: "#b4b8cd" }}>Pre Market</div>

          <div style={{ color: ele.changePercent >= 0 ? 'green' : 'red', fontSize: '18px', height: '30px', width: '60px' }}>
            <i style={{ display: 'inline' }} class={ele.changePercent >= 0 ? "fas fa-caret-up" : "fas fa-caret-down"}></i>{(ele.changePercent * 100).toFixed(2).toString()}
          </div>
        </MarketTileRow>


      </MarketTile>



    )
  }




  console.log(marketOverviewData)


  return (marketDataArray ?
    <Container>


      <PairContainer>

        {marketOverviewData ? pairContainerFunction(0, 2) : <></>}
      </PairContainer>


      <PairContainer>
        {marketOverviewData ? pairContainerFunction(2, 4) : <></>}


      </PairContainer>


    </Container> : <></>
  );
}

export default MarketPriceTable;


// after hours through weekend