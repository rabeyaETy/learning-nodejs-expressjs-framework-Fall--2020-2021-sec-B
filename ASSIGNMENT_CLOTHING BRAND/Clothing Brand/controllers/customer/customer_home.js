const express 	    = require('express');
const productModel  = require.main.require('././models/productModel');
const router 	    = express.Router();
router.get('/', (req, res)=>{
	
	if(req.cookies['uname'] != null){
		var uname = req.cookies['uname'];
		res.render('customer_home/index',{uname});
	}else{
		res.redirect('/login');
	}
	/* console.log(req.cookies['uname']);
	var uname = req.cookies['uname'];
	console.log(uname);
	res.render('accountingSellsHome/index',{uname}); */
})

router.get('/product', (req, res)=>{

	customerModel.getAll(function(results){
		console,console.log(results);
		var uname = req.cookies['uname'];
		res.render('customer_home/product', {productList: results, uname});
	});

})
router.get('/pdf', (req, res)=>{


	pdf.create(html, options).toFile('assets/uploads/productList.pdf', function (err, res) {
        if (err) { return console.log(err); }
        else {
            console.log(res); // { filename: '/app/businesscard.pdf' } 
            // var datafile = fs.readFileSync('assets/uploads/invoice.pdf');
            // res.header('content-type', 'application/pdf');
            // res.send(datafile);
        }
	});
	productModel.getAll(function(results){
		console,console.log(results);
		var uname = req.cookies['uname'];
		res.render('customer_home/product', {productList: results, uname});
	});

})

router.get('/profile', (req, res)=>{
	var uname = req.cookies['uname'];
	res.render('manager_home/profile', {uname}); 
});

module.exports = router;