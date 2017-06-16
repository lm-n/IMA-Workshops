//Set up requirements
var http = require("http");

// Build the server
var app = http.createServer(function(request, response) {
	//define response header to the request. 200 HTTP Status code means OK!!
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.end("Node!!!!");
});

// Start the server
app.listen(3000, "localhost");
//Write a message to the TERMINAL
console.log("Server running at http://localhost:3000/");