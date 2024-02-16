function capitalize(string) {
    const firstLetter = string[0].toUpperCase();
    return firstLetter + string.substring(1);
}

function reverseString(string) {
    let reverseString = '';
    for (let i = 0; i < string.length; i++) {
        reverseString = string[i] + reverseString;
    }
    return reverseString;
}

const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    divide(num1, num2) {
        return num1 / num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    }
}

function caesarCipher(string, key = 0) {
    let letters = [...string];
    let cipher = '';
    let temp = '';

    const alphabet = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');

    letters.forEach(letter => {
        if(letter === ' ') {
            temp += ' ';
        }
        else {
            temp  += letter;
        }
    })
    
    let cipherArr = [...temp];

    for (let i = 0; i < cipherArr.length; i++) {
        if(alphabet.indexOf(cipherArr[i]) === -1) {
            cipher += cipherArr[i];
        }
        else {
            let index = alphabet.indexOf(cipherArr[i]);
            if((index + key) > 25) {
                cipher += alphabet[index - alphabet.length + key];
            }
            else if((index + key) < 0) {
                cipher += alphabet[index + alphabet.length + key];
            }
            else {
                cipher += alphabet[index + key];
            }
        }
    }
    return cipher;
}

function analyzeArray(array) {
    function average(array) {
        let average = 0;
        for (let i = 0; i < array.length; i++) {
            average += array[i];  
        }
        return average / array.length;
    }
    function min(array) {
        return array.sort((a, b) => a - b)[0];
    }
    function max(array) {
        return array.sort((a, b) => b - a)[0];
    }
    function length(array) {
        return array.length;
    }

    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: length(array)
    }
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };