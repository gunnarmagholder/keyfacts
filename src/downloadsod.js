'use strict'

var Twitter = require('twitter');
var fs = require('fs');
var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var configData = require('./config.development.json');





var client = new Twitter(configData);
var image_url = '';
client.get('search/tweets', {q: '#schiffdestages from:portofhamburg', tweet_mode: 'extended'}, function(error, tweets, response) {
  if(error) {
  	console.log(error);
  }
  // console.log(tweets['statuses'][0]);
  image_url = tweets['statuses'][0]['extended_entities']['media'][0]['media_url'];
  console.log(image_url); 
  var full_text = tweets['statuses'][0]['full_text'];
  var shipLink = extractShipLink(full_text);
  console.log(shipLink);
  var shipName = getShipNameFromUrl(shipLink);
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

function extractShipLink(fullTextFromTweet) {
  const regex = /\@PortofHamburg(.*)\@Port_traffic/gm;
  let m;
  m = regex.exec(fullTextFromTweet);
  var shipLink = m[1];
  shipLink = shipLink.trim();
  return shipLink;
}

function getShipNameFromUrl(urlOfShipData) {
  var pageSource;
  
  request(urlOfShipData, (err, response, body) => {
    if(!err) {
      var $ = cheerio.load(body);
      var shipName = $('h1.col-100').text();
      fs.writeFile('../public/assets/ship.json', shipName, (err) => {
        if(err) {
          console.log('Error : ' + err);
        }
        console.log('Attempt to get Ship name finished');
      });
    } else {
      console.log('Error getting Ship Information Page ' + urlOfShipData);
      console.log(err);
      
    }
  });
}