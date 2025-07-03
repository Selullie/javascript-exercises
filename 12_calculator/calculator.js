const add = function(num1, num2) {
  let sum = 0;
  sum = num1 + num2;
  return sum;	
};

const subtract = function(num1, num2) {
	let sum = 0;
  sum = num1 - num2;
  return sum;
};

const sum = function(numArray) {
	let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
  }
  return sum;
};

const multiply = function(numArray) {
  let sum = 1;
  for (let i = 0; i < numArray.length; i++) {
    sum *= numArray[i];
  }
  return sum;
};

const power = function(num1, num2) {
  let sum = 1;
  let numArray = [];
  for (let i = 0; i < num2; i++) {
    numArray[i] = num1;    
  }
  for (let i = 0; i < numArray.length; i++) {
    sum *= numArray[i];    
  }
  return sum;	
};

const factorial = function(num) {
  if (num === 0 || num === 1 ) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
