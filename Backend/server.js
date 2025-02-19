require(`dotenv`).config()
const cors = require('cors')
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 8080;

app.use(cors()); 
//Connect to Mongoose
mongoose
    .connect(process.env.mongo_url, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=> {
        console.log('Connection Succesful')
    }).catch((err) =>{
        console.log('Connection Failed')
    });

    app.use(express.json())
    const contactRouter = require('./routes/contacts')
    app.use('/contacts', contactRouter)


app.listen(port,() => console.log(`Server has started on port ${port}`));
