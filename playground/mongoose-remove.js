const {ObjectID} = require('mongodb');

const {mongoose} = require('./../serverdirectory/db/mongoose');
const {Todo} = require('./../serverdirectory/models/todo');
const {User} = require('./../serverdirectory/models/user');

// Todo.remove({}).then((res)=>{
//   console.log(res);
// });

Todo.findByIdAndRemove('5a62c99acd47e8abae60602e').then((todo)=>{
  console.log(todo);
});
