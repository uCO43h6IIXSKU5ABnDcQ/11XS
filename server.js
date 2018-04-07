'use strict';
const fs=require('fs');
const http=require('http');
const server=http.createServer(function(request, response){
  console.log(request.url);
  const content=fs.readFileSync('index.html', 'utf8');
  response.end(content);
});

server.listen(process.env.PORT || 3003);
console.log('Server started!');
