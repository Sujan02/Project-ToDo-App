/***********************************************************************************
*Main file
*Purpose: Online ToDo Application with basic CRUD operations with total of 6 routes*
*which should include search by Id or Date Route & Search by User route.           *
*Use a basic JSON file to store the content for now                                *
************************************************************************************/

/* requiring express module so that we can use express app*/
const express = require('express');



//set up express App
const app = express();

//requiring & using the routes in express App
app.use('/api',require('./routes/api'));
//listen for requests by setting up the port number
app.listen(4000, function(){
console.log('now listening');
});
