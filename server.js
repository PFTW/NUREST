var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./models/mongo");

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({"extended" : false}));

 router.get("/",function(req,res){
     res.json({"error" : false,"message" : "Greetings from Law Circuit 2015"});
});

 router.route("/keynotes")
     .get(function(req,res){
         var response = {};
         mongoOp.find({},function(err,data){
         // Mongo command to fetch all data from collection.
             if(err) {
                 response = {"error" : true,"message" : "Error fetching data"};
             } else {
                 response = {"error" : false,"message" : data};
             }
             res.json(response);
         });
          })
         .post(function(req,res){
         var db = new mongoOp();
         var response = {};
         // fetch keynote attribute
         db.ktitle = req.body.ktitle; 
         db.presenter = req.body.presenter; 
         db.profession = req.body.profession; 
         db.sessionID = req.body.sessionID; 
         db.date = req.body.date; 
         db.duration = req.body.duration; 
         db.save(function(err){
         // save() will run insert() command of MongoDB.
         // it will add new data in collection.
             if(err) {
                 response = {"error" : true,"message" : "Error adding data"};
             } else {
                 response = {"error" : false,"message" : "Data added"};
             }
             res.json(response);
         });

     });

 app.use('/',router);

 app.listen(3000);
 console.log("Listening to PORT 3000");
