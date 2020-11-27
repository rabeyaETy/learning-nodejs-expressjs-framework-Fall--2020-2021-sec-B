const express 					= require('express');
const {check, validationResult} = require('express-validator');
const productModel				= require.main.require('./models/productModel');
const router 					= express.Router();

router.post('/search',(req,res)=>{
	var product = {
		search : req.body.search,
		searchBy: req.body.searchBy
	};
	productModel.search(product, function(results){
		if(results){
			res.json({product: results});
		}else{
			res.json({product:'error'});
		}
	});
});


module.exports = router;