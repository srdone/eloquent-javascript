// Loop a triangle

var loopTriangle = function loopTriangle (rows) {
  var totalRows = rows || 8;
  var stringToPrint = '*';

  for (var i = 0; i < totalRows; i++) {
    console.log(stringToPrint);
    stringToPrint = stringToPrint + '*';
  }
};

console.log('Loop triangle, no arguments:');
loopTriangle();

console.log('Loop triangle, passing 4 as argument:');
loopTriangle(4);

console.log('Loop triangle, passing 10 as argument:');
loopTriangle(10);

console.log('\n\n');

// FizzBuzz
console.log('FizzBuzz\n');

var fizzBuzz = function fizzBuzz (max) {
  var maxNumber = max || 100;

  var divisibleByX = function divisibleBy3 (number, x) {
    return number % x === 0;
  };

  for (var i = 1; i <= maxNumber; i++) {
    if (divisibleByX(i, 3) && !divisibleByX(i, 5)) {
      console.log('Fizz');
    } else if (divisibleByX(i, 5) && !divisibleByX(i, 3)) {
      console.log('Buzz');
    } else if (divisibleByX(i, 5) && divisibleByX(i, 3)) {
      console.log('FizzBuzz');
    } else {
      console.log(i);
    }
  }
};

console.log('fizzBuzz, limit of 20');
fizzBuzz(20);
