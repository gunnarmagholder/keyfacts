'use strict'

var Twitter = require('twitter');
var fs = require('fs');
var http = require('http');
var configData = require('./config.development.json');


var client = new Twitter(configData);
var image_url = '';
client.get('search/tweets', {q: '#schiffdestages from:portofhamburg', tweet_mode: 'extended'}, function(error, tweets, response) {
  if(error) {
  	console.log(error);
  }
  console.log(tweets['statuses'][0]);
  image_url = tweets['statuses'][0]['extended_entities']['media'][0]['media_url']
  console.log(image_url);
  var file = fs.createWriteStream('../public/assets/ship.jpg');
  var request = http.get(image_url, (response) => {
    response.pipe(file);
    file.on('finish', () => { 
      file.close();
    });
  }).on('error', (err) => {
    if(err) { 
      fs.unlink(dest); 
      console.log(err);
    };
  });

});

