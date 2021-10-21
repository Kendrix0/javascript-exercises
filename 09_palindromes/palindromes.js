const palindromes = function (str) {
    let arr1 = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").split('');
    return arr1.join('') == arr1.reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
