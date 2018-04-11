var {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongdb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Jovan',
    age: 27,
    location: 'Belgrade'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });

  client.close();
});
