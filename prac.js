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

var firstFraction = 3 / 4; // Global scope
var secondFraction = 5 / 7;  // Global scope

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("First fraction result: ", firstFraction)
console.log("Second fraction result: ", secondFraction)
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!")


// Anonymous function example
// immediately invoked function expression
//https://www.linkedin.com/learning/javascript-essential-training-3/immediately-invoked-functional-expressions
var theBiggest = function(d,e) {
    var result  //Local scoped variable
    a>b ? result = ["d ", d] : result = ["e ", e]
    return result //Local scoped variable
}

//Means there is an anonymous function within the variable
console.log(theBiggest(7/9, 13/25))

// immediately invoked function expression
//https://www.linkedin.com/learning/javascript-essential-training-3/immediately-invoked-functional-expressions
// var theBiggest = (function(d,e) {
//     var result
//     a>b ? result = ["d ", d] : result = ["e ", e]
//     return result
// })(7/9, 13/25)

// //Means there is an anonymous function within the variable
// console.log(theBiggest)

const MYCONSTANT = 5 // is a constant cannot be changed once defined
console.log(MYCONSTANT)

function logScope() {
// let // Block scope variable, Smaller scope then var
  let localVar = 2; 
  if (localVar) {
    let localVar = "im different";
    console.log("nested locallVar: ", localVar);
  }
  console.log("logScope localVar: ", localVar);
}

logScope();

var course = new Object()

// course.title = "JavaScript Essential Training"
// course.instructor = "Morten Rand-Hendriksen"
// course.level = 1
// course.published = true
// course.views = 0

// Shorthand

var course = {
    title : "JavaScript Essential Training",
    instructor : "Morten Rand-Hendriksen",
    level : 1,
    published : true,
    views : 0
}

console.log(course)