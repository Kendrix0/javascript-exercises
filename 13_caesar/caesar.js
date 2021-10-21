const caesar = function(str, shift) {
    if (-26 > shift || shift > 26) {
        shift = shift%26
    }
    cipher = [];
    for(i=0; i< str.length; i++) {
        if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
            let x = str.charCodeAt(i);
            if (x+shift < 65) {
                cipher.push(String.fromCharCode((x+shift)+26))
            } else if (x+shift <=90) {
                cipher.push(String.fromCharCode(x+shift))
            } else {
                cipher.push(String.fromCharCode((x+shift)-26))
            }
            
        } else if (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122) {
            let x = str.charCodeAt(i);
            if (x+shift < 97) {
                cipher.push(String.fromCharCode((x+shift)+26))
            } else if (x+shift <=122) {
                cipher.push(String.fromCharCode(x+shift))
            } else {
                cipher.push(String.fromCharCode((x+shift)-26))
            }
        } else {
            cipher.push(str[i])
        }
    }
    return cipher.join('')
};

// Do not edit below this line
module.exports = caesar;
