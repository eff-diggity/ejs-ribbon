// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ribbon1:<4WEJWDzNNva2L6xi>@cluster0.dybqhon.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

const searchCardTemplate = document.querySelector("[search-card-template]")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())//promise request, converts it to json
    .then(data => {//fetches sample data from link above
        const card = searchCardTemplate.content.cloneNode(true).children[0]
        //get the content off template and clone content from link and everything inside card styling
        //pulls first child
    })