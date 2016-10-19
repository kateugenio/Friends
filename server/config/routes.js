var Friend = require('../controllers/friends')

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.get('/friends', function(req, res){
  	Friend.index(req, res);
  });
  app.post('/friends', function(req, res){
  	Friend.create(req, res);
  });
  app.get('/friends/:id', function(req, res){
  	Friend.show(req, res);
  });
  app.put('/friends/:id', function(req, res){
  	Friend.update(req, res);
  });
  app.delete('/friends/:id', function(req, res){
  	Friend.delete(req, res);
  });
}
