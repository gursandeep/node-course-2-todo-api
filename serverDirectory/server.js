const express = require('express');
const bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');


var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log(req.body);
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});

app.listen(3000,()=>{
  console.log('Started on port 3000');
});






















//
// var newTodo = new Todo({
//   text : "take rest",
//   completed : true,
//   completedAt : 6
// });
//
// // newTodo.save().then((doc)=>{
// //   console.log('Saved todo ',doc);
// // },(e)=>{
// //   console.log('Unable to save');
// // });
//
//
// //make user model
// //email -require,trim,string,min lenght 1
//
//
//
// var newUser = new User({
//   email :'abc@abc.com'
// });
//
// newUser.save().then((doc)=>{
//   console.log('Saved User ',doc);
// },(err)=>{
//   console.log('Error occured',err);
// });
