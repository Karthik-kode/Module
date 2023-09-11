// const { MongoClient } = require('mongodb');

// // Connection URL and database name
// const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL
// const dbName = 'mydatabase'; // Replace with your database name

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// // Connect to the MongoDB server
// client.connect()
//   .then(() => {
//     console.log('Connected to the database');
//     const db = client.db(dbName);

//     // Perform database operations here

//     // Close the connection when done
//     client.close();
//   })
//   .catch(err => {
//     console.error('Error connecting to the database:', err);
//   });

//   // Assuming you're inside the connection callback
// const collection = db.collection('mycollection'); // Replace with your collection name

// // Insert a document
// const document = { name: 'John Doe', age: 30 };
// collection.insertOne(document)
//   .then(result => {
//     console.log('Document inserted:', result.insertedId);
//   })
//   .catch(err => {
//     console.error('Error inserting document:', err);
//   });
