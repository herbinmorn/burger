var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){

    burger.all(function(data){
        var eaten = [];
        var exist = [];

        for(var i=0; i < data.length; i++){
            if(parseInt(data[i].devoured) ==1){
                eaten.push(data[i]);
            } else{
                exist.push(data[i]);
            }
        }

        var hbsObject = {
            exist: exist,
            eaten: eaten
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/",function(req, res){
    console.log(req.body);

    burger.create(
        req.body.burger, 
        function(result) {
            res.json({
           id:result.insertId
            });
            //res.redirect("/");
        });
 });

router.put("/burgers/:id", function(req, res){
    burger.update(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
       // res.redirect("/");
    });
});

module.exports = router;