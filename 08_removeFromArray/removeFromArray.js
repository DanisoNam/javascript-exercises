const removeFromArray = function (array, ...input) {
    let results = [];
    results = array.filter( (item) => !input.includes(item) ? true: false);
    return results;
};

// Do not edit below this line
module.exports = removeFromArray;
