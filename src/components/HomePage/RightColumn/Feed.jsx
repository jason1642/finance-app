import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FeedHeader from './FeedHeader.jsx'
import FeedMain from './FeedMain.jsx'
import axios from 'axios'

const Feed = () => {

  const Container = styled.div`
  `;

  const [newsApiData, setNewsApiData] = useState([])

  useEffect(() => {
    const NEWSAPI_KEY = 'cce7827002dc4aacac0aa05b70ad0f33'
    const NEWSAPI_KEY_TWO = '1fae1394978c433199f7c1279bd1cae4'
    const fetchNewsData = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${NEWSAPI_KEY_TWO}`)
      console.log(response)
      setNewsApiData(response.data.articles)
    }
    fetchNewsData()
  }, [])
  return (
    <Container>
      <FeedHeader />
      <FeedMain
        businessNews={newsApiData}
      />
    </Container>
  )
}

export default Feed