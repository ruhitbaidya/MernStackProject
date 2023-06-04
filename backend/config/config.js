const mongoose = require("mongoose");
require('dotenv').config();


const bdUrl = process.env.DB_URL;

const dbConnect = async ()=>{
    try{
        await mongoose.connect(bdUrl);
        console.log("DB Is Connect");
    }catch(err){
        console.log(err.message);
    }
}


module.exports = dbConnect;
