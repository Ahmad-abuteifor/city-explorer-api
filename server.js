const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors = require('cors');
app.use(cors()) 
 

const weather=require('./data/weather.json')
// a server endpoint 
app.get('/hello', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('nice') // our endpoint function response
})

app.get('/get-weather',(req,res)=>{
  // console.log(req.query.high_temp);
  const lon = request.query.lon;  
  const lot= request.query.lot





  if (lon||lot) {
    const returnArray = weather.filter((item) => {
      return [item.lon === lon||item.lot=lot]
    });

    if (returnArray.length) {
      res.json(returnArray);
    } else {
      res.send('no data found ')
    }
  } else {
    res.json(weather);
  }
}

)


app.listen(3002) // kick start the express server to work