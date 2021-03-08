let numbers = [];
for (i = 1; i <= 10; i++) {
    numbers.push(i);
}

let numbersInc = numbers.map(function(num){
    return num + 10;
})

numbers.forEach(function(number, index) {
    console.log(`index: ${index}, original number: ${number}, incremented value: ${numbersInc[index]}`);
})



/* Fastest way
for (i = 1; i <= 10; i++) {
    console.log(`index: ${i-1}, original number: ${i}, incremented value: ${i + 10}`);
}
*/