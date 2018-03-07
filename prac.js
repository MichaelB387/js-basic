// Variable
var a = 4;
// Variable
var b = 5;
// Variable
var c = 2;
var sum = a + b;
// Variable is empty but not undefined
var emptyInside = null;
// Follows arithmatic rules
var result = a + b * c;
// shorthand version will add 4 to variable a
a += 4;
//Unary Operator will increase by value of 1
b++;
// conditional statement

if (a > b) {
  isItBigger = console.log("a is bigger then b");
} else {
  isItBigger = console.log("b is biger then a");
}
console.log(isItBigger);

// Ternary operator
a === b ? console.log("Match") : console.log("No Match");

//Array
//index   0     1       2
var pens = ["red", "blue", "green"];
//will output blue
console.log(pens[1]);
//will output array length, the length is a property of an array
console.log("Array Length:", pens.length);
//using a method on the array
pens.reverse();
//will output the array in reverse order
console.log(pens);

console.log(sum);
console.log(result);
console.log(a);
console.log(b);

function findBiggestFraction(a, b) {
    var result
  a > b ? result = ["firstFraction ", a] : result = ["secondFraction ", b]
  return result
}

var firstFraction = 3 / 4;
var secondFraction = 5 / 7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("First fraction result: ", firstFraction)
console.log("Second fraction result: ", secondFraction)
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!")


