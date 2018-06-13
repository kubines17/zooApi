var express = require('express');
var router = express.Router();
var fs = require('fs')
/* /get/2* - send some animal */
/* /get/by/name/value */
/* /add */


module.exports = function(app){
	router.post('/', function(req, res){
		fs.readFile('./zoo.json', function (err, data){
			if(err){
				res.send({
					"message": "Can not read file",
					"Ststus": "fail"
				})
			}
			var json = JSON.parse(data)

			json.push({
				"id": req.body.id,
				"name": req.body.name,
				"type": req.body.type,
				"room": req.body.room
			})
			fs.writeFile('./zoo.json', JSON.stringify(json), function(err){
				res.send({
					"message": "Data added",
					"status": "success"
				})
			});
		});
	});
	app.use('/add', router);
};
