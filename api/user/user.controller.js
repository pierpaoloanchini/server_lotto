const UserSchema = require('./user.module.js');
let giocata = [];
let numeri = [];
// const NumeriVincenti = require('./user.moduleNum.js');
const home = (req,res)=>{
  res.sendFile('index.html', {root:'/home/pierpaolo/Desktop/server_lotto'})
}
//giocata/:par1/:par2/:par3
const numeriGiocati = async(req,res,next)=>{
  const presave = new UserSchema.NumGiocati({
    username : req.params.par1,
    password : req.params.par2,
    giocata : req.params.par3
}).save();
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
numeri.sort(confronta);
  await res.send(`giocatore ${req.params.par1} ha effettuato la giocata`)
  next(controllo(req.params.par3,numeri));
  return giocata;
}
function controllo(a,b) {
  var cont= 0;
  var res = a.split(",")
  let x;
  res.map((v,i)=>{
    var res = parseInt(v)
      b.map((x,y)=>{
        return x;
        console.log(x);
      })
      if(x==v) {
        cont = cont +1;
        console.log(x);
        console.log(v);
      }

  })
  console.log(cont);
  console.log(typeof(res));
  console.log(res);
  console.log(numeri);
  numeri = []
}

//////////////////////mettere controllo se i numeri sono uguali, salvo la giocata in una collections
//////////////////////estrazione in un'altra collections

const sign = async (req,res,next)=>{
  const user = req.body;
  const newUser = await new UserSchema.User(user);
  const result = newUser.save();
  res.send(`salvataggio dell'utente ${user.username} completato`);
}

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
