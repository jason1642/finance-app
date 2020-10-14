import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import axios from 'axios'
import { Route } from "react-router-dom"




const App = () => {



  const [stockApiDataIexapis, setStockApiDataIexapis] = useState({})


  useEffect(() => {



    //25 most active stock info
    const fetchStockData1 = async () => {
      const STOCK_API_KEY = "sk_6c78c6836d0240f585f888b8e84ef757"
      const responseTwo = await axios(`https://cloud.iexapis.com/stable/stock/market/list/mostactive?listLimit=25&token=${STOCK_API_KEY}`)
      console.log(responseTwo)
      setStockApiDataIexapis(responseTwo.data)
    }

    fetchStockData1()





  }, []
  )
  console.log(stockApiDataIexapis)

  return (
    <div className="App">
      <Header />
      <main>

        <Route exact path='/' render={routerProps => <HomePage {...routerProps} />} />

      </main>
    </div>
  );
}

export default App;