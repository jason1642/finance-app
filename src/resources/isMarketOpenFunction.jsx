import React from 'react'
import marketOpenDates from '../resources/marketopenDates.json'

const isMarketOpenFunction = () => {

  const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const splitTime = usaTime.split(' ')
  console.log(splitTime)
  const todaysDate = splitTime[0].slice(0, splitTime[0].length - 1)
  const usaYear = todaysDate.slice(6, todaysDate.length)

  const thisYearsHolidays = marketOpenDates.stockMarketHolidays.filter(ele => ele.year.toString() === usaYear)
  // console.log(todaysDate)
  // console.log(usaYear)
  console.log(thisYearsHolidays)



  return console.log(usaTime)
}

export default isMarketOpenFunction