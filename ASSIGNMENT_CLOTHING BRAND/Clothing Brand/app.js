const express=require("express");
const path =require('path');
const mysql =require("mysql");
const dotenv =require('dotenv');
const cookieParser=require('cookie-parser');

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
app.use(cookieParser());

app.set('view engine','ejs');



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