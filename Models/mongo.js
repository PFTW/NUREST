var mongoose    =   require("mongoose");
 mongoose.connect('mongodb://localhost:27017/keynotesDb');
// create instance of the Schema
var mongoSchema =   mongoose.Schema;
// create schema
var keynoteSchema  = {
     "ktitle" : String,
     "presenter" : String,
     "profession": String,
     "sessionID": String,
     "date": String,
     "duration": String
};
// create our keynotes model
module.exports = mongoose.model('keynotes',keynoteSchema);
 //module.exports = mongoose.model('ktitle','presenter','profesion','sessionID','date','duration');