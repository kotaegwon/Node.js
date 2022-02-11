const http=require('http');

http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Node.js');
}).listen(7777);