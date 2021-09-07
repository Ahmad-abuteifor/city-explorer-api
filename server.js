const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors = require('cors');
app.use(cors()) 
 
require('dotenv').config();

const PORT=process.env.PORT
const weather=require('./data/weather.json')
// a server endpoint 
app.get('/hello', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('nice') // our endpoint function response
})


class Forecast {
  constructor(date,description){
  this.date=date
  this.description=description


}}



app.get('/weathers',(request,res)=>{ 
  const  city = request.query.city_name;
 


  
const checkArray=weather.find(item=>{
return item.city_name.toLowerCase()===city.toLowerCase()

})

if (checkArray){
let newArray=checkArray.data.map(item=>{
  return new Forecast(item.datetime,item.weather.description)
})
res.json(newArray)
}else {
 res.json('no data ')
}


}

)


app.listen(PORT)