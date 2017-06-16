//Set up requirements
var express = require("express");
var logger = require('morgan');
var Request = require('request');

//Create an 'express' object
var app = express();

//Middleware - log requests to the terminal console
app.use(logger('dev'));

//Set up the views directory
app.set("views", __dirname + '/views');
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/public'));

/*-----
ROUTES
-----*/

//Main Page Route - NO data
app.get("/", function(req, res){
	res.render('index');
});

//JSON Serving route
app.get("/api/", function(req, res){
	res.send(ardsdat);
});

//Catch All Route
app.get("*", function(req, res){
	res.send('Sorry, nothing doing here.');
});

// Start the server
app.listen(3000);
console.log('Express started on port 3000');



/*-----------
//ARDS TALKS TO CONSOLE
------------*/

var serialport = require('serialport');// include the library
SerialPort = serialport; // make a local instance of it
// get port name from the command line:
portName = process.argv[2];

var myPort = new SerialPort(portName, {
	baudRate: 9600,
	// look for return and newline at the end of each data packet:
	parser: serialport.parsers.readline("\n")
	});

myPort.on('open', showPortOpen);
myPort.on('data', sendSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}
 
function sendSerialData(data) {
   //console.log(data);
   saveLatestData(data);
   ardsdat = data;
}

function saveLatestData(data) {
   console.log(data);
   // if there are webSocket connections, send the serial data
   // to all of them:
   // if (connections.length > 0) {
   //   broadcast(data);
   // }
}
 
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}

function sendToSerial(data) {
 console.log("sending to serial: " + data);
 myPort.write(data);
}

/*-----------
//TO CONSOLE START READING ARDS 
------------*/
//$ node app.js /dev/cu.usbmodem1421
