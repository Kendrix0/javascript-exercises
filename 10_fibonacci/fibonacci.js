const fibonacci = function(num) {
    let fib = [1];
    let x = 0;
    if (num < 0) {
        return 'OOPS'
    }
    for (i=0; i<num; i++) {
        x += fib[i];
        fib.push(x);
        x = fib[i]
    }
    return fib[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
