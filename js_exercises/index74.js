let number = 1;
let asterisk = '*';

while (number <= 13) {
    if (number %2 == 1) {
        console.log(asterisk);
        asterisk += '**';
    }
    number++;
}