const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path=require('path');
const dotenv=require('dotenv')
const cors = require('cors');
const port=3000 || process.env.port
dotenv.config()

const app = express();
app.use(bodyParser.json());
app.use(cors());

//routes
const blogRoutes = require('./routes/blogroutes');

// export db
require("./server/database");

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//public static style path
app.use(express.static(path.join(__dirname, 'public')));

app.use(blogRoutes);

app.listen(port, () => {
  console.log('Server is running on port 3000');
});
