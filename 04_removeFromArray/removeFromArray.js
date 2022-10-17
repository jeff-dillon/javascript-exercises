const removeFromArray = function(sourceArray, ...itemsToRemove) {
    return sourceArray.filter(item => !itemsToRemove.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
