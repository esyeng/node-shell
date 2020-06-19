
const fs = require('fs');

module.exports = function curl(url) {
  let urlResult = req.get(url);
  console.log(urlResult);
  process.stdout.write('\nprompt > ');
}

const request = require('request')
  module.exports = request(
    { method: 'GET'
    , uri: urlArgument
    , gzip: true
    }
  , function (error, response, body) {
      // body is the decompressed response body
      console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'))
      console.log('the decoded data is: ' + body)
    }
  )
