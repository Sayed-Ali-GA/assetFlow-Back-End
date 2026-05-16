const dotenv = require('dotenv');


dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const logger = require('morgan');
const port = process.env.PORT ? process.env.PORT : '3000';


// Controllers




//--------------------------------------------------- 




// Middleware:

app.use(cors());
app.use(express.json());
app.use(logger('dev'));


app.get('/', (req, res) => {
  res.send('Welcome to the app')
})
// ------------------------------------------------



// DB Connection

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.✅✅`);
});

//------------------------------------------------ 





// Routes go here

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!👍👍`);
});




// KILL THE SERVER
// npx kill-port 3000