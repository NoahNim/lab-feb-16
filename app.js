// Problem 1

var sum = function (num1, num2) {
  totalSum = (num1 + num2);
  //console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + totalSum);
  return totalSum;
}

// Problem 2

var multiply = function (num1, num2) {
  totalMultiply = (num1 * num2);
  //console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + totalMultiply);
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
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sum3);
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multiply3);
  return totalArray;
}
