'use strict'

var Twitter = require('twitter');
var fs = require('fs');
var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var configData = require('./config.development.json');
var getUrls = require('get-urls');

var client = new Twitter(configData);
var image_url = '';
client.get('search/tweets', {q: '#schiffdestages from:portofhamburg', tweet_mode: 'extended'}, function(error, tweets, response) {
  if(error) {
    console.log(error);
  }
  var allUrls = getUrls(tweets.statuses[0].full_text);
  console.log("Found URLS in tweet: " + allUrls);  
  allUrls.forEach((value) => {
    var r = request.get(value, (err, res, body) => {
      console.log(res.request.uri.href);
      if(res.request.uri.href.indexOf("www.hafen-hamburg.de") !== -1 ) {
        getShipNameFromUrl(res.request.uri.href);
      }
    });
  });
});

function getShipNameFromUrl(urlOfShipData) {
  var pageSource;
  console.log("Ship Data Page " + urlOfShipData);
  request(urlOfShipData, (err, response, body) => {
    if(!err) {
      var $ = cheerio.load(body);
      var shipName = $('h1.col-100').text();
      console.log("Got Ship Name : " + shipName);
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
