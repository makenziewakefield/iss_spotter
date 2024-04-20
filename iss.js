const request = require('request');

const issURL = 'https://api.ipify.org?format=json';

const fetchMyIP = function (callback) {
  request(issURL, (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  })
};


module.exports = { fetchMyIP };