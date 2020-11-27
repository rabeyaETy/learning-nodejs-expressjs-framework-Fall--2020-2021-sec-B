const express 	= require('express');
const { Result } = require('express-validator');
const { check, validationResult } = require('express-validator');
const userModel	= require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index')
})

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};
	userModel.validate(user, function(status,results){
		if(status){
			console.log(results);
			//req.session.uname = req.body.username;
			/* res.cookie('uname', req.body.username);
			res.redirect('/home'); */	
			res.cookie('uname', req.body.username);
			var user = {
				username: results[0].username,
				id: results[0].id,
				email: results[0].email,
				pass: results[0].password,
				type : results[0].type,
			};
			console.log(user);
			req.session.use =user;
			req.session.designation = results[0].designation;
			req.session.mail = results[0].email;
			req.session.username=results[0].username;
			req.session.idd = results[0].id;
			req.session.pass = results[0].password;
			if(user.type == "admin"){
				res.redirect('/manager_home');
			}
			else if(user.type == "customer"){
				res.redirect('/customer_Home');
				console.log(user.username);
			}
			else{
				res.redirect('/login');
			}


		}else{
			res.redirect('/login');
		}
	});

})



module.exports = router;