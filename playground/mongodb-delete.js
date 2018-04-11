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

  // db.collection('Todos').deleteMany({text: 'Backo je car'}).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Todos').deleteOne({text: 'Backo je car'}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').findOneAndDelete({completed: true}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name: 'Jovan'}).then((res)=> {
  //   console.log(res)
  // });

  var id = new ObjectId('5aca62adf088aefe27ed21ba');
  db.collection('Users').findOneAndDelete({_id: id}).then((res) => {
    console.log(res);
  });

  //  client.close();
});
