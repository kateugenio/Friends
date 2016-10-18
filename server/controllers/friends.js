var Friend = require('../models/friend');

module.exports = {
  index: function(req, res){
    Friend.find({}, function(err, friends){
      res.json(friends);
    });
  },
  create: function(){},
  update: function(){},
  show: function(){},
  delete: function(){}
}
