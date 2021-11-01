const express=require('express');
const userRouter=express.Router();
const User=require('../Model/User');
userRouter.use(express.json());
userRouter.use(express.urlencoded({extended: false}));




userRouter.get('/home',(req,res)=>
{
    res.send('Hello from home');
    res.end();
});

userRouter.post('/add',(req,res)=>
{
    console.log(req.body);
    const user=new User(
        {
            Name : req.body.name,
            Email : req.body.email,
            Age : req.body.age,
            BornIn : req.body.bornin,
            LivesIn:req.body.livesin,
            MaritalStatus : req.body.maritalstatus,
            PhoneNumber : req.body.phonenumber,
            Job: req.body.job
        }
    );
    user.save().then((result)=>{
        res.send(result)
    }).catch((err)=>
    {
        res.status(400).send("Address is needed");
        //res.status(404).send("Page not found");
    });
});

//getting all the data frocdm collection employee
userRouter.get('/getAll',(req,res)=>
{
    User.find().then((result)=>{
        res.send(result)
    });
});

//getting all employees with jobs TA
userRouter.get('/getAvengers',(req,res)=>
{
    const neededJob='Avenger';
    User.find({job:neededJob}).then((result)=>{
        res.send(result)
    });
});

module.exports=userRouter;