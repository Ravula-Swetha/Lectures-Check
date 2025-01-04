let express = require("express");
let app = express();
let allroutes = require("./routes/AllRoutes");
const session = require('express-session');
const mongoose = require( "mongoose" );
const path = require("path");
const cors = require( 'cors' );
// const jwt = require('./jwt');

const dotenv = require( "dotenv" );
dotenv.config();

app.use(express.json());
app.use(cors({credentials:true, origin:'http://localhost:3000'}));

//Routes
app.use("/api",allroutes);

//  endpoint
app.use("/",async(req,res)=>{
    res.send("welcome to Dune University!!");
});

// mongodb connection----------------------------------------------
let db = async()=>
{
    try{
        // console.log(process.env.DBURI);
        await mongoose.connect(process.env.DBURI);
        console.log("Connected to Database");
    }
    catch(err)
    {
        console.log("Error Connecting");
    }
}
db();


app.listen(5000,()=>{
    console.log("Backend server listening at port http://localhost:5000")
    }
);

