//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  else {
    console.log('Connected to mongodb server');
  }
  //deleteMany
  // db.collection('Todos').deleteMany({text : "Eat Lunch"}).then((result)=>{
  //   console.log(result);
  // });
  // //deleteOne
  // db.collection('Todos').deleteOne({text : "Eat lunch"}).then((result)=>{
  //   console.log(result);
  // });
  //findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed : false}).then((doc)=>{
//   console.log(doc);
// });
// db.collection('Users').deleteMany({name : "gursandeep"}).then((res) => {
//   console.log(res);
// });
db.collection('Users').findOneAndDelete({_id : new ObjectID('5a52179224bb4119c422622a')}).then((doc) => {
  console.log(doc);
})
  // db.close();
});
