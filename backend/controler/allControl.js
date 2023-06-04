const bcrypt = require('bcrypt');
const saltRounds = 10;
const registerData = require("../model/registerModel")
const registerUser = async (req, res)=>{
    try{
        const {name, email, password, Cpassword} = req.body;
        if(name == ''|| email == '' || password == '' || Cpassword == ''){
            res.send("fillupall the gap")
            console.log("fillup all the gap")
        }else{
            const findDatas = await registerData.findOne({email : email})
            if(findDatas){
                res.status(404).json({data : "this email already exist"})
            }else{
                bcrypt.hash(password, saltRounds, async (err, hash)=>{
                    const saves = registerData({
                        name, email, password : hash, Cpassword
                    })
                    await saves.save()
                });
                res.status(200).json({data : "dataSuccessFull"})
                console.log("register success")
            }
        }

    }catch(err){
        console.log(err)
    }
}
const loginUser = async (req, res)=>{
    const {email, password} = req.body;
    const emailFinder = await registerData.findOne({email : email});
    if(emailFinder){
        bcrypt.compare(password, emailFinder.password, function(err, result) {
            if(result === true){
                res.status(200).json({data : "valid User"})
            }
        });
    }else{
        res.status(404).json({data : "authondaction failed "})
    }
    
}
module.exports = {
    registerUser,
    loginUser
}