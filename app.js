const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products'); //เพิ่มเข้ามาใหม่

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);//localhost:3000/api
app.use('/api/users', usersRouter);//localhost:3000/api/users
app.use('/api/products', productsRouter);//localhost:3000/api/products

module.exports = app;