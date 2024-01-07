const express = require('express');
const path = require('path'); 
const router = require('./src/routes/api'); 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 


//Security Lib Imports 
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
//Database Lib Import 
const mongoose = require('mongoose'); 
//app
const app = express();

//Security middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb' , extended: true}));

//Request rate Limit
const limiter = rateLimit({windowMs: 10 * 60 * 1000, max: 2000});
app.use(limiter);

//Database connection

let URL="mongodb+srv://<username>:<password>@cluster0.g7zuc4b.mongodb.net/ecom";
let option={user:'sifat355y',pass:"sifat355y",autoIndex:true};
mongoose.connect(URL,option).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})

//Routing implementation
app.use("/api/sales", router);

app.use(express.static('client/dist'));

// Client site routes
app.use('*', (req, res) => {
   res.status(404).json({message:"No Route found" , data:"url not found"})
})

module.exports = app ;