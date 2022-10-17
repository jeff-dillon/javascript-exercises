const reverseString = function(myString) {
    const myArray = myString.split("");
    myArray.reverse();
    const result = myArray.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
