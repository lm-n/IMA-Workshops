// Declare Requirements
var express = require("express"),
bodyParser = require('body-parser'),
errorHandler = require('errorhandler'),
Twitter = require('twitter');
//favicon = require('serve-favicon');


//Create the app
var app = express();

// Set up the views directory
app.set("views", __dirname + '/views');
// Set EJS as templating language, but allow for .html extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to public folder for css & js files
app.use(express.static(__dirname + '/public'));
//app.use(favicon(__dirname + '/public/media/favicon.ico'));
app.use(bodyParser.json());
// Set up Express error handling

app.use(errorHandler());
// Start the server
var server = app.listen(3000);
console.log('Express started on port: ' + 3000);

var TWITTER_CONSUMER_KEY = 'lCrCp6BEkYUD3MhBy5wUFlyKM';
var TWITTER_CONSUMER_SECRET = 'jIw5q0FhZ1KXm3ld0DRf967504bj8AAcGeXzeciinh5jS1MKvz';
var TWITTER_ACCESS_TOKEN_KEY = '786138685146140672-zcRQpDTSPwohDNqlWJsvocBkAh6mW55';
var TWITTER_ACCESS_SECRET = 'fAAgPjCyAtvq06FaYVisEB2tjh2smZfYt2PmQtWmHqegq';

var client = new Twitter({
	consumer_key: TWITTER_CONSUMER_KEY,
	consumer_secret: TWITTER_CONSUMER_SECRET,
	access_token_key: TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: TWITTER_ACCESS_SECRET
});



//ROUTES
app.get("/", function(req, res){
	res.render('index');
});

/*--------------------------------------------
For this example, you need a twitter user's id
This site can help you with this
http://gettwitterid.com/

var params = {
	user_id: ''
};
//Using the 'Twitter' lib - https://www.npmjs.com/package/twitter
app.get("/search", function(req, res){
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (error){
			throw error;
		}
		console.log(tweets[0].text);
		var theTweet = {'tweet': tweets[0].text };
		res.json(theTweet);
	});
});
--------------------------------------------*/
app.post("/save", function(req, res){
	console.log("A POST!!!!");
	//Get the data from the body
	console.log(req.body);
	var data = req.body.body;
	console.log(data);
	client.post('statuses/update', {status: data}, function(error, tweet, response) {
		if (error) throw error;
		console.log(tweet);
		console.log(response);
	});
});

app.get("*", function(req,res){
	res.redirect("/");
});