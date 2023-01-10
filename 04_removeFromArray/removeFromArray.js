const removeFromArray = function() {
    array = arguments[0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < (arguments.length); j++) {
            if (array[i] === arguments[j]) {
                array.splice(i, 1);
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
