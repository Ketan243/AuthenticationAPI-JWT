const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute=require('./routes/posts')

dotenv.config({path:'./routes/.env'});



//import routes
const authRoute = require('./routes/auth');


//Connect db
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser:true},
    ()=>console.log('Connected to Db')
);

//Middleware
app.use(express.json());



//Route middleware
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);
app.listen(3000,() => console.log('Server Up and running at 3000'))