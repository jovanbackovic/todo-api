var {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongdb server');
  const db = client.db('TodoApp');

  db.collection('Users').find({name: 'Jovan'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  client.close();
});
