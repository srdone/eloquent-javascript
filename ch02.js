var assert = require('assert');
// Loop a triangle

var loopTriangle = function loopTriangle (rows) {
  var totalRows = rows || 8;
  var currentString = '*';
  var result = [];

  for (var i = 0; i < totalRows; i++) {
    result.push(currentString);
    currentString = currentString + '*';
  }

  return result;
};

console.log('Loop triangle, no arguments:');
console.log(loopTriangle());
assert.deepEqual(
  loopTriangle(),
  ['*', '**', '***', '****', '*****', '******', '*******', '********']
);
console.log('success');

console.log('Loop triangle, passing 4 as argument:');
console.log(loopTriangle(4));
assert.deepEqual(
  loopTriangle(4),
  ['*', '**', '***', '****']
);
console.log('success');

console.log('\n\n');

// FizzBuzz
console.log('FizzBuzz\n');

var fizzBuzz = function fizzBuzz (max) {
  var result = [];
  var maxNumber = max || 100;

  var divisibleByX = function divisibleBy3 (number, x) {
    return number % x === 0;
  };

  for (var i = 1; i <= maxNumber; i++) {
    if (divisibleByX(i, 3) && !divisibleByX(i, 5)) {
      result.push('Fizz');
    } else if (divisibleByX(i, 5) && !divisibleByX(i, 3)) {
      result.push('Buzz');
    } else if (divisibleByX(i, 5) && divisibleByX(i, 3)) {
      result.push('FizzBuzz');
    } else {
      result.push(i);
    }
  }

  return result;
};

console.log('fizzBuzz, limit of 20');
console.log(fizzBuzz(20));
assert.deepEqual(
  fizzBuzz(20),
  [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']
);
console.log('success');
