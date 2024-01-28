//closures

function multiply(x) {
  const base = x
  
  return function mutiplyBy(y) {
    console.log(x * y)
  }
}


const multiplyByTwo = multiply(10);
// the envrionment is prepared with base value of 10

multiplyByTwo(2)
// should log "20"
// the call of the function with the environment prepared should add the value for the returned function parameter

multiplyByTwo(3)
// should log "30"

multiplyByTwo(4)
// should log "40"