const reverseString = function(myString) {
    const myArray = myString.split("");
    myArray.reverse();
    const result = myArray.join("");
    return result;
};

const palindromes = function (inputStr) {
    const noPunctuationStr = inputStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    const noSpaceStr = noPunctuationStr.replace(/[\s]/g,"");
    const lowerStr = noSpaceStr.toLowerCase();
    const revStr = reverseString(lowerStr);
    return lowerStr === revStr;
};


// Do not edit below this line
module.exports = palindromes;
