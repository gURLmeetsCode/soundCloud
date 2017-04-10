var express = require('express'),
  path = require('path'),
  app = express();
var router = express.Router();


//set the port
app.set('port', 8080);

//tell express that we want to use the www folder
//for our static assets
app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(req, response){
	response.sendFile('index.html', {root: path.join(__dirname)})

})

app.get('/callback', function(req, response){
	response.sendFile('callback.html', {root: path.join(__dirname)})

})

// Listen for requests
var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});

router.get('/', function(req, res, next){
	res.render('index', {title: 'SoundCloud'});
});

module.exports = router;
