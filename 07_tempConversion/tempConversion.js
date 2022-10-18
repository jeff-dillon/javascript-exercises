/*

Fahrenheit to Celcius
x °F ≘ (x − 32) × 5/9 °C
f = (c - 32) * (5/9)

Celcius to Fahrenheit
x °C ≘ (x × 9/5 + 32) °F
c = f * (9/5) + 32

*/

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(tempInF) {
  const adjustmentRatio = 5/9;
  const tempInC = (tempInF - 32) * adjustmentRatio;
  return round(tempInC, 1);
};

const ctof = function(tempInC) {
  const adjustmentRatio = 9/5;
  const tempInF = (tempInC * adjustmentRatio) + 32;
  return round(tempInF,  1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
