/*****************
*defining routes *
*controllers     *
******************/


/* requiring express module so that we can use express app*/
const express = require('express');

//requiring bodyparser
const bodyParser = require('body-parser');
//requiring mongoose
const mongoose = require('mongoose');
//module.exports =function(app){
//creating express router to handle routes
const router = express.Router();
//const router = app.Router();
//using filesystem to read and write the data
const fs = require('fs');
//using jsonfile module
//const jsonfile = require('jsonfile');



//connect to the database
//mongoose.connect('mongodb://test:test12@ds033907.mlab.com:33907/todo');

//const file = './todoLists';//dummy data on the server, & will be passed to the todo view
/*
var data = fs.readFile('./routes/data.json', function(err, data){
  if(err){
    console.error(err);
  }
  JSON.parse(data);
  //console.log(JSON.parse(data));
});
*/

//const obj = data;
//JSON.stringify(data, null, 2);
//create a schema
/*var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);

var itemOne = Todo ({ item: 'Learn Node.js'}).save(function(err,itemOne){
  if(err) throw err;
  console.log('item saved successfully');
});*/
//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//HTTP get method to get a list of todo tasks
router.get('/todolists',function(req, res){
  //console.log('listening to get request');
//  res.end();//this will end the request
  //res.send({type: 'GET'});//this will send the response back to the browser with name property
  //res.render('todo');
// parsing json data
var data = fs.readFileSync('./routes/data.json','utf-8');/* function(err, data){
  if(err){
    console.error(err);
  }
//  JSON.parse(data);*/
    res.render('todo', {todos: JSON.parse(data)});
  //console.log(JSON.parse(data));
//});

  //after adding the data outputing interval
//  res.render('todo', {todos: data});//'todo' is the view and the array in data is passed to that
});

//Route by ID -- replacing router with app
router.get('/todolists/:id',function(req, res){
  //console.log('listening to get request');
//  res.end();//this will end the request
  res.send({type: 'GET'});//this will send the response back to the browser with name property
});
/*
router.get('/todolists',function(req, res){
  //console.log('listening to get request');
//  res.end();//this will end the request
  res.send({type: 'GET'});//this will send the response back to the browser with name property
});
*/
//add a new todo list task
router.post('/todolists', urlencodedParser ,function(req, res){
  //res.send({type: 'POST'});//this will send the response back to the browser with name property
  //fs.writeFile('writeMe.txt', data);
 data.push(req.body);
 res.json(data);
 //fs.writeFile('writeMe.txt', data, () => {});
//console.log(data);
/*jsonfile.writeFile(file, obj, function(err){
  if(err) console.error(err);
});*/
});

//update existing todo list task
router.put('/todolists/:id',function(req, res){
  res.send({type: 'PUT'});//this will send the response back to the browser with name property
});

//deleting a todo list task
router.delete('/todolists/:item',function(req, res){
  //res.send({type: 'DELETE'});//this will send the response back to the browser with name property
 data = data.filter(function(todo){
   return todo.item.replace(/ /g, '-') !==req.params.item;
 })
 res.json(data);
});


//exporting the routes
module.exports = router;
