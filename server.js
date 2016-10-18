var express = require('express'),
    bodyParser = require('body-parser'),
    port = 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

// ROUTES //////////////////////
require('./server/config/routes.js')(app);
///////////////////////////////

// MONGODB //////////////////////
require('./server/config/mongoose.js')
///////////////////////////////

app.listen(port, function(){
  console.log(`Listening on ${port}`);
})
