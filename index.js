'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const mongoose = require('./db');
const PORT = process.env.PORT ||3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:"2mb"}));

module.exports = {
  app,
  bodyParser,
  chalk
};

app.get('/home', require('./api/user/user.route.js'));
app.get('/giocata/:par1/:par2/:par3', require('./api/user/user.route.js'));
app.post('/signIn', require('./api/user/user.route.js'));
app.get('/estrazione', require('./api/user/user.route.js'));

const server = app.listen(PORT,()=>{
  console.log(chalk.bold.magenta(`server attivo sulla porta localhost:${PORT}`));
})
