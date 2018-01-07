//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  else {
    console.log('Connected to mongodb server');
  }

  // db.collection('Todos').insertOne(
  //   {
  //     text : 'something to do',
  //     completed : false
  //   },
  //   (err,result) => {
  //     if(err){
  //       return console.log('unable to insert to do',err);
  //     }
  //     console.log(JSON.stringify(result.ops,undefined,2));
  //   }
  // );

  //inset new doc into Users (name, age, location)
  // db.collection('Users').insertOne(
  //   {
  //     name : 'gursandeep',
  //     age : 31,
  //     location :'faridkot'
  //   },
  //   (err,result) => {
  //     if(err){
  //       return console.log('unable to insert user',err);
  //     }
  //     //console.log(JSON.stringify(result.ops[0],undefined,2));
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  //   }
  // );
  db.close();
});
