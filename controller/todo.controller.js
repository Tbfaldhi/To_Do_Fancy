const jwt = require('jsonwebtoken')
const {Task} = require('../model/todomodel')
const  { User }  = require('../model/usermodel')
const mongoose = require('mongoose')

module.exports = {

        addTask:function(req,res){
            //res.send('masuk')
            let token  = req.headers.token
            //Task.users.dropIndexes()
            let decoded  = jwt.verify(token, 'SECRET')
            //console.log(decoded)
            let taskList = new Task({
                userId: decoded.id,
                task: req.body.task,
                status: 'uncomplete'
            })

        taskList
            .save((err,result) => {
                if(!err){
                    res.status(201).json({
                        message: 'task successed add',
                        data: result
                    })

                } else {
                    res.status(500).json({
                    message: 'something went wrong'
                    })
                }
            })
            
        
    },

    getlist:function (req,res) {
        let token  = req.headers.token
        let decoded  = jwt.verify(token, 'SECRET')
        token.id = decoded.id
        console.log(decoded);
        
        Task.
            find({ userId: decoded.id }).
                populate('User').
                exec(function (err, todo) {
                if (err) console.log(err)
                res.status(200).json(todo)
            });
    },

    

}