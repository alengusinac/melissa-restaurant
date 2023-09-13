var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var app = express();
const mongoose = require('mongoose');
require('dotenv').config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_HOST);

  console.log('Connected to database.');
}

var indexRouter = require('./routes/index');
var bookingsRouter = require('./routes/bookings');

var app = express();

app.use(
  cors({
    credentials: true,
    origin: [
      'https://melissa-restaurant.onrender.com',
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST'],
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/bookings', bookingsRouter);

module.exports = app;
