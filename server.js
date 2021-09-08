const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors = require('cors');
app.use(cors()) 
 
require('dotenv').config();
const axios = require('axios'); // require the package
const getwrather = require('./controller/wether.controller');
const getmovie = require('./controller/movie.control');
const PORT=process.env.PORT


app.get('/weathers',getwrather)
app.get('/movies', getmovie)
app.listen(PORT)