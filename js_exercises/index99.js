let counter = 0;

for (let number = 0; number <= 1000; number++) {
    if (number % 2 == 0) {
        counter++;
        console.log(number);
    }
    if (counter >= 20) {
        break;
    }
}
