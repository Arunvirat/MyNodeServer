var http=require('http');
function arunFunction(request,response)
	{
	response.writeHead(200,{"content-type":"text/plain"});
	response.end("hello Arun\n");
    }
var server =http.createServer(arunFunction);
server.listen(8000);
console.log("server running at http://127.0.0.1:8000/");