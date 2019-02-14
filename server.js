const express = require('express');
const mongoose = require('mongoose');
const voters = require('./routes/api/voters');
const location = require('./routes/api/loaction');
const bodyParser = require('body-parser');



const app = express();

//bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('HELLO GUYS!')
})


//use routes
app.use('/api/voters', voters);
app.use('/api/location', location);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));