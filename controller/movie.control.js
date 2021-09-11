
require('dotenv').config();
const axios = require('axios'); // require the package

const MOVIE_API_KEY = process.env.MOVIE_API_KEY
const Movie = require('../models/movie.model');
const Cache = require('../helper/cache.helper')

const cacheObj = new Cache();


const moveFun = async (request, res) => {
  const city_name = request.query.query;



  // const dayInMilSec = 50000;
  // const oneDayPassed = (Date.now() - cacheObj.timeStamp) > dayInMilSec;
  // if (oneDayPassed) {
    
   
  //   cacheObj = new Cache();
  // }

  const foundmovie = cacheObj.forCast.find(fielm => fielm.city_name === city_name);


  if (foundmovie) {
    res.json(foundmovie.data)

  } else {


    const movieUrl = `https://api.themoviedb.org/3/search/movie?query=${city_name}&api_key=${MOVIE_API_KEY}`


    if(movieUrl) {


      const movieDetales = await axios.get(movieUrl)


      console.log(movieDetales.data);


      let newMovie = movieDetales.data.results.map(item => {
        return new Movie(item.title, item.overview, item.vote_average)
      })

      cacheObj.movie.push(
        {
          "city-name": city_name,
          "data": newMovie


        }
      )






      res.json(newMovie)

    }


    else {
      res.json('no data')
    }




  }
}


module.exports = moveFun;