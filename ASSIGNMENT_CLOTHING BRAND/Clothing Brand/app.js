const express=require("express");
const path =require('path');
const mysql =require("mysql");
const dotenv =require('dotenv');
const cookieParser=require('cookie-parser');
const exSession 	= require('express-session');
const explayouts          = require('express-ejs-layouts');
const bodyParser 	= require('body-parser');
const pdf 					= require('html-pdf');
const pdfDocument     		= require('pdfkit');
const {check,validationResult}	=require('express-validator');
const user					= require('./controller/user');
const login					= require('./controller/login');
const home					= require('./controller/home');
const logout				= require('./controller/logout');
const manager_home			= require('./controller/manager/manager_home');
const customer_home			= require('./controller/customer/customer_home');
const customer				= require('./controller/manager/customer');
const product2		= require('./controller/manager/product');
const product		       = require('./controller/customer/product');

dotenv.config({ path: './.env'});
const app=express();

const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
const publicDirectory =path.join(__dirname, './assets');
app.use(express.static(publicDirectory));

//parse url-encoded bodies 
app.use(express.urlencoded({ extended:false }));

//parse json bodies
app.use(express.json());

app.use(explayouts);
//config
app.set('view engine', 'ejs');
const urlencodedParser =bodyParser.urlencoded({extended: false})
//middleware
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());


app.use('',function(req, res, next) {
  res.locals.glob = req.session.use;
  next();
});


app.use('/user', user);
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/manager_home',manager_home);
app.use('/customer_home',customer_home);
app.use('/manager_home/customer', customer);
app.use('/customer_home/product', product);
app.use('/product', product2);

db.connect( (error) => {
    if(error){
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
})

//define routes
app.use('/',require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(3001,()=>{
 console.log("Server stated on port.. 3001");

})