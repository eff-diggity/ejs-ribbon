require('dotenv').config({path: "../.env"})
const mongodb = require('mongodb');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("Ribbon").collection("users");
  try {
    collection.insertOne({ username: 'anotherUser', role: 'client'})
    console.log("write success")
  }catch(e){
      print(e)
  }
  // perform actions on the collection object
//   client.close();
});


