const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (body === "[]") {
      callback(null,"Error: Request Breed Not Found");
    } else {
      callback(null,JSON.parse(body)[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
