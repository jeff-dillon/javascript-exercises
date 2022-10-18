const fibonacci = function(requestedIndex) {
    const fibArray = [];
    for(let i = 0; i <= 100; i++) {
        if(fibArray.length == 0 || fibArray.length == 1) {
            fibArray.push(1);
        } else {
            fibArray.push(fibArray[i-1] + fibArray[i-2]);
        }
    }
    if(requestedIndex < 0) {
        return "OOPS";
    }
    return fibArray[requestedIndex-1];
};

// Do not edit below this line
module.exports = fibonacci;
