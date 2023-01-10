const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedArray = [];
    for (let i = 1; i <= stringArray.length; i++) {
        reversedArray.push(stringArray[stringArray.length - i]);
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
