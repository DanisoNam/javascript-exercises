const reverseString = function(word) {
    let result = "";
    for(let i = word.length; i >= 1; i--){
        result = result + word.charAt(i-1);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
