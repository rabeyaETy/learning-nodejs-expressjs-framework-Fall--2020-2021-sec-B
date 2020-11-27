const mysql = require("mysql");
const jwt =require('jsonwebtoken'); 
const bcrypt =require('bcryptjs');

const db=mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});




exports.register = (req,res) =>{
    
    console.log(req.body);
  

    const{ username,email,password,passwordConfirm }=req.body;

    db.query('SELECT email FROM user WHERE email =?' , [email],async (error,results) =>{
        if(error){
            console.log(error);
        }
        if(results.length >0){

            return res.render('register',{
                message:'That email is already in use'
            })
        } else if(password !==passwordConfirm){
            return res.render('register',{
                message:'Password not matched!'

        });
       }
   

      db.query('INSERT INTO user SET ?',{username: username, email:email, password: password },(error,results)=>{
             if(error){
                 console.log(error);
             } else{
                 console.log(error);
                return res.render('register', {
                   alert:'User registered'
             });
      }
    })

    });
}
