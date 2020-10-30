import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import { Route } from "react-router-dom"
import Footer from './components/Footer/Footer.jsx'
import StockDetail from './components/StockDetailPage/Container/StockDetail.jsx'

const App = () => {

  useEffect(() => {
    //25 most active stock info
    // const fetchStockData1 = async () => {
    //   const FMP_API_KEY = '0dafce6ce2fa49c8f0acd0ac316dfa33';
    //   const TIINGO_API_KEY = '458b98b2a987d2fba65f5be43ca8f1090488992b';
    //   const STOCK_API_KEY = "sk_6c78c6836d0240f585f888b8e84ef757"
    //   const responseTwo = await axios(`https://cloud.iexapis.com/stable/stock/market/list/mostactive?listLimit=25&token=${STOCK_API_KEY}`)
    //   console.log(responseTwo)
    //   setStockApiDataIexapis(responseTwo.data)
    //   const response1 = await axios('https://finnhub.io/api/v1/stock/profile2?symbol=SPY&token=brlva87rh5re8ma1oe5g')
    // }





  }, []
  )
  // console.log(marketOverviewData)

  return (
    <div className="App">
      <Header />
      <main>

        <Route exact path='/' render={routerProps => <HomePage  {...routerProps} />} />

        <Route exact path='/quote/:symbol' render={routerProps => <StockDetail  {...routerProps} />} />

      </main>

      <Footer />
    </div>
  );
}

export default App;