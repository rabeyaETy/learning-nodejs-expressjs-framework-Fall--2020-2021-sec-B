const express = require('express');
const userModel	= require.main.require('./models/userModel');
const router = express.Router();

router.get('/create', (req, res)=>{
	res.render('user/create'); 
})

router.post('/create', (req, res)=>{

	var user = {
        username: 	req.body.username,
        email: 	req.body.email,
		password: 	req.body.password,
        type	: 	req.body.type,
        designation:req.body.designation
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/create');
		}
	});
})


router.get('/edit/:id', (req, res)=>{

	
	userModel.getById(req.params.id,function(result){

		var user ={
            username: 	result.username,
            email   :result.email,
			password: 	result.password,
            type	: 	result.type,
            designation: result.designation
		};

		res.render('user/edit', user);
	});
})


router.post('/edit/:id', (req, res)=>{

	var user = {
		id		:	req.params.id,
		username: 	req.body.username,
        email: 	req.body.email,
		password: 	req.body.password,
        type	: 	req.body.type,
        designation:req.body.designation
	};
	userModel.update(user,function(status){
		
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.render('user/edit',user);
		}
	});
	
	// res.redirect('/home/userlist');
})

router.get('/delete/:id', (req, res)=>{
	userModel.getById(req.params.id,function(result){

		var user ={
            username: 	result.username,
            email   :result.email,
			password: 	result.password,
            type	: 	result.type,
            designation: result.designation
		};

		res.render('user/delete', user);
	});

})

router.post('/delete/:id', (req, res)=>{
	
	userModel.delete(req.params.id,function(status){
		if(status){
			res.redirect('/home/userlist');
		}
	});
	
})

module.exports = router;



