const mongoose = require("mongoose");

const registerModel = new mongoose.Schema({
    name : {
        type : String,
        require : true
    }, 
    email : {
        type : String,
        require : true
    }, 
    password : {
        type : String,
        require : true
    }, 
    Cpassword : {
        type : String,
        require : true
    },
    createAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("registerUser", registerModel);