<<<<<<< HEAD
const db = require('../models')
const bcryptjs = require('bcryptjs');
const config = require('../config/auth.config')
const jwt = require('jsonwebtoken');
const { request } = require('express');
const User = db.user;


signUp = (req,res,err)=>{
    var salt = bcryptjs.genSaltSync(10);

    const user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password,salt)
    })
    user.save((err,user)=>{
       if(err){
           res.status(500).send({message:err})
       }
        res.status(200).send({message:`user inserted successfully!`})
    })
}

signIn=(req,res,next)=>{
    console.log(req.body.email);
    console.log(req.body.password);
    User.findOne({email:req.body.email}).exec((err,user)=>{
        if(err){
            res.status(500).send({message:err});
            return;
        }
        if(!user){
           return res.status(404).send({message:"user not found"});
        }
        const passwordIsValid= bcryptjs.compareSync(req.body.password,user.password);
        if(!passwordIsValid){
            return res.status(404).send({
                accessToken:null,
                message:"Inavlid password"})
        }
        token = jwt.sign({id:user.id},config.secret,{expiresIn:86400})
        req.session.user_id=user.id;
        req.session.isLoggedIn = true;
        console.log(req.session.isLoggedIn)
        res.status(200).send({user})
    })
}

const userCont = { 
    signUp,
    signIn
}
=======
const db = require('../models')
const bcryptjs = require('bcryptjs');
const config = require('../config/auth.config')
const jwt = require('jsonwebtoken');
const { request } = require('express');
const User = db.user;


signUp = (req,res,err)=>{
    var salt = bcryptjs.genSaltSync(10);

    const user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:bcryptjs.hashSync(req.body.password,salt)
    })
    user.save((err,user)=>{
       if(err){
           res.status(500).send({message:err})
       }
        res.status(200).send({message:`user inserted successfully!`})
    })
}

signIn=(req,res,next)=>{
    console.log(req.body.email);
    console.log(req.body.password);
    User.findOne({email:req.body.email}).exec((err,user)=>{
        if(err){
            res.status(500).send({message:err});
            return;
        }
        if(!user){
           return res.status(404).send({message:"user not found"});
        }
        const passwordIsValid= bcryptjs.compareSync(req.body.password,user.password);
        if(!passwordIsValid){
            return res.status(404).send({
                accessToken:null,
                message:"Inavlid password"})
        }
        token = jwt.sign({id:user.id},config.secret,{expiresIn:86400})
        req.session.user_id=user.id;
        req.session.isLoggedIn = true;
        console.log(req.session.isLoggedIn)
        res.status(200).send({user})
    })
}

const userCont = { 
    signUp,
    signIn
}
>>>>>>> 3dd159bd1dac7483a22fe7d5ff9796751335d4b8
module.exports = userCont;