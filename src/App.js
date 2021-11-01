// External variables
const express = require("express");
const mongoose = require('mongoose');
const userRouter=require('./Routes/userController');
const userController = require('./Routes/userController'); //contains all the routes
const MongoURI =  'mongodb+srv://atlasDB:mongodb1234@cluster0.vt5cm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;
var cors = require('cors');

//App variables
const app = express();
const port = process.env.PORT || "3001";
const User = require('./Model/User');
// #Importing the userController

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads// configurations
// Mongo DB
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));


//app.get("/Home", (req, res) => {
//    res.status(200).send("You have everything installed !");
//  });

// #Routing to usercontroller here

app.use(cors());
app.use('/user',userRouter);                                   


// Starting server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
