var {
  MongoClient,
  ObjectId
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to mongdb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('5aca52af189b46fc1c987722')
  // }, {
  //   $set: {
  //     completed: true
  //    }
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5aca60ac09c317fdc8585b58')
  }, {
    $set:{
      name: 'Backo'
    },
    $inc: {
      age: -1
     }
  }).then((res) => {
    console.log(res);
  });

  //  client.close();
});
