var mysql=require('mysql');
var express=require('express');
var session=reuire('express-session');
var bodyParser=require('body-parser');
var path=require('path');

var connection=mysql.createConnection(
    {
      host :'localhost',
      user:'root',
      password: 'Mohit@0305',
      database :'login'  
    }
);
var app=express();
app.use(session({
    secret:'secret',
    reshave:true,
    saveUninitialized:true
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.jason());

app.get('/',function(req,res){
    res.sendfile(path.join(--dirname+'/adminlogin.html'));
});
app.post('/auth',function(req,res){
   
    var pass
})