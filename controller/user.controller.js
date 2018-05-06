const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const  { User }  = require('../model/usermodel')
const mongoose = require('mongoose')

module.exports = {

    register:function (req,res) {
//res.send('MASUKKKKK')
        let{username,email,password} = req.body
        let token = jwt.sign({username},'SECRET');

        let userregister = new User ({
            username,
            email,
            password
        })

    userregister
        .save((err, result) => {
            const msg = 'email atau password salah'

            if (!err) {
                res.status(201).json({
                    message: 'registered succes',
                    data: result,
                })
            } else {
                res.status(500).json({
                message: msg
                })
            }
        })
    },
   
    login:function (req,res) {
        //res.send('MASUKKKKK')
        //let{username} = req.body
        User.findOne({$or: [
            {email: req.body.email},
            {password: req.body.password}
        ]}),function(err, user){
            if (err) {
                throw err
            } 

            user.comparePassword(req.body.password, function(err,isMatch){
                if(err){
                    throw err
                }
                if(isMatch){    
                    let token = jwt.sign({username},'SECRET');
                    res.status(200).json(user.token)
                }
                else{
                    res.status(500).json('WRONG PASSWORD')
                }
            })
             
        };
    }    
}