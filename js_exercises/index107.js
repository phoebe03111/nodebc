function biggerNumber(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        console.log('Error');
    }
    else {
        if (firstNumber > secondNumber) {
            console.log('Number ' + firstNumber + ' is bigger than ' + secondNumber);
        }
        else if (firstNumber == secondNumber) {
            console.log('Both numbers are ' + firstNumber);
        }
        else if (firstNumber < secondNumber) {
            console.log('Number ' + firstNumber + ' is not bigger than ' + secondNumber);
        }
    }
}
biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);
biggerNumber('hi',0);