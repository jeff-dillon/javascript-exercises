const sumAll = function(firstValue, secondValue) {
    if(typeof(firstValue) != "number" || typeof(secondValue) != "number") {
        return 'ERROR';
    } else if(firstValue < 0 || secondValue < 0) {
        return 'ERROR';
    } else {
        if(firstValue < secondValue) {
            start = firstValue;
            end = secondValue;
        } else {
            start = secondValue;
            end = firstValue;
        }
        let result = 0;
        for(i = start; i <= end; i++) {
            result += i;
        }
        return result;

    }
};

// Do not edit below this line
module.exports = sumAll;
