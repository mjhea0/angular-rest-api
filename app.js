// module dependencies
var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

// create express server
var app = express();

// all environments
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routes
app.get('/', routes.index);
app.get('/api', routes.api);
app.get('/ping', routes.ping);

// api endpoints
app.get('/api/v1/campaigns', function (req, res){
  var totalCampaigns = 10000
  console.log(totalCampaigns)
  return res.send({"total_campaigns":totalCampaigns});
});

// launch server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
