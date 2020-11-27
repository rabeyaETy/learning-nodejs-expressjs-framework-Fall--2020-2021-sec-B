var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	req.session.username = null;
	req.session.usertype = null;
	req.session.designation = null;
	res.clearCookie('username');
	res.redirect('/home');
});

module.exports = router;


