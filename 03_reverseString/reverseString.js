const reverseString = function(str) {
    s = ''
    for (let i = str.length - 1; i > -1; i--) {
        s += str[i]
    }
    return s
};

// Do not edit below this line
module.exports = reverseString;
