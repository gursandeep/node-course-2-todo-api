//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  else {
    console.log('Connected to mongodb server');
  }
  // db.collection('Todos').find({
  //   _id : new ObjectID('5a5214ddc6cc4a1f9448c876')
  // }).toArray().then((docs) =>{
  // console.log('Todos');
  // console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to fetch docs',err);
  // });

  // db.collection('Todos').find().count().then((count) =>{
  // console.log(`Todos count : ${count}`);
  // },(err)=>{
  //   console.log('unable to fetch docs',err);
  // });

  db.collection('Users').find({name : "gursandeep"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('unable to fetch docs',err);
  });

  // db.collection('Todos').find({name : "gursandeep"}).toArray().then((docs) => {
  // console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('unable to fetch docs',err);
  // });


  // db.close();
});
