var express=require('express');
var bodyParser=require('body-parser');

var app = express();
app.use(bodyParser.json());
var database ={
    user : [
        {
            id : '1',
            name : 'mk',
            email : 'mk@gmail.com',
            password :'apple'
        },
        {
            id : '2',
            name : 'sk',
            email : 'zk@gmail.com',
            password : 'mango'
        }
    ]
}
app.get('/',(req,res) => {
    res.send(database.user);
})
app.post('/login',(req,res) =>{
if(req.body.email === database.user[0].email &&
    req.body.password === database.user[0].password)
    {
        res.json('success');
    }
    else
    {
        res.status('400').json('error logging in');
    }
})
app.post('/register',(req,res) => {
    var {name,email,password}=req.body;
    database.user.push({
        id : '3',
        name : name,
        email : email,
        password :password
    })
    res.json(database.user[database.user.length-1]);
})
app.listen(3000);
