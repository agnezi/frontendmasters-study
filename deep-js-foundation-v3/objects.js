const objToUseAsRefToBind = {
  name: "I'm binded"
}

// what is the value of this here at global scope?
console.log('global', this);

// what is the value of this here inside the a function?
function functionA(someParam) {
  if(someParam) {
    console.log(someParam, this)
  } else {
    console.log('functionA', this)
  }
}
functionA()

//what is the value of this when functionB is called with call
function functionB() {
    console.log('functionB', this)
}
functionB.call()

//what is the value of this when functionC is called with a bind
function functionC() {
  console.log('functionC with objToUseAsRefToBind', this)
}
functionC.bind(objToUseAsRefToBind)()

// what is the value of this when called myObject.functionA()
const myObject = {
  name: 'Jonas',
  functionA,
}
myObject.functionA('myObject.functionA')

// what is the value of this when called myOtherObject with an arrow function
const myOtherObject = {
  name:  'Jonas',
  someFunction: (someParam) => {
    console.log(someParam, this)
  }
}
myOtherObject.someFunction('myOtherObject.someFunction')