function rangeTime() {
  var d = new Date()
  var n = d.getTime();
  console.log(n);
  var giorno = d.getHours();
  console.log(giorno);
  const hour = 3600000
  var diff = n - (giorno*hour)
  console.log(giorno);
  console.log(diff);
}

rangeTime();
