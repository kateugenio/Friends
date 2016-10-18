var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FriendSchema = new Schema({
  firstName: String,
  lastName: String
});


module.exports = mongoose.model("Friend", FriendSchema);
