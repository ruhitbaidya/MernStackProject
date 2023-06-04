const express = require("express");
const router = express.Router();
const {registerUser, loginUser}= require("../controler/allControl")


router.post('/registerUser', registerUser)
router.post('/login', loginUser)

module.exports = router;