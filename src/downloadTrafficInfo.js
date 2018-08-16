var request = require('request');

request('https://www.hamburg-port-authority.de/de/info-port/traffic-tower/', (err, resp, body) => {
  console.log('error: ', err);
  console.log('statusCode ', resp && resp.statusCode);
  console.log('body: ', body);
});
