const express = require('express');
const router =  express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')
const jwtSecret = "MynameisAnkush";

router.post('/createuser', async (req, res) => {
    const { name, email, password, location } = req.body;

    // Simple validation
    if (!name || !email || !password || !location) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ success: false, message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(password, salt);

    try {
        await User.create({
            name,
            password: secPassword, 
            email,
            location // Use the correct field
        });
        res.json({ success: true });
    } catch (err) { 
        console.log("Error creating user:", err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

router.post('/loginuser' ,async(req,res)=>{
   
    let email = req.body.email;
   
   
    try{

       let userData = await User.findOne({email});
       if(!userData){
        return res.status(400).json({error : "Try logging with correct credentials"});
       }
       const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
       if(!pwdCompare){
        return res.status(400).json({error : "Try logging with correct credentials"});
       }
       const data = {
        id:{
            id : userData.id
        }
       }
       const authToken = jwt.sign(data,jwtSecret);
        return res.json({success : true,authToken:authToken});
    }catch(err){
        console.log(err);
        res.json({success : false});

    }
})



module.exports = router;