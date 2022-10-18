const getTheTitles = function(arrayOfMaps) {
    const titleArray = [];
    const numberOfMaps = arrayOfMaps.length;
    for(let i = 0; i < numberOfMaps; i++) {
        const currentMap = arrayOfMaps[i];
        titleArray.push(currentMap["title"]);
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
