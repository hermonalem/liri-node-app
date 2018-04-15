require("dotenv").config();

var request = require('request');

var myKeys = require("./keys.js");

var command = process.argv[2]
//this will take commands for all 3 npms(movie-"this")
var userinput = process.argv[3];
//takes in movie title, or song title
  if (command === "movie-this"){

    var baseUrl = 'http://omdbapi.com/?apikey=trilogy&s=';
    //check ombd for exact movie search
    var url = baseUrl + userinput;

  request(url, function (error, response, body) {
    if (error){
    console.log('error:', error);
    }; // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
  });
}
  else if (command === "mytweets"){
    //create dev twitter account and use twitter npm pckg for requst set up
    //console log the txt of tweet and time stamp
  }

  else if (command === "spotify-this-song"){
    //create dev spotify acct
    //use JSON to read return

  }

  var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);
