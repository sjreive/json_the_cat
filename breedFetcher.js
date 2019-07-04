let breed = process.argv[2];
const request = require('request');

const getBreed = function(breed) {
  request.get('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    if (error) {
      console.log(error);
    } else if (body === "[]") {
      throw "Request Breed Not Found";
    } else {
      console.log(JSON.parse(body)[0].description);
    }
  });
};

getBreed(breed);