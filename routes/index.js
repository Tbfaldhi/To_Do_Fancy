const express = require('express');
const router = express.Router();
const { addTask,getlist } = require('../controller/todo.controller')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addTask',addTask)
router.get('/getlist',getlist)



module.exports = router;
