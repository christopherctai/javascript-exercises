const sumAll = function(firstInteger, secondInteger) {
    if (firstInteger < 0 || secondInteger < 0 || typeof(firstInteger) != "number" || typeof(secondInteger) != "number") return "ERROR";
    let sum = 0;
    if (firstInteger > secondInteger) {
        [firstInteger, secondInteger] = [secondInteger, firstInteger];
    }
    for (firstInteger; firstInteger < secondInteger + 1; firstInteger++) {
        sum += firstInteger;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
