const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'jin';
const client = new MongoClient(url);
    client.connect();
    const db = client.db(dbName);

    const collection = db.collection('Signup'); 
    

    module.exports=collection;