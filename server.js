'use strict';
const fs=require('fs');
const http=require('http');
const ceerio=require('cheerio');

const server=http.createServer(function(request, response){
  //response.writeHead(200, {'Content-Type': 'text/plain'});
  response.writeHead(200, {'Content-Type': 'text/html'});
  console.log(request.url);
  const content=fs.readFileSync('index.html', 'utf8');
  response.end(content);
});

server.listen(process.env.PORT || 3003);
console.log('Server started!');
