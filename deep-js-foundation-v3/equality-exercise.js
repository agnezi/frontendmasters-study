// # Wrangling Equality

// In this exercise, you will define a `findAll(..)` function that searches an array and returns an array with all coercive matches.

// ## Instructions

// 1. The `findAll(..)` function takes a value and an array. It returns an array.

// 2. The coercive matching that is allowed:

// 	- exact matches (`Object.is(..)`)
// 	- strings (except "" or whitespace-only) can match numbers
// 	- numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
// 	- `null` can match `undefined`, and vice versa
// 	- booleans can only match booleans
// 	- objects only match the exact same object

// TODO: write `findAll(..)`
// function findAll(someValue, someArray) {
//   let result = [];

//   for (let i = 0; i < someArray.length; i++) {
//     const isNumber = typeof someValue === "number";
//     const isNegative = -Infinity / someValue === Infinity;

//     if (typeof someValue === "number") {
//       if (isNaN(someValue)) {
//         if (isNaN(someArray[i]) == isNaN(someValue)) {
//           if (typeof someArray[i] == "number") {
//             result.push(someArray[i]);
//           }
//         }
//       } else if (someValue > 0) {
//         if (someValue == someArray[i]) {
//           result.push(someArray[i]);
//         }
//       } else if (isNegative) {
//         const isNegativeInArray = -Infinity / someArray[i] === Infinity;

//         if (isNegativeInArray == isNegative) {
//           result.push(someArray[i]);
//         }
//       } else if (
//         typeof someArray[i] != "string" &&
//         typeof someArray[i] != "boolean"
//       ) {
//         if (someArray[i] == someValue) {
//           result.push(someArray[i]);
//         }
//       }
//     } else {
//       if (typeof someValue == "string") {
//         if (someArray[i] == someValue) {
//           if (someValue == "") {
//             if (typeof someArray[i] == "string") {
//               result.push(someArray[i]);
//             }
//           }
//         }
//       } else {
//         if (someArray[i] == someValue) {
//           result.push(someArray[i]);
//         }
//       }
//     }
//   }

//   console.log(result);
//   return result;
// }

function findAll(match, arr) {
  var ret = [];

  for (let v of arr) {
    if (Object.is(match, v)) {
      ret.push(v);
    } else if (match == null && v == null) {
      ret.push(v);
    } else if (typeof match == "boolean") {
      if (match === v) {
        ret.push(v);
      }
    } else if (
      typeof match == "string" &&
      match.trim() != "" &&
      typeof v == "number" &&
      !Object.is(-0, v)
    ) {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      typeof match == "number" &&
      !Object.is(match, -0) &&
      !Object.is(match, NaN) &&
      !Object.is(match, Infinity) &&
      !Object.is(match, -Infinity) &&
      typeof v == "string" &&
      v.trim() != ""
    ) {
      if (match == v) {
        ret.push(v);
      }
    }
  }

  return ret;
}

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
