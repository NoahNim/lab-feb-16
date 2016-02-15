// Moving over prior code from the course Github

var pTagOne = document.getElementById('answer1');
var pTagTwo = document.getElementById('answer2');
var pTagThree = document.getElementById('answer3');
var pTagFour = document.getElementById('answer4');
var pTagFive = document.getElementById('answer5');

// Problem 1

var sum = function (num1, num2) {
  totalSum = (num1 + num2);
  answer1.textContent = ('* Answer: ' + 'The sum of ' + num1 + ' and ' + num2 + ' is ' + totalSum + '.');
  return totalSum;
}

// Problem 2

var multiply = function (num1, num2) {
  totalMultiply = (num1 * num2);
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
}

// Problem 4

var sumArray = function(array) {
  var arrayTotal = 0;
  for (var i = 0; i < array.length; i++) {
    arrayTotal += array[i];
  }
  console.table(array);
  answer4.textContent = ('* Answer: ' + array + ' was passed in as an array of numbers, and ' + arrayTotal + ' is their sum.');
}

// Problem 5

var multiplyArray = function(array) {
  var arrayTotal = 1;
  for (var i = 0; i < array.length; i++) {
    arrayTotal = arrayTotal * array[i];
  }
  console.table(array);
  answer5.textContent = ('* Answer: ' + 'The numbers ' + array + ' have a product of ' + arrayTotal + '.');
}
