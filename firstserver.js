var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Request Receive at Server"+req.url+"<br/>");
    res.write("hello from server");
    res.end();
}).listen(3000); 
/*
http.createServer(function(req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Request Receive at Server"+req.url+"<br/>");
    res.write("hello from server 1");
    res.end();
}).listen(3000);*/