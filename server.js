'use strict';
const fs=require('fs');
const http=require('http');
const cheerio=require('cheerio');
const urlUtils = require('url');

function transformHTML(content, mess){
  var params=urlUtils.parse(mess);
  // console.dir(params);
  let $=cheerio.load(content);
  $('<li>url: '+mess+'</li>').appendTo('.box > ul');
  for (let i of Object.getOwnPropertyNames(params)){
    $('<li>'+i+': '+params[i]+'</li>').appendTo('.box > ul');
  }
  return $.html();
}

const server=http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  //console.log(request.url);
  const content=fs.readFileSync('index.html', 'utf8');
  response.end(transformHTML(content, request.url));
});

server.listen(process.env.PORT || 3003);
console.log('Server started!');
