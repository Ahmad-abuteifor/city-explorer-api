const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors = require('cors');
app.use(cors()) 
 
require('dotenv').config();
const axios = require('axios'); // require the package


const PORT=process.env.PORT
const weather=require('./data/weather.json')
const WEATHER_API_KEY=process.env.WEATHER_API_KEY


class Forecast {
  constructor(date,description){
  this.date=date
  this.description=description


}}





app.get('/weathers', async(request,res)=>{ 
  const  city = request.query.city_name;



  const lon=request.query.lon
  const lat=request.query.lat

  const  weatherUrl=`https://api.weatherbit.io/v2.0/forecast/daily?`
  const weatherUrlUsed=await axios.get(`${weatherUrl}lon=${lon}&lat=${lat}&key=${WEATHER_API_KEY}`)

  res.json(weatherUrlUsed)
  
// const checkArray=weather.find(item=>{
// return item.city_name.toLowerCase()===city.toLowerCase()

// })

// if (checkArray){
// let newArray=checkArray.data.map(item=>{
//   return new Forecast(item.datetime,item.weather.description)
// })
// res.json(newArray)
// }else {
//  res.json('no data ')
// }


}

)


app.listen(PORT)