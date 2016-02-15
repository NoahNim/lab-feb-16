// Moving over prior code from the course Github

var pTagOne = document.getElementById('answer1');
var pTagTwo = document.getElementById('answer2');
var pTagThree = document.getElementById('answer3');
var pTagFour = document.getElementById('answer4');
var pTagFive = document.getElementById('answer5');
//Wow this is much cleaner than how I declared these variables. I declared them before each problem

// Problem 1
// I forgot to comment the problem numbers

var sum = function (num1, num2) {
  totalSum = (num1 + num2);
  answer1.textContent = ('* Answer: ' + 'The sum of ' + num1 + ' and ' + num2 + ' is ' + totalSum + '.');
  return totalSum;
  // I kept my console logs commented out instead of deleting them
}

// Problem 2

var multiply = function (num1, num2) {
  totalMultiply = (num1 * num2);
  //I did not put my multiplication in parentesis, JavaScript doesn't necessarily need that
  answer2.textContent = ('* Answer: ' + 'The product of ' + num1 + ' and ' + num2 + ' is ' + totalMultiply + '.');
  return totalMultiply;
}

// Problem 3

var sumAndMultiply = function (num1, num2, num3) {
  // Summing the first two numbers then adding the third
  var sum2 = sum(num1, num2);
  var sum3 = sum(num3, sum2);
  // Multiplying the first two numbers then multiplying the third
  var multiply2 = multiply(num1, num2);
  var multiply3 = multiply(multiply2, num3);
  // Making an array from the totals
  var totalArray = [sum3, multiply3];
  // Logging the totals
  answer3pt1.textContent = ('* Answer (1):  ' + num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sum3 + '.');
  answer3pt2.textContent = ('* Answer (2):  ' + 'The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multiply3 + '.');
  return totalArray;
  //Interesting way to solve this. I solved this with less variables and no array.
}

// Problem 4

var sumArray = function(array) {
  var arrayTotal = 0;
  for (var i = 0; i < array.length; i++) {
    arrayTotal += array[i];
  }
  console.table(array);
  answer4.textContent = ('* Answer: ' + array + ' was passed in as an array of numbers, and ' + arrayTotal + ' is their sum.');
  //I solved this the same way
}

// Problem 5

var multiplyArray = function(array) {
  var arrayTotal = 1;
  for (var i = 0; i < array.length; i++) {
    arrayTotal = arrayTotal * array[i];
  }
  console.table(array);
  answer5.textContent = ('* Answer: ' + 'The numbers ' + array + ' have a product of ' + arrayTotal + '.');
  // I solved this the same way
}

//Very well done. A lot cleaner than mine.
