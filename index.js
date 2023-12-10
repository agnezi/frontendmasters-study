//closures

function multiply(x) {
const base = x
return function mutiplyBy(y) {
  console.log(x * y)
}
}


const multiplyByTow = multiply(10);

multiplyByTwo(2)
// should log "20"
