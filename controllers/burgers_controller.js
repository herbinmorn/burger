var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var eaten = [];
        var exist = [];

        for(var i=0; i < data.length; i++){
            if(data[i].devoured === true){
                eaten += data[i];
            } else{
                exist += data[i];
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
//below is wrong!
// router.post("/",function(req, res){
//     burger.create([
//         "name", "devoured"
//     ],[
//         req.body.name, req.body.devoured
//     ],function(result){
//         res.json({id:result.insertId});
//     });
// });

// router.put("api/burgurs/:id", function(req, res){
//     var condition = "id = "+ req.params.id;
//     console.log("condition", condition);
//     burger.update({
//         devoured:req.body.devoured
//     }, condition, function(result){
//         if(result.changeRows == 0){
//             return res.status(404).end();
//         }else{
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;