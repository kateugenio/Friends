var Friend = require('../models/friend');

module.exports = {
  index: function(req, res){
    Friend.find({}, function(err, friends){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json(friends);
    	}
    });
  },
  create: function(req, res){
  	//assuming that the http post request from factory is an object sent through the request body, so i used 'req.body'? Or not sure, if we should provide the argument given from the factory http request method, i.e. 'friend'??? 
  	Friend.create(req.body, function(err, friend){
  		if (err){
  			//send the error back to factory, if any
  			res.json(err);
  		}
  		else {
  			//send the newly created friend back to factory, where factory will pass the new friend in the callback
  			res.json(friend);
  		}
  	})
  },
  update: function(req, res){
  	Friend.update({id: req.params.id}, {firstName: req.body.firstName, lastName: req.body.lastName}, function(err, friend){
  		if (err){
  			res.json(err);
  		}
  		else {
  			res.json(friend);
  		}
  	})
  },
  show: function(req, res){
  	Friend.findById(req.params.id, function(err, friend){
  		if (err){
  			res.json(err);
  		}
  		else {
  			res.json(friend);
  		}
  	})
  },
  delete: function(req, res){
  	Friend.remove({id: req.params.id}, function(err){
  		if (err){
  			res.json(err);
  		}
  		else {
  			res.redirect('/friends');
  		}
  	})
  }
}
