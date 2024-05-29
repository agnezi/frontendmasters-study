// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
  Object.is = function ObjectIs(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
      return Number.isNaN(a) === Number.isNaN(b);
    }

    if (typeof a === "number" && typeof b === "number" && a + b === 0) {
      return (-Infinity / a === Infinity) === (-Infinity / b === Infinity);
    }

    return a === b;
  };
}

// tests:
console.log("1 true", Object.is(42, 42) === true);
console.log("2 true", Object.is("foo", "foo") === true);
console.log("3 true", Object.is(false, false) === true);
console.log("4 true", Object.is(null, null) === true);
console.log("5 true", Object.is(undefined, undefined) === true);
console.log("6 true", Object.is(NaN, NaN) === true);
console.log("7 true", Object.is(-0, -0) === true);
console.log("8 true", Object.is(0, 0) === true);

console.log("1 false", Object.is(-0, 0) === false);
console.log("2 false", Object.is(0, -0) === false);
console.log("3 false", Object.is(0, NaN) === false);
console.log("4 false", Object.is(NaN, 0) === false);
console.log("5 false", Object.is(42, "42") === false);
console.log("6 false", Object.is("42", 42) === false);
console.log("7 false", Object.is("foo", "bar") === false);
console.log("8 false", Object.is(false, true) === false);
console.log("9 false", Object.is(null, undefined) === false);
console.log("10 false", Object.is(undefined, null) === false);
