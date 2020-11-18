var express = require('express');
const  MongoClient  = require('mongodb');

var url = "mongodb://localhost:27017/mydatabase";

var app = express();
app.get('/', function (req, res){
    res.send("Hello world");

});
app.listen(3000,function(){
    console.log('Example app listening on port 3000!');

});
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var student= {name: "sneha", address: "A-1, Area colony, Bhopal"};
    db.collection("students").insertOne(student, function (err,result){
        if (err) throw err;
        console.log("1 Record Inserted");
        db.close();
});
});