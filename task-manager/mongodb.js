// CRUD create read update delete
// const  mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName);

  // db.collection('users').findOne({ _id: new ObjectId('6368b7b95a13cab590097656') }, (error, user) => {
  //   if (error) {
  //     return console.log('Unablo to fetch');
  //   }

  //   console.log(user);
  // })

  // db.collection('users').find({ age: 38 }).toArray().then((users) => {
  //   console.log(users);
  // }).catch((error) => {
  //   console.log(error);
  // });

  // db.collection('users').countDocuments({ age: 38 }).then((count) => {
  //   console.log(count);
  // }).catch((error) => {
  //   console.log('Unable to fetch: ', error);
  // });

  db.collection('tasks').findOne({ _id: new ObjectId('6368b3e6cb4cf28f256a3f27') }).then((task) => {
    console.log(task);
  }).catch((error) => {
    console.log('Unablo to fetch, error: ', error);
  })

  db.collection('tasks').find({ completed: false }).toArray().then((tasks) => {
    console.log(tasks);
  }).catch((error) => {
    console.log('Unablo to fetch, error: ', error);
  })

});