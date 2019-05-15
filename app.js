// function rangeTime() {
//   var d = new Date()
//   var n = d.getTime();
//   console.log(n);
//   var giorno = d.getHours();
//   console.log(giorno);
//   const hour = 3600000
//   var diff = n - (giorno*hour)
//   console.log(giorno);
//   console.log(diff);
// }
//
// rangeTime();
var array = []
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const numero = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  return numero
}

for (var i = 0; i < 6; i++) {
  array[i] = getRandomIntInclusive(1,99)
  array.map((v)=>{
    if (array[i] == array[i-1]) {
      i--
    }
  })
  console.log(array);
}
