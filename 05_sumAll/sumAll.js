const sumAll = function(first, last) {
    sum = 0
    if ((typeof(first) != "number" || typeof(last) != "number")
    || ((first < 0) || (last < 0))) {
        return 'ERROR'
    }
    if (first < last) {
        smaller = first;
        larger = last;
    } else {
        smaller = last;
        larger = first;
    }
    for(let i = smaller; i < larger+1; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
