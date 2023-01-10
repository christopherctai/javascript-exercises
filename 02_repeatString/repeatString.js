const repeatString = function(string, repeats) {
    output = '';
    if (repeats < 0) {
        return "ERROR"
    }
    for (let i = 0; i < repeats; i++) {
            output += string;
    };
    return output;
};

// Do not edit below this line
module.exports = repeatString;
