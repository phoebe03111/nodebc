let number = 0;
let result = 0;

do { 
    if (number % 2 == 1) {
        result += number;
        console.log(result);
    }
   number++;
} while (result <= 1000);