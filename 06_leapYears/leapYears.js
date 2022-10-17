const leapYears = function(year) {

    const isDivisibleByFour = year % 4 == 0;
    const isDivisibleByOneHundred = year % 100 == 0;
    const isDivisibleByFourHundred = year % 400 == 0;

    return (isDivisibleByFour && !isDivisibleByOneHundred) || isDivisibleByFourHundred;
};

// Do not edit below this line
module.exports = leapYears;
