//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  else {
    console.log('Connected to mongodb server');
  }

  // db.collection('Todos').findOneAndUpdate(
  //   {
  //     _id : new ObjectID("5a525e8f94ad84ffa109e1fd")
  //   },
  //   {
  //     $set : {
  //       completed:true
  //     }
  //   }
  // , {
  //     returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID("5a5216bd92fad3028849f23e")
  },{
    $set : {
      name : "gursandeep"
    },
    $inc : {
      age : 1
    }
  },{
    returnOriginal : false
  }).then((result)=>{
    console.log(result);
  });
  // db.close();
});
