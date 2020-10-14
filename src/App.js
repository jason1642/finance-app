import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'





const App = () => {

  const [randomState, setRandomState] = useState('this is a state string')
  const [data, setData] =
    useState({
      name: "jason",
      age: 22,
      myArray: ['one', 'two', 'three']
    })


  useEffect(() => {
    setData({ ...data, age: 17 })
  }, [])


  // setRandomState("I changed the state")
  console.log(data)
  return (
    <div className="App">
      <Header />
      <h1>{data.age}</h1>
    </div>
  );
}

export default App;