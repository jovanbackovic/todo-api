var {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongdb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count : ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  db.collection('Users').find({name: 'Jovan'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  client.close();
});
