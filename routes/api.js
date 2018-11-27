/*****************
*defining routes *
******************/


/* requiring express module so that we can use express app*/
const express = require('express');

//creating express router to handle routes

const router = express.Router();

//HTTP get method to get a list of todo tasks
router.get('/todolists',function(req, res){
  //console.log('listening to get request');
//  res.end();//this will end the request
  res.send({type: 'GET'});//this will send the response back to the browser with name property
});

//add a new todo list task
router.post('/todolists',function(req, res){
  res.send({type: 'POST'});//this will send the response back to the browser with name property
});

//update existing todo list task
router.put('/todolists/:id',function(req, res){
  res.send({type: 'PUT'});//this will send the response back to the browser with name property
});

//deleting a todo list task
router.delete('/todolists/:id',function(req, res){
  res.send({type: 'DELETE'});//this will send the response back to the browser with name property
});


//exporting the routes
module.exports = router;
