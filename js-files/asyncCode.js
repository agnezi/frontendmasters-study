function someFunction() {
  console.log('third')
}

function someOtherFunction() {
  console.log('second')
}

// I will use the ms examples just for illustration, this is not representing a real time execution
setTimeout(someFunction, 0); // third 3ms
console.log('first') // first 1ms
someOtherFunction() // second 2ms ( after )


// the execution of this functions will follow the callstack
// -- callstack --
// ???? <-- here the completed of setTimeout will be placed after all executions of callStack instructions....
// while callStack is not empty, the event loop is constantly checking if callStack is empty to place the someFunction after setTimeout is completed
// someOtherFunction
// console.log
// global


// The setTimeout is an API from webBrowser so the timer execution will occurs async and when everything is completed it will be placed on callStack to run this function