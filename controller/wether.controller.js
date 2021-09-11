
'use strict'

const axios = require('axios'); // require the package
require('dotenv').config();


const WEATHER_API_KEY = process.env.WEATHER_API_KEY
const Forecast = require('../models/wether.model');
const Cache = require('../helper/cache.helper')

const cacheObj = new Cache();


const wetherfun = async (request, res) => {
  

  const lon = request.query.lon
  const lat = request.query.lat
  
  // const dayInMilSec = 50000;
  // const oneDayPassed = (Date.now() - cacheObj.timeStamp) > dayInMilSec;
  // if (oneDayPassed) {
  
  //   cacheObj = new Cache();
  // }


  const foundData = cacheObj.forCast.find(location => location.lat === lat && location.lon === lon);

  if (foundData) {
    res.json(foundData.data)

  } else {

    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`

    if(weatherUrl) {

      const weatherUrlUsed = await axios.get(weatherUrl)



      let newdata = weatherUrlUsed.data.data.map(item => {
        return new Forecast(item.datetime,item.high_temp,item.low_temp, item.weather.description)
      })



      cacheObj.forCast.push(
        {
          "lat": lat,
          "lon": lon,
          "data": newdata


        }
      )


      res.json(newdata)


    } 
    else  {
      res.json("no data")    }



  }

}





    module.exports = wetherfun

