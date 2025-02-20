const reverseString = function(word) {
    let string = "";
    let i = word.length;
    while (i >= 0){
        string += word.charAt(i);
        i--;
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
