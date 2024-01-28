let timer = setTimeout(() => {
  Promise.resolve("promise in setTimeout callback").then((v) => {
    console.log(v);
  });

  console.log(1);

  setTimeout(() => {
    console.log("setTimeout in setTimeout");
  }, 0);
}, 0);

setTimeout(() => {
  console.log("2nd setTimeout func in global scope");
}, 0);

Promise.resolve(3).then((v) => {
  console.log(v);
});

console.log('timer ID: ', +timer)

console.log(2);

//////////////////////////////////////
// first loop

// STACK
// console.log('timerID: ', +timer)
// console.log(2)

// MICRO TASK QUEUE
// console.log(3)

// CALLBACK QUEUE
// let timer 
  // console.log(1)
  // console.log("promise in setTimeout callback")
  // console.log("2nd setTimeout func in global scope");
  // console.log("setTimeout in setTimeout");
//////////////////////////////////////


//////////////////////////////////////
// second loop

// STACK
// console.log(3)
// console.log(1) 

// MICRO TASK QUEUE
// console.log("promise in setTimeout callback")
// 


// CALLBACK QUEUE
// console.log("2nd setTimeout func in global scope"); 
// console.log("setTimeout in setTimeout");
//////////////////////////////////////


//////////////////////////////////////
// third loop

// STACK
// console.log("promise in setTimeout callback")

// MICRO TASK QUEUE
// 

// CALLBACK QUEUE
// console.log("2nd setTimeout func in global scope"); 
// console.log("setTimeout in setTimeout");
//////////////////////////////////////


//////////////////////////////////////
// fourth loop

// STACK
// console.log("2nd setTimeout func in global scope"); 
// console.log("setTimeout in setTimeout");

// MICRO TASK QUEUE
// 

// CALLBACK QUEUE
// 
//////////////////////////////////////


// CONSOLE ORDER
// console.log('timerID: ', +timer)
// console.log(2)
// console.log(3)
// console.log(1)
// console.log("promise in setTimeout callback")
// console.log("2nd setTimeout func in global scope"); 
// console.log("setTimeout in setTimeout");