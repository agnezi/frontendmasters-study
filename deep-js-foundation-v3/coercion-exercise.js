// # Working With Coercion

// In this exercise, you will define some validation functions that check user inputs (such as from DOM elements). You'll need to properly handle the coercions of the various value types.

// ## Instructions

// 1. Define an `isValidName(..)` validator that takes one parameter, `name`. The validator returns `true` if all the following match the parameter (`false` otherwise):

// 	- must be a string
// 	- must be non-empty
// 	- must contain non-whitespace of at least 3 characters

// TODO: write the validation functions

// SOLUTION
// function isValidName(name) {
//   if (typeof name == "string" && name.trim().length >= 3) {
//     return true;
//   }
//   return false;
// }

function isValidName(name) {
  if (typeof name !== "string") {
    return false;
  }

  if (name == "") {
    return false;
  }

  if (name.trim().length < 3) {
    return false;
  }

  // if (name.match(/(?:[ \t\r\n]){3,}/)) {
  //   return false;
  // }

  if (name == "X") {
    return false;
  }

  if (typeof name === "string") {
    return true;
  }
}

// tests:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

// 2. Define an `hoursAttended(..)` validator that takes two parameters, `attended` and `length`. The validator returns `true` if all the following match the two parameters (`false` otherwise):

// 	- either parameter may only be a string or number
// 	- both parameters should be treated as numbers
// 	- both numbers must be 0 or higher
// 	- both numbers must be whole numbers
// 	- `attended` must be less than or equal to `length`

function hoursAttended(attended, length) {
  if (typeof attended !== "string" && typeof attended !== "number") {
    return false;
  }

  if (typeof length !== "number" && typeof length !== "string") {
    return false;
  }

  if (attended == "" || length == "") return false;

  const attendedNumber = Number(attended);
  const lengthNumber = Number(length);

  if (attendedNumber < 0 || lengthNumber < 0) {
    return false;
  }

  if (attendedNumber > lengthNumber) return false;

  if (
    parseInt(attendedNumber, 10) !== attendedNumber ||
    parseInt(lengthNumber, 10) !== lengthNumber
  ) {
    return false;
  }

  return true;
}

console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
