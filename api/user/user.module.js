const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Numeri = mongoose.Schema;
const Gioco = mongoose.Schema;

const userSchema = new Schema({
  username : String,
  password : String,
  data : {type: Date, default : Date.now}
},{
  versionKey : false
})

const gioco = new Gioco ({
  username : String,
  password : String,
  giocata : Object
},{
  versionKey : false
})

const numWin = new Numeri ({
  numeri : Object,
  time : Number
},{
  versionKey : false
})

const User = mongoose.model('giocatori', userSchema);
const NumeriVincenti = mongoose.model('numeriWin', numWin)
const NumGiocati = mongoose.model('giocata', gioco)

module.exports = {
  User,
  NumeriVincenti,
  NumGiocati
};
