
require('dotenv').config();
const axios = require('axios'); // require the package
const WEATHER_API_KEY = process.env.WEATHER_API_KEY
const Forecast = require('../models/wether.model');
const Cache = require('../helper/cache')

const cacheObject = new Cache();


const wetherfun = async (request, res) => {
  // const  city_name = request.query.city;

  // const lon = request.query.lon
  // const lat = request.query.lat
  const { lon, lat } = request.query;


  const foundData = cacheObject.foreCast.find(location => location.lat === lat && location.lon === lon);
  if (foundData) {
    res.json(foundData.data)

  } else {

    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?`

    try {

      const weatherUrlUsed = await axios.get(`${weatherUrl}lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`)



      let data = weatherUrlUsed.data.data.map(item => {
        return new Forecast(item.datetime, item.weather.description)
      })



      cacheObject.foreCast.push(
        {
          "lat": lat,
          "lon": lon,
          "data": data


        }
      )


      res.json(data)


    } 
    catch (error) {
      return error
    }



  }

}





    module.exports = wetherfun

