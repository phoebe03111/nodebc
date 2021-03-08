let number = 1;
let asterisk = '*';

do {
    if (number %2 == 1) {
        console.log(asterisk);
        asterisk += '**';
    }
    number++;
} while (number <= 13);
