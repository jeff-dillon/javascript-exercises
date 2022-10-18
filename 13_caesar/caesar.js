const caesar = function(inputStr, shift) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultStr = "";
    
    for(let i = 0; i < inputStr.length; i++) {
        
        let character = inputStr.charAt(i);
        
        if(lower.includes(character)) {

            let index = lower.indexOf(character);
            let offset = index + shift;
            if((offset + 1) > lower.length) {
                offset = offset % lower.length;
            } else if(offset < 0) {
                offset = (Math.abs(offset) % lower.length) * -1;
            }
            resultStr += lower.slice(offset, offset + 1);

        } else if (upper.includes(character)) {

            let index = upper.indexOf(character)
            let offset = index + shift;
            if((offset +1) > upper.length) {
                offset = offset % upper.length;
            } else if(offset < 0) {
                offset = (Math.abs(offset) % upper.length) * -1;
            }
            resultStr += upper.slice(offset, offset + 1);

        } else {
            resultStr += character;
        }
    }
    return resultStr;
};

// Do not edit below this line
module.exports = caesar;
