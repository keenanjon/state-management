'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const username = 'foo';
const password = 'bar';

app.use(cookieParser);

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/setCookie/:clr', (req, res) => {
  res.cookie('color', req.params.clr, { httpOnly: true}).send('cookie set');
});

app.get('/readCookie/:clr', (req, res) => {
  console.log('Cookies: ', req.cookies.color);
  res.send('cookie read');
});


app.get('/deleteCookie/:clr', (req, res) => {
  res.clearCookie('color');
  res.send('cookie read');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
