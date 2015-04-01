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
