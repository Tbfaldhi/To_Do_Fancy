const jwt = require('jsonwebtoken')
const {Task} = require('../model/todomodel')
const mongoose = require('mongoose')

module.exports = {

        addTask:function(req,res){
            //res.send('masuk')
            const token = req.headers.token
            let decoded = jwt.verify(token, 'SECRET')
            const task = req.body.task
            let taskList = new Task({
                user_id: decoded.id,
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
        res.send('web berhasil kami hack')
    }

}