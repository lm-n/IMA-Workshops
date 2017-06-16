//Express is a web app framework for Node.js very minimal features that 
//make our lives easy --without having to reinvent the wheel, 
//helps you organize your application's routing and use any templating solution with minimal effort 
//while still keeping all the key features of node
//Set up requirements
var express = require('express');
//Create an 'express' object
var app = express();

//Declare a route
app.get('/', function(request, response){
	response.send('We are good to go!');
});

//Start the server
app.listen(3000);
//Write a message to the TERMINAL CONSOLE
console.log("Express App running at localhost:3000");