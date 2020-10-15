import React, { useState } from 'react';
import HomePageContentContainer from './HomePageContentContainer';
import HomeSearchBar from './HomeSearchBar'



const HomePage = () => {



  return (
    <div className='home-page-container'>
      <HomeSearchBar />
      <HomePageContentContainer />
    </div>
  );
}

export default HomePage;