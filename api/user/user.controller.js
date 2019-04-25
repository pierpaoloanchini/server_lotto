const UserSchema = require('./user.module.js');
let giocata = [];
let numeri = [];

//GET
const home = (req,res)=>{
  res.sendFile('index.html', {root:'/home/pierpaolo/Desktop/server_lotto'})
}

//GET
const numeriGiocati = async(req,res,next)=>{
  const presave = new UserSchema.NumGiocati({
    username : req.params.par1,
    password : req.params.par2,
    giocata : req.params.par3
})
  const result =await presave.save();
  for (var i = 0; i < 6; i++) {
    let numero = getRandomIntInclusive(1,90)
      numeri.push(numero);
  }

  numeri.sort(confronta);
  const nome= req.params.par1;
  res.send(`giocatore ${req.params.par1} ha effettuato la giocata`)
  next(controllo(req.params.par3,numeri, nome));
  return giocata;
}


//POST
const sign = async (req,res,next)=>{
  const user = req.body;
  const newUser = await new UserSchema.User(user);
  const result = newUser.save();
  res.send(`salvataggio dell'utente ${user.username} completato`);
}

//GET
const estrai = async (req, res, next)=>{
  var numeri = [];
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const numero = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
      return numero
    }
    for (var i = 0; i < 6; i++) {
      let numero = getRandomIntInclusive(1,90)
        numeri.push(numero);
    }
  function confronta(a,b) {
    return a-b
  }
  numeri.sort(confronta)
  console.log("I numeri estratti sono: " + numeri);
  const presave = await new UserSchema.NumeriVincenti({
    numeri : numeri,
    time : Math.floor(Date.now() / 1000)}).save();
  res.send("estrazione effettuata!");
  return numeri;
}

module.exports = {
  home,
  numeriGiocati,
  sign,
  estrai
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const numero = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  return numero
}
function confronta(a,b) {
  return a-b
}
function controllo(a,b,giocatore) {
  var cont= 0;
  var res = a.split(",")
  let x;
  for (var i = 0; i < 6; i++) {
    res.map((v,i)=>{
      var res = parseInt(v)
      if (b[i]===res) return cont++;
    })
  }
  if(cont==0) {
    console.log(`${giocatore} ritenta sarai più fortunato`);
    }else{
      console.log(`il giocatore ${giocatore} ha indovinato ${cont} numeri`);
    }
  console.log(res);
  console.log(numeri);
  numeri = []
}
