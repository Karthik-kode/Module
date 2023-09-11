const express = require('express');
const bodyParser = require('body-parser');
const collection = require("./mongoConnection")
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
const port = 3001;

app.use(bodyParser.json());


//testing the server
module.exports = app;
app.get("/", async (req, res) => {
    res.send("Hello")
})

//Saving the data 
app.post('/api/saveData', async (req, res) => {
    console.log(req.body)

    const formData = req.body;

    try {

        await collection.insertOne(formData);

        // client.close();
        res.status(200).send('Data saved successfully');
    } catch (err) {
        console.error('Error saving data:', err);
        res.status(500).send('Failed to save data');
    }
});


//Login api and functionality

app.post('/api/login', async (req, res) => {
    
    try {
        const { username, password } = req.body
        // console.log("body",req.body.username)
        const user = await collection.findOne( { "username":username} );
  
        if (!user) {
            return res.status(401).send('User not found');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            res.status(200).send('login successful');
        } else {
            res.status(401).send('login unsuccessful');
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).send('Login fail');
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
