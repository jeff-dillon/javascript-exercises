const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(numArray) {
	let result = 0;
  for(const num of numArray) {
    result += num;
  }
  return result;
};

const multiply = function(numArray) {
  let result = 1;
  for(const num of numArray) {
    result *= num;
  }
  return result;
};

const power = function(firstNum, secondNum) {
	return Math.pow(firstNum, secondNum);
};

const factorial = function(num) {
	if(num < 0) {
    return -1;
  } else if(num == 0) {
    return 1;
  } else {
    return(num * factorial(num -1));
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
