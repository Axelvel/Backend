const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const Project = require('./project');

dotenv.config();

//Connecting to DB
const url = process.env.DB_CONNECT
try { mongoose.connect(url,
    () => {
        console.log(mongoose.connection.readyState);
    })
}  catch (error) {
    handleError(error);
}

  mongoose.connection.on('connected', () => {
    console.log("Connected to database!");
  })

const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Backend live on ${PORT}`)
)

app.get('/projects', async (req, res) => {
    console.log('Fetching...')
    console.log(mongoose.connection.readyState);
    const data = await Project.find()
    console.log(data)
    console.log("done")
    res.status(200).send(data)
});