const removeFromArray = function(array, ...item) {
    let items = [];
    items.push(...item)
    for (n = 0; n < items.length; n++) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === items[n]) {
                array.splice(i,1)
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
