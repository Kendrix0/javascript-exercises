const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(array) {
	let total = 0;
  for (i=0; i < array.length; i++) {
    total += array[i]
  }
  return total
};

const multiply = function(array) {
	let total = 1;
  for (i=0; i < array.length; i++) {
    total *= array[i]
  }
  return total
};

const power = function(x, e) {
	return x**e
};

const factorial = function(x) {
	let ans = 1
  while (x > 1) {
    ans *= x;
    x--;
  }
  return ans
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
