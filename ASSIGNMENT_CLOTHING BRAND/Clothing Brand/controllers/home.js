var express = require('express');
var userModel = require('../models/userModel');
var router = express.Router();

router.get('/', function(req, res){
	if(req.cookies['username'] != null || req.session.username != null){
		username = "";
		if(req.cookies['username']!=null)
		{
			username = req.cookies['username'];
		}
		else
		{
			username = req.session.username;
		}

		userModel.getById(username, function(result){
			if(req.session.username == null)
			{
				req.session.username = result.username;
				req.session.usertype = result.usertype;
				req.session.designation = result.designation;

			}
			res.render('home/index', {user: result});
		});
	}else{
		res.render('home/index', {user: null});
	}
});






module.exports = router;


